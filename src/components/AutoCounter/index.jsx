import React, { useEffect, useState } from 'react'
import Button from '../Button';
import style from './AutoCounter.module.sass'

export default function AutoCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const [isIncrement, setIsIncrement] = useState(true);
    const [isAutoClicks, setIsAutoClicks] = useState(false);
    const [ms, setMs] = useState(1000);

    const increment = () => setIsIncrement(!isIncrement);
    const addCount = () => isIncrement ? setCount(count + step) : setCount(count - step);
    const addStap = ({ target: { value } }) => setStep(+value);
    const toogleAutoClick = () => setIsAutoClicks(!isAutoClicks);

    useEffect(() => {
        let id = null;
        if (isAutoClicks) {
            id = setTimeout(() => {
                addCount()
            }, ms);
        }
        return () => clearTimeout(id);
    });

    const changeDelay = ({ target: { value } }) => {
        setMs(() => {
            if (value <= 0) return 1;
            if (value > 1000) return 1000;
            return value;
        });
    }
    return (
        <section className={style.container}>
            <h1>AutoCounter</h1>
            <article className={style.wrapper}>
                <div className={style.counterTitle}>counter : {count}</div>
                <span>step : </span>
                <input type="number" onChange={addStap} value={step} min='1' max='100' />
                <Button handler={addCount} caption={isIncrement ? 'plus' : 'minus'} />
                <Button handler={increment} caption={isIncrement ? 'increment' : 'decrement'} />
                <div>
                    <span>per seconds</span>
                    <input type="number" onChange={changeDelay} value={ms} />
                    <Button handler={toogleAutoClick} caption={isAutoClicks ? 'stop' : 'start'} autoStyle={isAutoClicks} />
                </div>
            </article>
        </section>
    )
}
