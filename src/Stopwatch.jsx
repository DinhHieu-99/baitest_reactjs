import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Content from './Content'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [isTime, setIsTime] = useState(false)
    const timeRef = useRef()

    useEffect(()=>{
        if (isTime) {
            timeRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10);
        }else{
            clearInterval(timeRef.current);
        }
    },[isTime])
    useEffect(()=>{
        return (()=>{
            clearInterval(timeRef.current)
        })
    },[])
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10)
    const hours = Math.floor(minutes / 60)
        .toString()
        .padStart(2, '0');
  return (
    <>
        <div>Đồng hồ bấm giờ</div>
        <div>
            <span className='hours'>{hours}:</span>
            <span>{minutes}:</span>
            <span>{seconds}</span>
            <span className='millisecond'>{milliseconds}</span>
        </div>
        <Button isTime={isTime} setIsTime={setIsTime} setTime={setTime}/>
        <Content/>
    </>
  )
}

export default Stopwatch