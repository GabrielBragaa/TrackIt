import { useContext } from 'react'
import logoBranca from '../assets/TrackIt.png'
import { InfoContext } from '../contexts/InfoContext'
import styled from 'styled-components'


export default function Header() {
    
    const {profileImage} = useContext(InfoContext);
    
    return (
        <SCHeader data-test='header' >
            <img src={logoBranca} className="logo" />
            <img src={profileImage} className="profile-pic" data-test='avatar' />
        </SCHeader>
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
