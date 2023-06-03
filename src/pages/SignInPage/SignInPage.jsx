import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { SCBody, SCLogin, SCParagraph } from './StyledSignInPage';

export default function SignInPage () {
    return (
        <SCBody>
            <img src={logo}></img>
            <SCLogin>
                <input type='email' placeholder='email' />
                <input type="password" placeholder='senha' />
                <input type="text" placeholder='nome' />
                <input type="url" placeholder='foto' name="pic" id="pic" />
                <button type='submit'>Cadastrar</button>
            </SCLogin>
            <Link to='/' >
                <SCParagraph>Já tem uma conta? Faça login!</SCParagraph>
            </Link>
        </SCBody>
    )
}

