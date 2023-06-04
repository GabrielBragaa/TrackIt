import logo from '../../assets/logo.png';
import { SCBody, SCLogin, SCParagraph } from './StyledHomePage';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import {InfoContext} from '../../contexts/InfoContext';

export default function HomePage() {
    
    const navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const {setToken, setProfileImage, token, profileImage} = useContext(InfoContext);

    function login(e) {
        e.preventDefault();
        
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const body = {email, password};

        const promise = axios.post(url, body);

        promise.then((go) => {
            console.log(go)
        })
    }

    return (
        <SCBody>
            <img src={logo}></img>
            <SCLogin onSubmit={login}>
                <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Entrar</button>
            </SCLogin>
            <Link to='/cadastro' >
                <SCParagraph>Não tem uma conta? Cadastre-se!</SCParagraph>
            </Link>
        </SCBody>
    )
}