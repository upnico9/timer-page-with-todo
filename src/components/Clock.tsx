import { useState, useEffect } from "react";


export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div>
            <h2>Clock</h2>
            <p>{time.toLocaleTimeString()}</p>
            <p>{time.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })}</p>
        </div>
    )
}