import './Register.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
    return (
        <div className="register">
            <div className="register__container">
                <form className="register__form">
                    <p className='register__form--title'>Registre-se</p>
                    <fieldset>
                        <legend>
                            Nome de usuário
                        </legend>
                        <label htmlFor="register_username">
                            <input 
                                type="text" 
                                name="register_username" 
                                id="register_username"
                                placeholder='Nome de usuário'
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Email
                        </legend>
                        <label htmlFor="register_email">
                            <input 
                                type="email" 
                                name="register_email" 
                                id="register_email"
                                placeholder='Email'
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Senha
                        </legend>
                        <label htmlFor="register_password">
                            <input 
                                type="password" 
                                name="register_password" 
                                id="register_password" 
                                placeholder='Senha'
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Confirme sua senha
                        </legend>
                        <label htmlFor="register_password_confirmation">
                            <input 
                                type="password" 
                                name="register_password_confirmation" 
                                id="register_password_confirmation" 
                                placeholder='Confirme sua senha'
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Termos e condições</legend>
                        <label htmlFor="terms_and_conditions" className='register__checkbox'>
                            <input 
                                type="checkbox" 
                                name="terms_and_conditions" 
                                id="terms_and_conditions" 
                            />
                            Aceito os termos e condições
                        </label>
                    </fieldset>
                    <button 
                        type="submit"
                        className='register__submit'
                    >
                        Registre-se
                    </button>
                </form>
                <hr />
                <div className='register__social-media'>
                    <button className='register__social-media--google'>
                        <GoogleIcon /> Entrar com Google
                    </button>
                    <button className='register__social-media--facebook'>
                        <FacebookIcon /> Entrar com Facebook
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register;