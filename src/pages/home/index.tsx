import { useEffect } from "react";
import { BsArrowDownCircle, BsArrowUpCircle } from 'react-icons/bs';
import { CiDollar } from 'react-icons/ci';
import FullHeader from "../../components/FullHeader";
import useTransactions from "../../hooks/useTransactions";
import Box from "./components/Box";
import Options from "./components/Options";
import Table from "./components/Table";
import './style.css';

const Home: React.FC = () => {

    const { readTransactions, balance }: any = useTransactions();

    useEffect(() => {
        readTransactions();
    }, []);

    return (
        <>
        <FullHeader />
            <main className="home">
                <div className="box">
                    <div className="center">
                        <div className="groupBox">
                            <Box
                                title="entradas"
                                icon={<BsArrowUpCircle />}
                                value={balance.entrada}
                                last="Última entrada em 13 de abril"
                                color="#12ff42"
                            />

                            <Box
                                title="saidas"
                                icon={<BsArrowDownCircle />}
                                value={balance.saida}
                                last="Última entrada em 13 de abril"
                                color="#ff0060"
                            />

                            <Box
                                title="saldo"
                                icon={<CiDollar />}
                                value={balance.result}
                                last="de 15 de maio a 15 de abril"
                                color="#008cff"
                            />

                        </div>

                        <Options />
                        <Table />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;