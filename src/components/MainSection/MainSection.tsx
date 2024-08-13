import { Link } from 'react-router-dom'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CollabImg from '../../assets/colab_team.png'

const MainSection = () => {
    return (
        <main>
            <h1>
                Crie listas colaborativas
            </h1>
            <p>
                Precisa criar uma lista de lugares legais para descobrir com seu par romântico? Uma lista de lugares para incluir no seu roteiro de viagens? Uma lista de filmes pra assistir na noitada com os amigos? Na CoPickr você consegue tudo isso e muito mais.
            </p>
            <div className='main_buttons'>
                <Link to="register" className='main_buttons--item main_buttons--item__signup'>Cadastre-se grátis<ArrowRightAltIcon /></Link>
                <Link to="/" className='main_buttons--item'>Como usar <ArrowRightAltIcon /></Link>
            </div>
            <img src={CollabImg} alt="Vetor UI de várias pessoas segurando peças de xadrez, indicando colaboração" />
        </main>
    )
}

export default MainSection