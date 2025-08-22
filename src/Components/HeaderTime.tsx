import useGetTime from "./useGetTime"

export default function HeaderTime(){
    
    const time = useGetTime()
    return(
        <p className="hour">{time}</p>
    )
}