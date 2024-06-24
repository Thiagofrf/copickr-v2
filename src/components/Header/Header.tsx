import Logo from '../../assets/CoPickr-logo.png'
import { Outlet, Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <>
            <header>
                <Link to="/">
                    <img src={Logo} alt="CoPickr Logo - A light red text logo with a color fade on it" width={100}/>
                </Link>

                <div>
                    <Link to="/">Como usar</Link>
                    <Link to="/login">Entrar</Link>
                    <Link to="/register" className='signup-button'>Cadastre-se</Link>
                </div>
            </header>
            <Outlet />
        </>
    )
}

export default Header;