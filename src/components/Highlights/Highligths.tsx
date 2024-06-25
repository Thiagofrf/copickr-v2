import './Highlights.scss'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

const Highlights = () => {
    return (
        <div className="main_highlights">
            <h2>
                Nossos diferenciais
            </h2>
            <div className="main_highlights--container">
                <div className="main_highlights--item">
                    <ThumbUpOffAltOutlinedIcon />
                    <p className="main_highlights--item__title">
                        Avaliações
                    </p>
                    <p className="main_highlights--item__text">
                        Avalie a experiência após ir em um restaurante, hotel ou outro item das suas listas. 
                    </p>
                </div>
                <div className="main_highlights--item">
                    <ShuffleOutlinedIcon />
                    <p className="main_highlights--item__title">
                        Escolha aleatória
                    </p>
                    <p className="main_highlights--item__text">
                        Se estiver na dúvida de qual filme da sua lista assistir, a CoPickr escolhe para você.
                    </p>
                </div>
                <div className="main_highlights--item">
                    <TableChartOutlinedIcon />
                    <p className="main_highlights--item__title">
                        Listas prontas
                    </p>
                    <p className="main_highlights--item__text">
                        Na CoPickr temos modelos de listas prontas para você preencher. Mas também não tiramos sua liberdade de criar uma lista customizada. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Highlights