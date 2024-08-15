import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const list = [
    {
        collabUsers: [
            "Beatriz", "Andresa", "Gustavo", "Ganley"
        ]
    }
]

const MyList = () => {
    return (
        <>
            <div className="my-list">
                <div className="my-list__header">
                    <h2 className="my-list__header--title">Restaurantes para visitar</h2>
                    <div className="my-list__header--users">
                        {list?.[0].collabUsers.map((user: string, index: number) => { // COMPONENTIZAR ISSO
                            return (
                                <p key={index}>
                                    {user.charAt(0)}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div className="my-list__content">
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    Nome
                                </td>
                                <td>
                                    Endereço
                                </td>
                                <td>
                                    Faixa de preço
                                </td>
                                <td>
                                    Links
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    La Braciera
                                </td>
                                <td>
                                    Alameda Lorena, 1040 - Jardim Paulista, São Paulo - SP, 01424-004
                                </td>
                                <td>
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                </td>
                                <td>
                                    <a href="https://labraciera.infrafood.com.br/">
                                        https://labraciera.infrafood.com.br/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    La Braciera
                                </td>
                                <td>
                                    Alameda Lorena, 1040 - Jardim Paulista, São Paulo - SP, 01424-004
                                </td>
                                <td>
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                </td>
                                <td>
                                    <a href="https://labraciera.infrafood.com.br/">
                                        https://labraciera.infrafood.com.br/
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    La Braciera
                                </td>
                                <td>
                                    Alameda Lorena, 1040 - Jardim Paulista, São Paulo - SP, 01424-004
                                </td>
                                <td>
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                    <AttachMoneyOutlinedIcon />
                                </td>
                                <td>
                                    <a href="https://labraciera.infrafood.com.br/">
                                        https://labraciera.infrafood.com.br/
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="my-list__footer">
                    <div className="my-list__footer--buttons">
                        <button className='c-success'>
                            <ContentCopyOutlinedIcon /> Copiar link para convidar usuários
                        </button>

                        <button className='c-error'>
                            <DeleteOutlineOutlinedIcon /> Deletar Lista
                        </button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default MyList