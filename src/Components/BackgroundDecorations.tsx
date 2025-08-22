import  Cloud  from '../assets/cloud.gif'
import  PinkStar  from '../assets/pink-star.gif'
import  YellowStar  from '../assets/test.gif'


export default function BackgroundDecorations() {
    return(
        <>
            <img className='cloud cloud-left light' src={Cloud}></img>
            <img className='cloud cloud-right light' src={Cloud}></img>
            <img className='stars pst-1' src={PinkStar}></img>
            <img className='stars pst-2' src={PinkStar}></img>
            <img className='stars pst-3' src={PinkStar}></img>
            <img className='stars yst-1' src={YellowStar}></img>
            <img className='stars yst-2' src={YellowStar}></img>
            <img className='stars yst-3' src={YellowStar}></img>
        </>
    )
}