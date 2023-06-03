import styled from "styled-components";
import eu from '../../assets/eu.jpg';
import logoBranca from '../../assets/TrackIt.png';
import ellipse from '../../assets/Ellipse 2.svg'


export default function HabitsPage(props) {

    const {addHabit, setAddHabit} = props;

    return (
        <> 
            <SCHeader>
                <img src={logoBranca} className="logo" />
                <img src={eu} className="profile-pic" />
            </SCHeader>
            <SCBody>
                <SCHabits>
                    <p>Meus hábitos</p>
                    <button onClick={() => setAddHabit(true)}>+</button>
                </SCHabits>
                {!addHabit && (
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                )}
                {addHabit && (
                    <SCCreateHabit>
                    <input type="text" placeholder="nome do hábito" />
                    <div>
                        <input type="checkbox" name="domingo" id="domingo" />
                        <label htmlFor="domingo">D</label>
                    </div>
                    </SCCreateHabit>
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
`

const SCHabits = styled.div `
    display: flex;
    margin-top: 30px;
    padding: 0 18px;
    justify-content: space-between;
    box-sizing: border-box;

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
    margin-top: 28px;
    padding: 0 18px;
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
    width: 340px;
    height: 180px;
    background-color: purple;
`