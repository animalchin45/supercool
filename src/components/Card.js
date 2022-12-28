import React from 'react'
import { useMediaQuery } from 'react-responsive'

import bgMobile from '../img/bg-main-mobile.png'
import bgDesktop from '../img/bg-main-desktop.png'
import cardFront from '../img/bg-card-front.png'
import cardBack from '../img/bg-card-back.png'
import CardLogo from '../img/card-logo.svg'

function Card({ displayNumber }) {
  const isMobile = useMediaQuery({ query: '(max-width: 1300px)' })

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
            <p className='card__text'>Hank Hill</p>
            <p className='card__text'>04/20</p>
          </div>
        </div>
        <div
          className='card__customer card__customer--back'
          style={{ backgroundImage: `url(${cardBack})` }}
        >
          <p className='card__text--cvv'>666</p>
        </div>
      </div>
    </section>
  )
}

export default Card
