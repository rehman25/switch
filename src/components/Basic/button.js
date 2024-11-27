import React from 'react'
import { Button } from 'antd';

const button = ({Text,buttonClass, onClick}) => {
  return (
    <div>
      <Button className={buttonClass} onClick={onClick} >{Text}</Button>
    </div>
  )
}

export default button
