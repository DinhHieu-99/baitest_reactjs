import React from 'react'
import { memo } from 'react'

const Button = (props) => {
    // const [isTime, setIsTime] = useState(false)
    const handleButtonStart = ()=>{
        props.setIsTime(!props.isTime)
    }
    const handleReset = () =>{
        props.setTime(0)
        props.setIsTime(false)
    }
    console.log('ok')
  return (
    <div>
        <button className='start-pasue' onClick={handleButtonStart}>{props.isTime ? 'TẠM DỪNG' : 'BẮT ĐẦU'}</button>
        <button className='reset' onClick={handleReset}>VÒNG</button>
    </div>
  )
}

export default memo(Button)