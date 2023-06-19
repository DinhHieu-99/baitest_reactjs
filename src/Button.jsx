import React, { useState } from 'react'
import { memo } from 'react'

const Button = ({onHandleStart, onHandleSave, onHandleReset, isTime}) => {
    console.log('button')
  return (
    <div>
        <button className='start-pasue' onClick={onHandleStart}>{isTime ? 'TẠM DỪNG' : 'BẮT ĐẦU'}</button>
        <button className='save' onClick={onHandleSave}>VÒNG</button>
        <button className='reset' onClick={onHandleReset}>Xét lại</button>
    </div>
  )
}

export default memo(Button)