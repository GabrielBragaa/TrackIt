import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Reset } from "../../css/Reset";
import styled from "styled-components";

export default function TodayPage() {

    return (
        <>
            <Reset/>
            <Header/>
            <SCBody>
                <SCTitle>
                    <p className="day">Domingo, 04/06</p>
                    <p className="habitDone">Nenhum hábito concluído ainda</p>
                </SCTitle>
                <SCHabitsContainer>
                    <SCHabit>
                        <div className="left">
                            <p className="habitTitle">Ler 1 livro</p>
                            <p className="currentSequence">Sequência atual: 4 dias</p>
                            <p className="record">Seu recorde: 3 dias</p>
                        </div>
                        <div className="right">
                            <ion-icon name="checkbox"></ion-icon>
                        </div>
                    </SCHabit>
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
        color: #E7E7E7;
    }
`