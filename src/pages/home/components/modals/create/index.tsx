import Modal from '../../../../../components/Modal'
import './style.css'
import { useRef, useState } from 'react'
import { INewTransaction } from '../../../../../interfaces/transactions'
import useTransactions from '../../../../../hooks/useTransactions'

interface Props {
    close: any
}

const CreateModal: React.FC<Props> = ({ close }) => {
    const [disabledButton, setDisabledButton] = useState<boolean>(true);
    const type = useRef<any>(null);
    const description = useRef<any>(null);
    const value = useRef<any>(null);
    const date = useRef<any>(null);

    const { createTransaction }: any = useTransactions()

    const validateForm = (): void => {
        if (!Number(value.current.value) || Number(value.current.value) < 0) {
            value.current.value = ''
        }

        if (!type.current.value || !description.current.value || !value.current.value || !date.current.value) {
            setDisabledButton(true);
            return
        }

        setDisabledButton(false);
    }

    const handleClick = async (e: React.SyntheticEvent<EventTarget>): Promise<void> => {
        e.preventDefault();

        const form: INewTransaction = {
            category_id: 1,
            date: date.current.value,
            type: type.current.value,
            value: (Number(value.current.value) * 100),
            description: description.current.value

        }

        await createTransaction(form);

        close(false);
    }

    return (
        <Modal close={close}>
            <>
                <h1 className="titleModal">Nova Transação</h1>
                <form className="formNew" onChange={validateForm} onSubmit={handleClick}>
                    <label htmlFor="">
                        <p className="inputName">Tipo</p>
                        <select ref={type} required>
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saída</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <p className="inputName">Descrição</p>
                        <input type="text" ref={description} required />
                    </label>
                    <label htmlFor="">
                        <p className="inputName">Valor</p>
                        <input type="text" ref={value} required min={0} />
                    </label>
                    <label htmlFor="">
                        <p className="inputName">Data</p>
                        <input type="date" ref={date} required />
                    </label>


                    <button disabled={disabledButton} className="button">
                        Criar
                    </button>
                </form>
            </>
        </Modal>
    )
}

export default CreateModal