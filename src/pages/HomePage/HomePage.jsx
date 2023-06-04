import logo from '../../assets/logo.png';
import { SCBody, SCLogin, SCParagraph } from './StyledHomePage';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import axios from 'axios';
import {InfoContext} from '../../contexts/InfoContext';
import { ThreeDots } from 'react-loader-spinner';

export default function HomePage() {
    
    const navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    const {setToken, setProfileImage, token, profileImage} = useContext(InfoContext);
    const [disable, setDisable] = useState(false);

    function login(e) {
        e.preventDefault();
        setDisable(true);
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
        const body = {email, password};

        const promise = axios.post(url, body);

        promise.then((response) => {

            setToken(response.data.token);
            setProfileImage(response.data.image);
            navigate('/habitos');
        })

        promise.catch((error) => console.log(error))
    }

    return (
        <SCBody>
            <img src={logo}></img>
            <SCLogin onSubmit={login}>
                <input type='email' placeholder='email' disabled={disable} value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='senha' disabled={disable} value={password} onChange={(e) => setPassword(e.target.value)} />
                {!disable && (
                    <button type='submit' disabled={disable}>Entrar</button>
                )}
                {disable && (
                    <button disabled={disable}><ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#ffffff" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                     /></button>
                )}
            </SCLogin>
            <Link to='/cadastro' >
                <SCParagraph>Não tem uma conta? Cadastre-se!</SCParagraph>
            </Link>
        </SCBody>
    )
}