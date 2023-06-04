import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { SCBody, SCLogin, SCParagraph } from './StyledSignInPage';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignInPage () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    function sendInfo(e) {
        e.preventDefault();

        const urlPost = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const body =  {email, name, image, password};
        
        const promise = axios.post(urlPost, body);
        promise.then(() => {
            alert('Seu cadastro foi feito com sucesso!');
            alert('Já pode fazer seu login!');
            navigate('/');
        });
        promise.catch(erro => console.log(erro))
    }
    
    return (
        <SCBody>
            <img src={logo}></img>
            <SCLogin onSubmit={sendInfo}>
                <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" placeholder='nome' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="url" placeholder='foto' name="pic" id="pic" value={image} onChange={(e) => setImage(e.target.value)} />
                <button type='submit'>Cadastrar</button>
            </SCLogin>
            <Link to='/' >
                <SCParagraph>Já tem uma conta? Faça login!</SCParagraph>
            </Link>
        </SCBody>
    )
}

