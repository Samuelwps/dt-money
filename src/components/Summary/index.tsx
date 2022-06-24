import { Container } from "./styled";

import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"
import { useContext } from 'react';
import { useTransactions } from "../../TransactionsContext";

export function Summary(){

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === "deposit"){
            acc.depositis += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws -= transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        depositis:0,
        withdraws:0,
        total:0
    })
    

    
    return(
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={incomeImg} alt=""/>
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                    style:"currency",
                    currency: "BRL"
                    }).format(summary.depositis)}
                </strong>
            </div>
            
            <div>
                <header>
                    <p>Saida</p>
                    <img src={outcomeImg} alt=""/>
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat("pt-BR", {
                    style:"currency",
                    currency: "BRL"
                    }).format(summary.withdraws)}</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt=""/>
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                    style:"currency",
                    currency: "BRL"
                    }).format(summary.total)}</strong>
            </div>
        </Container>
    );
}
