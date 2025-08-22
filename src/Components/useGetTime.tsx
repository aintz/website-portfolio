import { useState, useEffect } from "react";

export default function useGetTime(){
    const [time, setTime] = useState( updateTime() )
    
    function updateTime(){
        const now = new Date()
        const hour = now.getHours().toString().padStart(2, "0")
        const minutes = now.getMinutes().toString().padStart(2, "0")
        return (hour + ':' + minutes)
    }

    useEffect( () => {
        
        setTime( updateTime())
        
        const now = new Date()
        const msToNextMinute = (60 - now.getSeconds()) * 1000;

        const timeout = setTimeout( () => {
            setTime(updateTime())
            
            const interval = setInterval(() => {
                setTime(updateTime());
              }, 60 * 1000);
            
            return () => clearInterval(interval);
        },msToNextMinute)

        return () => clearTimeout(timeout);

    },[])

    return time
}