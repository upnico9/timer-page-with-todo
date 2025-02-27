import { useState, useEffect } from "react";
import { Clock as ClockIcon, Calendar } from "lucide-react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <div className="clock-container">
            <h2>Clock</h2>
            <p className="clock-time"><ClockIcon /> {time.toLocaleTimeString()}</p>
            <p className="clock-date"><Calendar /> {time.toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })}</p>
        </div>
    )
}