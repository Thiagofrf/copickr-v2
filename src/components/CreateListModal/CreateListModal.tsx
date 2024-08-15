import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type Props = {
    exhibition: string,
    closeModal: Function
}

const CreateListModal = (props: Props) => {
    return (
        <>
            <div className={`create-modal ${props.exhibition}`}>
                <div className="create-modal__content">
                    <h2>
                        Crie sua lista
                    </h2>
                    <p>
                        Registre os dados iniciais, depois você pode complementar sua lista com qualquer informação.
                    </p>
                    <form>
                        <fieldset className="create-modal__content--row">
                            <label htmlFor="">
                                Nome da lista
                                <input type="text" placeholder="Digite um nome para sua lista" />
                            </label>
                            <label htmlFor="">
                                Categoria
                                <select name="" id="">
                                    <option disabled selected>Selecione uma opção</option>
                                    <option value="Teste1">
                                        Teste 1
                                    </option>
                                    <option value="Teste1">
                                        Teste 2
                                    </option>
                                    <option value="Teste1">
                                        Teste 3
                                    </option>
                                    <option value="Teste1">
                                        Teste 4
                                    </option>
                                    <option value="Teste1">
                                        Teste 5
                                    </option>
                                </select>
                            </label>
                        </fieldset>
                        <fieldset className="create-modal__content--item">
                            <label htmlFor="">
                                Primeiro item da lista
                                <input type="text" placeholder="Ex: Visitar Barcelona" />
                            </label>
                        </fieldset>
                        <button 
                            className="create-modal__content--submit"
                            onClick={(event) => {
                                event?.preventDefault();
                                window?.location?.replace('/list/123')
                            }}
                        >
                            Iniciar minha lista
                        </button>
                    </form>
                    <div 
                        className="create-modal__close"
                        onClick={() => props.closeModal()}
                    >
                        <CloseOutlinedIcon />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateListModal