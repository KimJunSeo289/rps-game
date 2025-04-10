import React from 'react'
import Cardcss from '../css/Card.module.css'

const Card = ({Name , GameText, Class, Image, result}) => {
  return (
    <div className={`${Cardcss.CardBox} ${Cardcss[Class]} ${Cardcss[result]}`}>
        <h3>{Name}</h3>
        <img src={Image} alt='이미지'></img>
        <p>{GameText ? GameText : "대기중"}</p>
    </div>
  )
}

export default Card