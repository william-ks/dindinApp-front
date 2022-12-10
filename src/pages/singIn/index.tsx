import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SimpleHeader from '../../components/SimpleHeader';
import useUser from '../../hooks/useUser';
import { IUsers } from '../../interfaces/users';
import './style.css';

const Login: React.FC = () => {
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const navigate = useNavigate();
    const email = useRef<any>(null);
    const password = useRef<any>(null);

    const validateForm = (): void => {
        if (!email.current.value || !password.current.value) {
            setDisabledButton(true);
        } else {
            setDisabledButton(false);
        }
    }

    const { login }: any = useUser();

    const handleSubmit = async (e: React.SyntheticEvent<EventTarget>): Promise<void> => {
        e.preventDefault();

        const form: IUsers = {
            email: email.current.value,
            password: password.current.value
        }

        const error = await login(form);

        if (error) {
            alert(error.response.data.message)
        } else {
            navigate('/home');
        }

    }

    return (
        <main className="login">
            <SimpleHeader />
            <div className="center">
                <div className="flex">
                    <div className="text">
                        <h1>
                            Controle suas <span className="highligh">finanças</span>,
                            sem planilha chata.
                        </h1>
                        <p>
                            Organizar as suas finanças nunca foi tão fácil, com o DINDIN,
                            você tem tudo num único lugar e em um clique de distância.
                        </p>
                        <button className="button">
                            <Link to="/signup">Cadastre-se</Link>
                        </button>
                    </div>
                    <div className="box">
                        <h2 className="formTitle">Login</h2>
                        <form className="form" onChange={validateForm} onSubmit={handleSubmit}>
                            <label htmlFor="email">
                                <p className="inputName">E-mail:</p>
                                <input ref={email} type="email" id="email" />
                            </label>
                            <label htmlFor="password">
                                <p className="inputName">Senha:</p>
                                <input ref={password} type="password" id="password" />
                            </label>
                            <button disabled={disabledButton} className="button send">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login