import { useMemo } from "react";
import { useTranslation } from "react-i18next"
import {dayOfTheWeekArrays, monthNamesArrays} from './dateResources'


export function useGetDate(){
    const {i18n} = useTranslation()
    const currentLanguage = i18n.language as keyof typeof dayOfTheWeekArrays
    

    const fullDate = useMemo(() => {
        const now:Date = new Date()
        const day = now.getDate()
        const month = now.getMonth()
        const weekDay = now.getDay()
        const tDays = dayOfTheWeekArrays[currentLanguage] 
        const currentDay = tDays[weekDay]

        const tMonths = monthNamesArrays[currentLanguage]
        const currentMonth = tMonths[month]
        
        return {currentDay,day,currentMonth}

    },[currentLanguage])

    const date = currentLanguage === 'es' 
    ? `${fullDate.currentDay} ${fullDate.day} ${fullDate.currentMonth}` 
    : `${fullDate.currentDay} ${fullDate.currentMonth} ${fullDate.day}`;


    return date
}