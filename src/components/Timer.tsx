import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { SOUND_PATHS } from "../constants/soundPath";
import { Howl } from "howler";


export default function Timer() {

    const defaultTime = 1800;

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [selectedTime, setSelectedTime] = useState(defaultTime);
    const sounds = new Howl({
        src: [SOUND_PATHS.ALARM],
        volume: 1,
        loop: false,
        onload: () => {
            console.log("Sound loaded");
        },
        onloaderror: (_id, error) => {
            console.error("Error loading sound:", error);
        }
    });

    useEffect(() => {
        let intervalId: number | null = null;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        }

        if (time <= 0) {
            console.log("Time's up!");
            setIsRunning(false);
            sounds.play();
        }

        return () => {
            if (intervalId !== null) {
                clearInterval(intervalId);
            }
        }
    }, [isRunning, time]);

    const handleStart = () => {

        setTime(selectedTime || defaultTime);
        setIsRunning(true);
        setSelectedTime(defaultTime);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    const handleReset = () => {
        setTime(defaultTime);
        setIsRunning(false);
    }

    const handleSelectTime = (time: number) => {
        setSelectedTime(time * 60);
    }

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }


    return (
        <div>
            <h2>Timer</h2>
            <p>{formatTime(time)}</p>
            <h3>Select manual time in minutes</h3>
            <input type="number" value={selectedTime / 60} onChange={(e) => handleSelectTime(Number(e.target.value))} />
            <button onClick={() => handleSelectTime(15)}>15</button>
            <button onClick={() => handleSelectTime(30)}>30</button>
            <button onClick={() => handleSelectTime(60)}>60</button>
            
            <br></br>
            <button onClick={handleStart}>
                <Play />
            </button>
            <button onClick={handleStop}>
                <Pause />
            </button>
            <button onClick={handleReset}>
                <RotateCcw />
            </button>
        </div>
    )
}