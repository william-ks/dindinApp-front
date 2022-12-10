import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SimpleHeader from '../../components/SimpleHeader';
import useUser from '../../hooks/useUser';
import { INewUsers } from '../../interfaces/users';
import './style.css';

const Signup: React.FC = () => {
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const [validPass, setValidPass] = useState<boolean>(true);
    const navigate = useNavigate();

    const name = useRef<any>(null);
    const email = useRef<any>(null);
    const password = useRef<any>(null);
    const passwordConfirm = useRef<any>(null);

    const validateForm = (): void => {
        verifyPass();
        if (!email.current.value || !password.current.value || !name.current.value || !passwordConfirm.current.value || !validPass) {
            setDisabledButton(true);
        } else {
            setDisabledButton(false);
        }
    }

    const verifyPass = (): void => {
        if (password.current.value === passwordConfirm.current.value) {
            setValidPass(true)
        } else {
            setValidPass(false)
        }
    }

    const { signup }: any = useUser();

    const handleSubmit = async (e: React.SyntheticEvent<EventTarget>): Promise<void> => {
        e.preventDefault();

        const form: INewUsers = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        }

        const error = await signup(form);

        if (error) {
            alert(error.response.data.message)
        } else {
            navigate('/home');
        }

    }

    return (
        <main className="signup">
            <SimpleHeader />
            <div className="center">
                <div className="flex">
                    <div className="box">
                        <h2 className="formTitle">Login</h2>
                        <form className="form" onChange={validateForm} onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                <p className="inputName">Nome:</p>
                                <input ref={name} type="text" id="name" required />
                            </label>
                            <label htmlFor="email">
                                <p className="inputName">E-mail:</p>
                                <input ref={email} type="email" id="email" required />
                            </label>
                            <label htmlFor="password">
                                <p className="inputName">Senha:</p>
                                <input ref={password} type="password" id="password" required />
                                {!validPass && <p className="alert">As senhas devem ser iguais.</p>}
                            </label>
                            <label htmlFor="passwordConfirm">
                                <p className="inputName">Confirmação de senha:</p>
                                <input ref={passwordConfirm} type="password" id="passwordConfirm" required />
                            </label>
                            <button disabled={disabledButton} className="button send">Entrar</button>
                            <Link className="highlight" to="/">Já tem conta? Clique aqui</Link>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Signup