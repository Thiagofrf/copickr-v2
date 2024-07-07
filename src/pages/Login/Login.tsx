import './Login.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <form className="login__form">
                    <p className='login__form--title'>Entrar</p>
                    <fieldset>
                        <legend>
                            Nome de usuário
                        </legend>
                        <label htmlFor="login_username">
                            <input 
                                type="text" 
                                name="login_username" 
                                id="login_username"
                                placeholder='Nome de usuário'
                            />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>
                            Senha
                        </legend>
                        <label htmlFor="login_password">
                            <input 
                                type="password" 
                                name="login_password" 
                                id="login_password" 
                                placeholder='Senha'
                            />
                        </label>
                    </fieldset>
                    <button 
                        type="submit"
                        className='login__submit'
                    >
                        Entrar
                    </button>
                </form>
                <hr />
                <div className='login__social-media'>
                    <button className='login__social-media--google'>
                        <GoogleIcon /> Entrar com Google
                    </button>
                    <button className='login__social-media--facebook'>
                        <FacebookIcon /> Entrar com Facebook
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;