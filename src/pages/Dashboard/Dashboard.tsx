import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CreateListModal from '../../components/CreateListModal/CreateListModal';
import Empty from '../../assets/empty-list.png';
import './Dashboard.scss'
import { Link } from 'react-router-dom';

const lists = [
    {
        listName: 'Encontro de 2 anos',
        listCategory: 'Restaurantes',
        collabUsers: [
            "Beatriz", "Andresa", "Gustavo", "Ganley"
        ],
        listUrl: '#'
    },
    {
        listName: 'Filmes para assistir',
        listCategory: 'Filmes',
        collabUsers: [
            "Beatriz"
        ],
        listUrl: '#'
    },
    {
        listName: 'Próximos destinos',
        listCategory: 'Lugares',
        collabUsers: [
            "Beatriz", "Andresa", "Gustavo", "Vinicius"
        ],
        listUrl: '#'
    },
    {
        listName: 'Ferramentas úteis para desenvolvimento',
        listCategory: 'Lista personalizada',
        collabUsers: [],
        listUrl: '#'
    }
]

const Dashboard = () => {
    return (
        <>
            <div className="dashboard">
                <div className="dashboard-lists">
                    <h2>Minhas listas</h2>
                    <div className="dashboard-lists__not-found">
                        <img src={Empty} alt="Ilustração vetorizada de um garoto mostrando um papel vazio" />
                        <p>Você não tem nenhuma lista criada</p>
                    </div>
                    <a href="#">
                        Crie uma lista agora
                        <span>
                            <ArrowDownwardOutlinedIcon />
                        </span>
                    </a>
                    <div className="dashboard-lists__container">
                        {lists.map((item: any, index: number) => {
                            return (
                            <div className="dashboard-lists__item" key={index}>
                                <div className="dashboard-lists__item--tags">
                                    <p>{item.listName}</p>
                                    <p>{item.listCategory}</p>
                                </div>
                                <div className='dashboard-lists__item--row'>
                                    <div className="dashboard-lists__item--collabs">
                                        <div>
                                            {item.collabUsers.map((user: string, index: number) => {
                                                return (
                                                    <p key={index}>
                                                        {user.charAt(0)}
                                                    </p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <Link 
                                        to={item.listUrl}
                                        className="dashboard-lists__item--link"
                                    >
                                        Acessar <ChevronRightOutlinedIcon />
                                    </Link>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <div className="dashboard-create">
                    <h2>Criar lista</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu posuere mi. In ultricies ornare mauris. Quisque congue turpis tellus, ut tincidunt tellus suscipit sed. Maecenas neque mi, fringilla et vestibulum sit amet, egestas quis mauris. Ut sollicitudin faucibus mollis. Etiam et sem at enim rutrum vulputate. Nullam malesuada nisi vitae luctus tincidunt. Aenean auctor diam risus, eu molestie justo ornare id. Nullam ac risus ipsum. Sed non ipsum lacinia, maximus dolor in, ornare elit. Duis at dui luctus, lobortis quam eu, volutpat mauris. Ut dictum laoreet arcu, vitae finibus libero volutpat vel. Duis id turpis eu orci egestas commodo. Nam dapibus felis sed justo fermentum, in blandit turpis ullamcorper. Aenean ac ligula et mi venenatis venenatis. Aliquam ut gravida est.
                    </p>
                    <p>
                        Suspendisse consectetur tempus metus, in consequat nisi facilisis sit amet. Mauris ac nunc in lectus hendrerit sodales quis in elit. Suspendisse potenti. Nullam metus ligula, congue ac metus id, lobortis scelerisque neque. Suspendisse ipsum felis, cursus ac magna eu, mattis fringilla dolor. Sed viverra euismod neque, ac fermentum nisi semper sit amet. Integer bibendum augue sed nunc euismod blandit. Nullam elementum magna a orci condimentum, a facilisis ex mollis. Etiam suscipit nunc eget nulla posuere, in fringilla orci molestie. Morbi non mollis odio. Pellentesque id lobortis erat, nec fermentum massa.
                    </p>
                    <button>
                        Criar lista <AddOutlinedIcon />
                    </button>
                </div>
            </div>


            <CreateListModal />
        </>
    )
}

export default Dashboard