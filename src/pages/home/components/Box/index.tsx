import './style.css'

interface Props {
    title: string;
    icon: React.ReactNode;
    value: number;
    last: string;
    color: string;
};


const Box: React.FC<Props> = ({ title, icon, value, last, color }) => {
    const formatedValue = (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <div className="boxCard">
            <div className="boxCard_Header">
                <h5 className="title">{title}</h5>
                <div className="icon" style={{ color }}>
                    {icon}
                </div>
            </div>

            <h2 className="value">{formatedValue}</h2>

            <p className="last">{last}</p>
        </div>
    )
}

export default Box;