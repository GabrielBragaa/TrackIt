import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Reset } from "../../css/Reset";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { InfoContext } from "../../contexts/InfoContext";

export default function Historypage () {
    
    const {token} = useContext(InfoContext)

    const [historyHabits, setHistoryHabits] = useState([]);

    const auth = {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    };

    useEffect(() => {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily';
        const promise = axios.get(url, auth);
        promise.then(response => {
            setHistoryHabits(response.data);
        })

    }, [])
    

    return (
        <>
            <Reset/>
            <Header/>
            <SCBody>
                <p className="title">Histórico</p>
                {historyHabits.length === 0 && (
                    <p className="soon">Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                )}
                {historyHabits.length !== 0 && (
                    historyHabits.map((h, id) => (
                        <div className="container">
                            <SCDay>
                                <p>{h.day}</p>
                            </SCDay>
                        </div>
                    ))
                )}
            </SCBody>
            <Footer/>
        </>
    )
}

const SCBody = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background: #E5E5E5;
    box-sizing: border-box;
    align-items: center;

    .title {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        width: 90%;
        margin: 28px 0;
    }

    .soon {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        width: 90%;
    }

    .container {
        width: 90%;
        display: flex;
        flex-direction: column;
        margin-bottom: 8px;
    }

`
const SCDay = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 91px;
    background-color: #ffffff;
    border-radius: 5px;
    justify-content: center;
    padding: 0 18px;
    box-sizing: border-box;
    margin: 0 auto;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`