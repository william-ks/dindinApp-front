import { useContext } from 'react'

import UserContext from '../context/UserProvider'

export default function useUser(): object {
    return useContext(UserContext);
}