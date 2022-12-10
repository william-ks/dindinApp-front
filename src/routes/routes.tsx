import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { TransactionProvider } from '../context/TransactionsProvider'
import { UserProvider } from '../context/UserProvider'
import useUser from '../hooks/useUser'
import Home from '../pages/home'
import Signup from '../pages/signup'
import Login from '../pages/singIn'

const SecureRoutes: React.FC = (): any => {
    const { token }: any = useUser();
    return token ? <Outlet /> : <Navigate to="/" />
}

export default function MainRoutes() {
    return (
        <Routes>
            <Route element={
                <>
                    <UserProvider>
                        <Outlet />
                    </UserProvider>
                </>
            }>


                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route element={
                    <>
                        <TransactionProvider>
                            <SecureRoutes />
                        </TransactionProvider>
                    </>
                }>


                    <Route path='/home' element={<Home />} />
                </Route>
            </Route>
        </Routes>
    )
}