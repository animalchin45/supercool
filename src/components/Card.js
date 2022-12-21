import React from 'react'
import { useMediaQuery } from 'react-responsive'

import bgMobile from '../img/bg-main-mobile.png'
import bgDesktop from '../img/bg-main-desktop.png'
import cardFront from '../img/bg-card-front.png'
import cardBack from '../img/bg-card-back.png'

function Card() {
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

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
          <h1>FRONT</h1>
        </div>
        <div
          className='card__customer card__customer--back'
          style={{ backgroundImage: `url(${cardBack})` }}
        >
          <h1>BACK</h1>
        </div>
      </div>
    </section>
  )
}

export default Card
