import '../../Сommon.css'
import './cardsStyle.css'


export default function Card ({data})
{
    // const {features, myClassName} = data;
    return (
        <>
            <div className={`${data.myClassName} cardDefault`} style={{ scale: `${data.scale}`}}>
                <div className={'card-wrapper'} >
                    <div className={'header'}>{data.headerText}</div>
                    <div className={'price'}>{data.price}</div>
                    <ul className={'list'}>
                        {
                        data.features.map((feature, index) =>
                        {
                            let icon;
                            switch (data.headerText) {
                                case "Premium":
                                    icon = "✅";
                                    break;
                                case "Standard":
                                    index < 3 ? icon = "❌" : icon = "✅";
                                    break;
                                case "Basic":
                                    index === 0 ? icon = "✅" : icon = "❌";
                                    break;
                            }
                            return <li key={index}>{icon} {feature}</li>;
                        })
                        }
                    </ul>
                    <div className={'footer'}>Select package</div>
                </div>
            </div>
        </>
    )
}