import logo from '../../assets/logo.png';
import { SCBody, SCLogin, SCParagraph } from './StyledHomePage';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <SCBody>
            <img src={logo}></img>
            <SCLogin>
                <input type='email' placeholder='email' />
                <input type="password" placeholder='senha' />
                <button type='submit'>Entrar</button>
            </SCLogin>
            <Link to='/cadastro' >
                <SCParagraph>Não tem uma conta? Cadastre-se!</SCParagraph>
            </Link>
        </SCBody>
    )
}