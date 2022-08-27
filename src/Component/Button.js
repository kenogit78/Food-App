import React from 'react'
import './sass/styles.scss'

const Button = ( {props}) => {
  return (
    <div>
        <button className='Btn'>{props}</button>
    </div>
  )
}

export default Button