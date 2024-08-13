import MovieNight from '../../assets/movie-night.png'
import { Link } from 'react-router-dom'

const CallToRegister = () => {
    return (
        <div className='ctregister_container'>
            <div className="ctregister_content">
                <div className="ctregister_content--text">
                    <p>
                        Descomplique suas escolhas.
                    </p>
                    <p>
                        Aproveite os momentos.
                    </p>
                </div>
                <img src={MovieNight} alt="Ilustração vetorizada de um casal assistindo um filme" />
            </div>
            <div className='ctregister_button'>
                <Link to="/register">
                    Comece a usar agora
                </Link>
            </div>
        </div>
    )
}

export default CallToRegister