import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { InfoContext } from "../contexts/InfoContext";
import { useContext } from "react";

export default function Footer() {
    
    const {percentage} = useContext(InfoContext);
    const navigate = useNavigate();
    
    return (
        <SCFooter data-test='menu' >
            <p onClick={() => navigate('/habitos')} data-test='habit-link' >Hábitos</p>
            <div className="progress" onClick={() => navigate('/hoje')} data-test='today-link' >
                <CircularProgressbar value={percentage} text='Hoje' background backgroundPadding={6} 
                styles={buildStyles({backgroundColor: '#52B6FF', textColor: '#ffffff', pathColor: '#ffffff', trailColor: 'transparent'})}/>
            </div>
            <p onClick={() => navigate('/historico')} data-test='history-link' >Histórico</p>
        </SCFooter>
    )
}

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
        width: 91px;
        height: 91px;
        position: relative;
        bottom: 55px;
    }
`