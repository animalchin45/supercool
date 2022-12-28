import React from 'react'
import { useMediaQuery } from 'react-responsive'

import bgMobile from '../img/bg-main-mobile.png'
import bgDesktop from '../img/bg-main-desktop.png'
import cardFront from '../img/bg-card-front.png'
import cardBack from '../img/bg-card-back.png'
import CardLogo from '../img/card-logo.svg'

function Card({ displayNumber, newCard }) {
  const isMobile = useMediaQuery({ query: '(max-width: 1300px)' })
  const { name, expMM, expYY, cvc } = newCard

  return (
    <section
      className='card'
      style={
        isMobile
          ? { backgroundImage: `url(${bgMobile})` }
          : { backgroundImage: `url(${bgDesktop})` }
      }
    >
      <div className='card__container'>
        <div
          className='card__customer card__customer--front'
          style={{ backgroundImage: `url(${cardFront})` }}
        >
          <CardLogo />
          <h1>{`${displayNumber.slice(0, 4).join('')} ${displayNumber
            .slice(4, 8)
            .join('')} ${displayNumber.slice(8, 12).join('')} ${displayNumber
            .slice(12, 16)
            .join('')}`}</h1>
          <div className='card__name'>
            <p className='card__text'>{name === '' ? 'Hank Hill' : name}</p>
            <p className='card__text'>
              {(expMM || expYY) === '' ? 'XX/XX' : `${expMM}/${expYY}`}
            </p>
          </div>
        </div>
        <div
          className='card__customer card__customer--back'
          style={{ backgroundImage: `url(${cardBack})` }}
        >
          <p className='card__text--cvv'>{cvc === '' ? '666' : cvc}</p>
        </div>
      </div>
    </section>
  )
}

export default Card
