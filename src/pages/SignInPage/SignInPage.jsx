import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { SCBody, SCLogin, SCParagraph } from './StyledSignInPage';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

export default function SignInPage () {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const [disable, setDisable] = useState(false);

    function sendInfo(e) {
        e.preventDefault();
        setDisable(true);
        const urlPost = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
        const body =  {email, name, image, password};
        
        const promise = axios.post(urlPost, body);
        promise.then(() => {
            navigate('/');
        });
        promise.catch(erro => { 
            alert(erro.response.data.message);
            setDisable(false);
        })
    }
    
    return (
        <SCBody>
            <img src={logo}></img>
            <SCLogin onSubmit={sendInfo}>
                <input type='email' disabled={disable} placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" disabled={disable} placeholder='senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="text" disabled={disable} placeholder='nome' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="url" disabled={disable} placeholder='foto' name="pic" id="pic" value={image} onChange={(e) => setImage(e.target.value)} />
                {!disable && (
                    <button type='submit' disabled={disable}>Cadastrar</button>
                )}
                {disable && (
                    <button type='submit' disabled={disable}><ThreeDots 
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
            <Link to='/' >
                <SCParagraph>Já tem uma conta? Faça login!</SCParagraph>
            </Link>
        </SCBody>
    )
}

