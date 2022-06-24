import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue:#5429CC;
        --green: #33CC95;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --shape: #FFFFFF;
    }

    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 80.5%;
        }

    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        color:#f0f2f5;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight:600;
    }

    button {
        cursor:pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor:not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position:fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display:flex;
        align-items:center;
        justify-content:center;
    }
    .react-modal-content{
        color:black;
        width: 100%;
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        position: relative;
    }

    .react-modal-close{
        position:absolute;
        right: 1.5rem;
        top:1.5rem;
        padding: 0.5rem;
        background:transparent;
        border:none;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.8);
        }
    }
`