import styled from "styled-components";
import trash from '../../assets/trash.svg';
import { Reset } from '../../css/Reset';
import { useContext, useState } from "react";
import { weekdays } from "../../constants/weekdays";
import { InfoContext } from "../../contexts/InfoContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HabitsPage(props) {

    const {addHabit, setAddHabit} = props;
    const [selectedDays, setSelectedDays] = useState([]);
    const [habitName, setHabitName] = useState('');
    const {profileImage, token, habits, setHabits} = useContext(InfoContext);
    const navigate = useNavigate();

    const auth = {
        headers:{
            'Authorization': `Bearer ${token}`
        }
    };

    useEffect(() => {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const promise = axios.get(url, auth);

        promise.then(response => {
                setHabits(response.data);
        });
    }, [])

    function addDay(id) {
        if(!selectedDays.includes(id)) {
            setSelectedDays([...selectedDays, id])
        } else {
            let newdays = selectedDays.filter(day => {
                if(day !== id) {
                    return true;
                }
            })
            setSelectedDays(newdays)
        }
    }

    function createHabit(e) {
        e.preventDefault();
        while(habitName === '') {
            alert('Preencha o nome do hábito.');
            return;
        }

        while(selectedDays.length === 0) {
            alert('Preencha o(s) dia(s) a repetir o hábito.');
            return;
        }

        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

        const body = {name: habitName, days: selectedDays};

        const promise = axios.post(url, body, auth);

        promise.then(() => {
            alert('Seu hábito foi salvo!');
            listHabits();
        })
    }

    function listHabits() {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
        const promise = axios.get(url, auth);

        promise.then(response => {
                setHabits(response.data);
                setHabitName('');
                setSelectedDays([]);
                console.log(habits)
        });
    }

    function deleteHabit(id) {
        
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, auth)
        
        console.log(promise)

        promise.then(response => {
            const get = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', auth);
            get.then(newList => {
                setHabits(newList.data);
                console.log(newList);
            })
        })

        promise.catch(erro => console.log(erro))
    }

    return (
        <> 
            <Reset/>
            <Header/>
            <SCBody>
                <SCHabits>
                    <p>Meus hábitos</p>
                    <button onClick={() => setAddHabit(true)}>+</button>
                </SCHabits>
                {!addHabit && (habits.length === 0) && (
                    <div className="nohabit">
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                    </div>
                )}
                {addHabit && (habits.length === 0) && (
                    <>
                        <SCCreateHabit onSubmit={createHabit}>
                            <input type="text" placeholder="nome do hábito" value={habitName} required onChange={(e) => setHabitName(e.target.value)} />
                            <div className="days">
                                {weekdays.map((day, id) => <button type="button" style={{backgroundColor: selectedDays.includes(id) ? '#CFCFCF' : '#FFFFFF'}} className="day" key={id} onClick={() => addDay(id)}>{day}</button>)}
                            </div>
                            <div className="actions">
                                <button type="reset" className="cancel" onClick={() => setAddHabit(false)}>Cancelar</button>
                                <button type="submit" className="save">Salvar</button>
                            </div>
                        </SCCreateHabit>
                        <div className="nohabit">
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                        </div>
                    </>
                )}
                {habits.length !== 0 && (
                    <>
                        <SCCreateHabit onSubmit={createHabit}>
                            <input type="text" placeholder="nome do hábito" value={habitName} onChange={(e) => setHabitName(e.target.value)} />
                            <div className="days">
                                {weekdays.map((day, id) => <button type="button" style={{backgroundColor: selectedDays.includes(id) ? '#CFCFCF' : '#FFFFFF'}} className="day" key={id} onClick={() => addDay(id)}>{day}</button>)}
                            </div>
                            <div className="actions">
                                <button type="reset" className="cancel" onClick={() => setAddHabit(false)}>Cancelar</button>
                                <button type="submit" className="save">Salvar</button>
                            </div>
                        </SCCreateHabit>
                        <SCList>
                            {habits.map((h, id) => ( 
                            <SCSettledHabit key={id}>
                                <div className="title">
                                    <p>{h.name}</p>
                                    <img src={trash} onClick={() => deleteHabit(id)} />
                                </div>
                                <div className="days">
                                    {weekdays.map((day, id) => <button type="button" key={id} className="day" 
                                    disabled style={{backgroundColor: h.days.includes(id) ? '#CFCFCF' : '#FFFFFF', 
                                    color: h.days.includes(id) ? '#ffffff' : '#dbdbdb'}} >{day}</button>)}
                                </div>
                            </SCSettledHabit>))}
                        </SCList>
                    </>
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
    align-content: center;

    .nohabit {
        display: flex;
        justify-content: center;
    }

    .nohabit p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
        margin-top: 25px;
        width: 90%;
    }
`

const SCHabits = styled.div `
    display: flex;
    margin-top: 30px;
    padding: 0 18px;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;

    }

    button {
        background: #52B6FF;
        border-radius: 4.63636px;
        width: 40px;
        height: 35px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        border: none;
    }
`

const SCList = styled.div `
    gap: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-bottom: 115px;

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;

    }
`

const SCCreateHabit = styled.form `
    width: 90%;
    height: 180px;  
    background: #FFFFFF;
    border-radius: 5px;
    margin: 20px auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 19px;

    input {
        width: 95%;
        height: 30px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;
    }

    input::placeholder {
        color: #dbdbdb
        
    }

    .days {
        margin-top: -23px;
        display: flex;
    }

    .day {
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;

        
    }

    .actions {
        width: 100%;
        display: flex;
        justify-content: end;
        gap: 20px;
    }

    .cancel {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #52B6FF;
        border: none;
        background: #ffffff;
    }

    .save {
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 15.976px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        border: none;
    }

`

const SCSettledHabit = styled.div `
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 91px;
    background-color: #ffffff;
    border-radius: 5px;
    justify-content: center;
    gap: 8px;
    padding: 0 18px;
    box-sizing: border-box;
    margin: 0 auto;

    .days {
        display: flex;
        gap: 4px;
    }

    .day {
        width: 30px;
        height: 30px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
    
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`