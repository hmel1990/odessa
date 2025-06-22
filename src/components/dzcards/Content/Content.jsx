import '../../Сommon.css'
import Card from  '../Cards/Cards.jsx'
import './content.css'

export default function Content ()
{
    const data1 = {
        headerText: "Basic",
        price: "$2.99",
        scale: 1,
        features: ["Безлимитный трафик", "Скорость до 300 Мбит/с", "Антивирус и родительский контроль", "Поддержка 24/7 "],
        myClassName: "green",
    };
    const data2 = {
        headerText: "Standard",
        price: "$5.99",
        scale: 1.3,
        features: ["Безлимитный трафик", "Скорость до 300 Мбит/с", "Антивирус и родительский контроль", "Поддержка 24/7 "],
        myClassName: "blue",
    };
    const data3 = {
        headerText: "Premium",
        price: "$0.99",
        scale: 1,
        features: ["Безлимитный трафик", "Скорость до 300 Мбит/с", "Антивирус и родительский контроль", "Поддержка 24/7 "],
        myClassName: "navy",
    };
    return (
        <>
            <div className={"wrapperForCards"}>
            <Card data = {data1} />
            <Card data = {data2} />
            <Card data = {data3} />
            </div>
        </>
    )
}