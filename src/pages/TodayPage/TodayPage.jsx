import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Reset } from "../../css/Reset";
import styled from "styled-components";
import { InfoContext } from "../../contexts/InfoContext";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


export default function TodayPage() {

    const {token, percentage, setPercentage} = useContext(InfoContext);
    const [todayHabit, setTodayHabit] = useState([]);
    const [clicked, setClicked] = useState([]);
    const auth = {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    };
    let day = dayjs().locale('pt-br').format('dddd, DD/MM');
    day = day.charAt(0).toUpperCase() + day.slice(1);
    
    useEffect(() => {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const promise = axios.get(url, auth);
        promise.then(response => {
            setTodayHabit(response.data)
        })
    }, []);

    function addClick(id) {
        if(!clicked.includes(id)) {
                const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
                const promise = axios.post(url, {}, auth);
                promise.then(response => {
                    setClicked([...clicked, id])
                    setPercentage(((clicked.length + 1) / (todayHabit.length)) * 100);
                })
        } else {
            const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            const promise = axios.post(url, {}, auth);
            promise.then(response => { 
                let newClick = clicked.filter(click => {
                    if(click !== id) {
                        return true;
                    }
                })
                setClicked(newClick)
                setPercentage(percentage - ((clicked.length + 1) / (todayHabit.length)) * 100);
            })
        }
    }

    return (
        <>
            <Reset/>
            <Header/>
            <SCBody>
                <SCTitle>
                    <p className="day">{day}</p>
                    {todayHabit.length === 0 && (
                        <p className="habitDone">Nenhum hábito concluído ainda</p>
                    )}
                </SCTitle>
                <SCHabitsContainer>
                    {todayHabit.length !== 0 && (
                        todayHabit.map((h, id) => (
                            <SCHabit key={id}>
                                <div className="left">
                                    <p className="habitTitle">{h.name}</p>
                                    <p className="currentSequence">Sequência atual: 4 dias</p>
                                    <p className="record">Seu recorde: 3 dias</p>
                                </div>
                                <div className="right" onClick={() => addClick(h.id)}>
                                    <ion-icon name="checkbox" style={{color: clicked.includes(h.id) ? '#8FC549' : '#E7E7E7'}} ></ion-icon>
                                </div>
                        </SCHabit>
                        ))
                    )}
                </SCHabitsContainer>
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
`
const SCTitle = styled.div `
    width: 90%;
    margin: 28px 0;

    .day {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }

    .habitDone {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #BABABA;
    }
`

const SCHabitsContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 10px;
`

const SCHabit = styled.div `
    display: flex;
    width: 100%;
    height: 94px;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0 15px;
    border-radius: 5px;

    .habitTitle {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }

    .currentSequence, .record {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
        color: #666666;
    }

    ion-icon {
        width: 90px;
        height: 90px;
    }
`