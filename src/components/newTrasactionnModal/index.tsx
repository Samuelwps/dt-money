import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

import Modal from "react-modal"
import { Container, TrasectionTypeContainer, RadioBox } from "./styled";

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

interface ModalProps{
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : ModalProps){
    const { createTransaction } = useTransactions()

    const [type, setType] = useState("deposit")
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [category, setCategory] =useState("")

    async function handleClickSubmit(event: FormEvent){
        event.preventDefault()

        await createTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle("")
        setType("deposit")
        setAmount(0)
        setCategory("")
        onRequestClose()
    }

    return(
        <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose} 
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal"/>
            </button>

            <Container onSubmit={handleClickSubmit}>
                <h2>Cadastrar transações</h2>

                <input placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
                />

                <input placeholder="Valor"  type="number"
                value={amount}
                onChange={event => setAmount(Number(event.target.value))}
                />

                <TrasectionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType("deposit") }}
                        isActive={type === "deposit"}
                        activeColor="green"

                    >
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType("withdraw") }}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saida</span>
                    </RadioBox>
                </TrasectionTypeContainer>

                <input placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    );
}