import './CreateListModal.scss';

const CreateListModal = () => {
    return (
        <>
            <div className="create-modal">
                <div className="create-modal__content">
                    <h2>
                        Crie sua lista
                    </h2>
                    <p>
                        Registre os dados iniciais, depois você pode complementar sua lista com qualquer informação.
                    </p>
                    <form>
                        <fieldset>
                            <label htmlFor="">
                                Nome da lista
                            </label>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="">
                                Categoria
                            </label>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="">
                                Primeiro item da lista
                            </label>
                        </fieldset>
                        <button>
                            Iniciar minha lista
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateListModal