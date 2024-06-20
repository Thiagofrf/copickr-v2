import Logo from '../../assets/CoPickr-logo.png'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt="CoPickr Logo - A light red text logo with a color fade on it" width={100}/>

            <div>
                <a href="#">Como usar</a>
                <a href="#">Entrar</a>
                <a href="#" className='signup-button'>Cadastre-se</a>
            </div>
        </header>
    )
}

export default Header;