import './Сommon.css';
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function Buttons({forScale, forCount}) {
    const [countLike, setCountLike] = useState(forCount);
    const [countDisLike, setCountDisLike] = useState(forCount);
    const [scaleLike, setScaleLike] = useState(forScale);
    const [scaleDisLike, setScaleDisLike] = useState(forScale);

    return (
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
    );
}
