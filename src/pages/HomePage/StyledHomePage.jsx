import styled from 'styled-components'

export const SCBody = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: start;
    position: absolute;
    top: 10%;

    img {
        width: 180px;
        height: 180px;
        margin-bottom: 22px;
    }
`

export const SCLogin = styled.form `
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 20px;

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }

    input::placeholder {
        color: #dbdbdb;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }

    button {
        width: 303px;
        height: 45px;
        left: 36px;
        top: 381px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        border: none;
        color: #FFFFFF;
    }
`

export const SCParagraph = styled.p `
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`