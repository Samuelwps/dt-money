import { createContext, ReactNode, useState, useEffect, useContext  } from "react"
import { api } from "../services/api";


interface TransactionProps{
    id:number;
    title: string;
    amount: number;
    type:string;
    category: string;
    createAt: string;
}

type TransactionInput = Omit<TransactionProps, "id" | "createAt">

interface TransactionsProviderProps{
    children:ReactNode;
}

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transactionsInput: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionProvider({children}: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
      api.get("transactions")
          .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createAt: new Date(),
    })
    
    const { transaction } = response.data;

    console.log(transaction)
    
    setTransactions([
      ...transactions,
      transaction
    ]);
  }

    return(
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}