import { useState } from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import CreateListModal from '../../components/CreateListModal/CreateListModal';
import { Link } from 'react-router-dom';

const lists = [
    // {
    //     listName: 'Encontro de 2 anos',
    //     listCategory: 'Restaurantes',
    //     collabUsers: [
    //         "Beatriz", "Andresa", "Gustavo", "Ganley"
    //     ],
    //     listUrl: '#'
    // },
    // {
    //     listName: 'Filmes para assistir',
    //     listCategory: 'Filmes',
    //     collabUsers: [
    //         "Beatriz"
    //     ],
    //     listUrl: '#'
    // },
    // {
    //     listName: 'Próximos destinos',
    //     listCategory: 'Lugares',
    //     collabUsers: [
    //         "Beatriz", "Andresa", "Gustavo", "Vinicius"
    //     ],
    //     listUrl: '#'
    // },
    // {
    //     listName: 'Ferramentas úteis para desenvolvimento',
    //     listCategory: 'Lista personalizada',
    //     collabUsers: [],
    //     listUrl: '#'
    // }
]

const Dashboard = () => {
    const [exhibition, setExhibition] = useState('hide')

    const closeModal = () => {
        setExhibition('hide')
    }

    return (
        <>
            <div className="dashboard">
                <div className="dashboard-lists">
                    <h2>Minhas listas</h2>
                    {lists.length ?
                        <div className="dashboard-lists__container">
                            {lists.map((item: any, index: number) => {
                                return (
                                    <div className="dashboard-lists__item" key={index}>
                                        <div className="dashboard-lists__item--collabs">
                                            <div>
                                                {item.collabUsers.map((user: string, index: number) => { // COMPONENTIZAR ISSO
                                                    return (
                                                        <p key={index}>
                                                            {user.charAt(0)}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <p className="dashboard-lists__item--tags">
                                            {item.listCategory}
                                        </p>
                                        <p className="dashboard-lists__item--title">
                                            {item.listName}
                                        </p>
                                        <div className="dashboard-lists__item--link">
                                            <Link 
                                                to={item.listUrl}
                                            >
                                                Acessar <ChevronRightOutlinedIcon />
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <>
                            <div className="dashboard-lists__not-found">
                                <p>Você não tem nenhuma lista criada</p>
                            </div>
                        </>
                    }
                </div>
                <div className="dashboard-create">
                    <button onClick={() => setExhibition('')}>
                        Crie uma lista agora <AddOutlinedIcon />
                    </button>
                </div>
            </div>


            <CreateListModal 
                exhibition={exhibition}
                closeModal={closeModal}
            />
        </>
    )
}

export default Dashboard