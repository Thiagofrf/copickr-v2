import { Link } from 'react-router-dom'
import Logo from '../../assets/CoPickr-logo.png'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <hr />
            <div className='footer-row1'>
                <div className='footer-col1'>
                    <img src={Logo} alt="CoPickr Logo" />
                    <p>Descomplique as escolhas.</p>
                    <Link to="/register">
                        Registre-se <ArrowCircleRightOutlinedIcon />
                    </Link>
                </div>
            </div>
            <hr />
            <div className='footer-row1'>
                <p>©2024 Feito por Thiago Fontanella</p>
            </div>
        </footer>
    )
}

export default Footer