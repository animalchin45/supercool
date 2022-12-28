import React from 'react'

function Form({
  setNewCard,
  newCard,
  cardNumber,
  setCardNumber,
  setDisplayNumber,
}) {
  const handleNumberOnChange = (e) => {
    if (e.target.value.length === 17) {
      return null
    }

    setCardNumber(e.target.value)

    const numberSplit = e.target.value.split('')
    for (let i = e.target.value.length; i < 16; i++) {
      numberSplit.push('0')
    }

    setDisplayNumber(numberSplit)
  }

  const handleCardOnChange = (e) => {
    setNewCard({ ...newCard, [e.target.name]: e.target.value })
  }

  return (
    <section className='form'>
      <form className='form__container'>
        <div className='form__standard'>
          <p>Cardholder Name</p>
          <input
            className='form__input'
            placeholder='e.g. Hank Hill'
            type='text'
            onChange={handleCardOnChange}
            name='name'
            value={newCard.name}
          />
        </div>
        <div className='form__standard'>
          <p>Card Number</p>
          <input
            className='form__input'
            placeholder='e.g. 1234 5678 9123 0000'
            type='number'
            pattern='[0-9]{10}'
            onChange={handleNumberOnChange}
            value={cardNumber}
          />
        </div>
        <div className='form__extra'>
          <p className='form__extra__exp'>Exp. Date (MM/YY)</p>
          <input
            className='form__input form__extra__exp--mm'
            placeholder='MM'
            onChange={handleCardOnChange}
            name='expMM'
            value={newCard.expMM}
          />
          <input
            className='form__input form__extra__exp--yy'
            placeholder='YY'
            onChange={handleCardOnChange}
            name='expYY'
            value={newCard.expYY}
          />
          <p className='form__extra__cvc'>CVC</p>
          <input
            className='form__input form__extra__cvc--cvc'
            placeholder='e.g. 123'
            onChange={handleCardOnChange}
            name='cvc'
            value={newCard.cvc}
          />
        </div>
        <div>
          <button className='btn' type='submit'>
            Confirm
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form
