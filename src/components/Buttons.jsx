import './Сommon.css';
import {useEffect, useState} from "react";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

async function GetWeather ()
{
    const url = `https://api.open-meteo.com/v1/forecast?latitude=46.4846&longitude=30.7233&current=temperature_2m,weather_code&timezone=Europe/Kiev`;
    try {
        const response = await fetch (url);
        return await response.json();
    }
    catch (err) {
        console.error('Ошибка при получении данных:', err.message);
        return null;
    }
}

export default function Buttons({forScale, forCount}) {
    const [countLike, setCountLike] = useState(forCount);
    const [countDisLike, setCountDisLike] = useState(forCount);
    const [scaleLike, setScaleLike] = useState(forScale);
    const [scaleDisLike, setScaleDisLike] = useState(forScale);
    const [temperature, setTemperature] = useState("тёпленько)");

    useEffect(() => {
        async function ShowWeather ()
        {
            let weather = await GetWeather();
            if (weather) {
                console.log('Температура:', weather.current.temperature_2m);
                setTemperature (weather.current.temperature_2m);
            }
            else {
                console.log('Не удалось загрузить погоду.');
                return null;
            }
        }
        ShowWeather ();
        console.log('Компонент отрисован!');
        return () => {
            console.log('Компонент удалён!');
        };
    }, []);

    useEffect(() =>{
        console.log('Компонент изменен');

    }, [countLike, countDisLike])

    return (
        <>
            <div className='weather'>В Одессе сейчас: {temperature}°C</div>
            <div className="buttonsWrapper">
                <button
                    style={{ transform: `scale(${scaleLike})`, transition: 'transform 0.2s ease' }}
                    className="myButton like"
                    onMouseDown={() => setScaleLike(0.9)}
                    onMouseUp={() => {
                        setScaleLike(1);
                        setCountLike(countLike + 1);
                    }}
                >
                    <FaThumbsUp style={{ marginRight: '16px' }} />
                    {countLike}
                </button>

                <button
                    style={{ transform: `scale(${scaleDisLike})`, transition: 'transform 0.2s ease'}}
                    className="myButton disLike"
                    onMouseDown={() => setScaleDisLike(0.9)}
                    onMouseUp={() => {
                        setScaleDisLike(1);
                        setCountDisLike(countDisLike + 1);

                    }}
                >
                    <FaThumbsDown style={{ marginRight: '16px' }} />
                    {countDisLike}
                </button>
            </div>
        </>

    );
}
