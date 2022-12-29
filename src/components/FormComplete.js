import React from 'react'

import Complete from '../img/icon-complete.svg'

function FormComplete({
  setNewCard,
  setCardNumber,
  setDisplayNumber,
  setComplete,
}) {
  const handleOnClick = () => {
    setComplete(false)
    setCardNumber('')
    setDisplayNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    setNewCard({
      name: '',
      expMM: '',
      expYY: '',
      cvc: '',
    })
  }

  return (
    <section className='form'>
      <div className='form__container--complete'>
        <Complete />
        <h2>THANK YOU!</h2>
        <h3>We've added your card details</h3>

        <button className='btn' onClick={handleOnClick}>
          Continue
        </button>
      </div>
    </section>
  )
}

export default FormComplete
