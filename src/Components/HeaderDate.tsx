import { useGetDate } from "./useGetDate.js";

export default function HeaderDate(){
      
    const fullDate = useGetDate()

    return(
        <p className="date">{fullDate}</p>
    )
}