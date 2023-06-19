import React, { useCallback, useEffect, useRef, useState } from 'react'
import Button from './Button'
import Content from './Content'

const Stopwatch = () => {
    const [time, setTime] = useState(0)
    const [isTime, setIsTime] = useState(false)
    const [save, setSave] = useState([])
    const timeRef = useRef()
    const valueRef = useRef(null)

    useEffect(()=>{
        if (isTime) {
            timeRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10);
        }
        return (()=>{
            clearInterval(timeRef.current)
        })
    },[isTime])
    const milliseconds = Math.floor((time % 1000) / 10)
    const seconds = Math.floor((time % 60000) / 1000)
        .toString()
        .padStart(2, '0');
    const minutes = Math.floor(time / 60000)
        .toString()
        .padStart(2, '0');
    const hours = Math.floor(minutes / 60)
        .toString()
        .padStart(2, '0');
    //button
    const handleButtonStart = useCallback(()=>{

        setIsTime(!isTime)
        console.log('satrt')
    },[isTime])

    const handleSave = useCallback(()=>{
        if(!save){
            return
        }
        const items = {
            value: valueRef.current.innerText,
            id: Date.now()
        }
        console.log(items)
        setSave(newItem => [...newItem, items])
    },[])

    const handleReset = useCallback(()=>{
        setTime(0)
        setSave([])
        setIsTime(false)
        console.log('reset')
    },[])

    console.log(1)
  return (
    <>
        <h2>Đồng hồ bấm giờ</h2>
        <div className='showNumber' ref={valueRef}>
            {hours}:{minutes}:{seconds}<span>:{milliseconds}</span>
        </div>
        <Button onHandleStart={handleButtonStart} onHandleSave={handleSave} isTime={isTime} onHandleReset={handleReset}/>
        <ul>
            {
                save.map((item)=>{
                    return(
                        <li key={item.id}>{item.value}</li>
                    )
                })
            }
        </ul>
        <Content/>
    </>
  )
}

export default Stopwatch