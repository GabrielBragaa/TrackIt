import styled from "styled-components";
import eu from '../../assets/eu.jpg';
import logoBranca from '../../assets/TrackIt.png';
import ellipse from '../../assets/Ellipse 2.svg';
import trash from '../../assets/trash.svg';
import { Reset } from '../../css/Reset';
import { useState } from "react";
import { weekdays } from "../../constants/weekdays";


export default function HabitsPage(props) {

    const {addHabit, setAddHabit} = props;
    const [selectedDays, setSelectedDays] = useState([]);
    const [habitName, setHabitName] = useState('');
    let [habits, setHabits] = useState([]);

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

        if(habitName !== '') {
            habits.push({name: {habitName}, days: {selectedDays}});
            setHabits(habits);
            setHabitName('');
            setSelectedDays('');
        }
    }

    function deleteHabit(id) {
        habits.splice(id, 1);
        let newList = [...habits];
        setHabits(newList)
    }

    return (
        <> 
            <Reset/>
            <SCHeader>
                <img src={logoBranca} className="logo" />
                <img src={eu} className="profile-pic" />
            </SCHeader>
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
                                    <p>{h.name.habitName}</p>
                                    <img src={trash} onClick={() => deleteHabit(id)} />
                                </div>
                                <div className="days">
                                    {weekdays.map((day, id) => <button type="button" key={id} className="day" 
                                    disabled style={{backgroundColor: h.days.selectedDays.includes(id) ? '#CFCFCF' : '#FFFFFF', 
                                    color: h.days.selectedDays.includes(id) ? '#ffffff' : '#dbdbdb'}} >{day}</button>)}
                                </div>
                            </SCSettledHabit>))}
                        </SCList>
                    </>
                )}
            </SCBody>
            <SCFooter>
                <p>Hábitos</p>
                <div className="progress">
                    <p>Hoje</p>
                    <img src={ellipse} />
                </div>
                <p>Histórico</p>
            </SCFooter>
        </>
    )
}


const SCHeader = styled.header `
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px 0 18px;

    .profile-pic {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }

    .logo {
        width: 95px;
        height: 32px;
    }

`

const SCBody = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
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

    p {
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;

    }
`

const SCFooter = styled.footer `
    width: 100%;
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0px;
    right: 0px;
    height: 70px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
    box-sizing: border-box;
    padding: 22px 31px 0 28px;

    .progress {
        display: flex;

        img {
            position: absolute;
            bottom: 15px;
            right: 150px;
        }

        p {
            position: absolute;
            bottom: 50px;
            right: 173px;
            z-index: 1;
            color: #ffffff;
        }
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