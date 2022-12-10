import { useContext } from 'react'

import TransactionContext from '../context/TransactionsProvider'

export default function useTransactions(): object {
    return useContext(TransactionContext);
}