import { AxiosResponse } from "axios";
import { createContext, useState } from "react";
import useUser from "../hooks/useUser";
import { IBalance, INewTransaction, ITransactions } from "../interfaces/transactions";
import { IHeaders } from "../interfaces/users";
import api from "../service/api";

const TransactionContext = createContext({});

interface Props {
    children: JSX.Element
};

export const TransactionProvider: React.FC<Props> = ({ children }) => {
    const [transactions, setTransactions] = useState<ITransactions[]>([]);
    const [balance, setBalance] = useState<IBalance>({ entrada: 0, saida: 0, result: 0 });

    const { headers }: any = useUser();

    const createTransaction = async (form: INewTransaction): Promise<any> => {
        try {
            await api.post('/transactions', { ...form }, { headers });
            await readTransactions();
        } catch (e) {
            console.log(e)
        }
    }

    const readTransactions = async (): Promise<void> => {
        try {
            const { data }: AxiosResponse = await api.get('/transactions', { headers });

            setBalance({ ...data.balance })
            setTransactions([...data.transactions]);
        } catch (e) {
            console.log(e)
        }
    }


    const data: object = {
        createTransaction,
        readTransactions,
        transactions,
        balance
    }

    return (
        <TransactionContext.Provider value={data}>
            {children}
        </TransactionContext.Provider>
    );
}

export default TransactionContext;