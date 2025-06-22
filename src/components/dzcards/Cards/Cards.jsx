import '../../Сommon.css'
import './cardsStyle.css'
import { useState } from 'react';


export default function Card ({data})
{
    const [isButtonPressed, setIsButtonPressed] = useState(false);
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
                    <button
                        className="footer"
                        style={{
                            transform: isButtonPressed ? 'scale(0.95)' : 'scale(1)',
                            transition: 'transform 0.1s ease',
                        }}
                        onMouseDown={() => setIsButtonPressed(true)}
                        onMouseUp={() => setIsButtonPressed(false)}
                        onMouseLeave={() => setIsButtonPressed(false)}
                    >
                        Select package</button>
                </div>
            </div>
        </>
    )
}