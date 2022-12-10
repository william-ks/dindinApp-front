import useTransactions from '../../../../hooks/useTransactions';
import { ITransactions } from '../../../../interfaces/transactions';
import './style.css';

const Table: React.FC = () => {

    const { transactions }: any = useTransactions();

    return (
        <ul className="listTransactions">

            {
                transactions.map((el: ITransactions) => {
                    return (
                        <li className="item" key={el.id}>
                            <p>{el.description}</p>
                            <p className={`${el.type === 'entrada' ? 'green' : 'red'}`}>
                                {el.type !== 'entrada' && '-'}{(el.value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </p>
                            <p>{el.category_name}</p>
                            <p>{el.date.split("T")[0].split('-').reverse().join('/')}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Table;