import './style.css'
import logoImg from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { VscSignOut } from 'react-icons/vsc'
import useUser from '../../hooks/useUser';

const FullHeader: React.FC = () => {
    const { logout }:any = useUser();
    const navigate = useNavigate();

    const redirect = ():void => {
        logout()
        navigate('/')
    }

    return (
        <header className='header full'>
            <div className="center">
                <div className="logo">
                    <img src={logoImg} alt="dindin" className="image" />
                </div>

                <nav className='menu'>
                    <ul>
                        <li>
                            <Link to="/" onClick={redirect}>
                                <VscSignOut />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default FullHeader;