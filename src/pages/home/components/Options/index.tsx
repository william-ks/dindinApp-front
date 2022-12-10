import CreateModal from '../modals/create';
import './style.css';
import { useState } from 'react'

const Options: React.FC = () => {
    const [showModal, setShowModal] = useState<Boolean>(false);

    const handleClick = (): void => {
        setShowModal(true)
    }

    return (
        <>
            {showModal && <CreateModal close={setShowModal} />}

            <div className="options">
                <button className="button" onClick={handleClick}>
                    Nova transação
                </button>
            </div>
        </>
    )
}

export default Options;