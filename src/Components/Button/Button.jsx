import React from 'react'
import './Button.css'
const Button = ({title , style , className , image , onClick}) => {
  return (
    <div className="button">
        <button className={className}  style={style} image={image} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button