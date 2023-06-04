import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import ellipse from '../assets/Ellipse 2.svg';

export default function Footer() {
    
    const navigate = useNavigate();
    
    return (
        <SCFooter>
            <p onClick={() => navigate('/habitos')}>Hábitos</p>
            <div className="progress">
                <p onClick={() => navigate('/hoje')}>Hoje</p>
                <img src={ellipse} />
            </div>
            <p onClick={() => navigate('/historico')} >Histórico</p>
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