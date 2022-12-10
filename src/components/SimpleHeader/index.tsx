import './style.css'
import logoImg from '../../assets/logo.svg'

const SimpleHeader: React.FC = () => {
    return (
        <header className='header'>
            <div className="center">
                <div className="logo">
                    <img src={logoImg} alt="dindin" className="image" />
                </div>
            </div>
        </header>
    )
}

export default SimpleHeader;