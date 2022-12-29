import React from 'react'
import { useForm } from 'react-hook-form'

function Form({
  setNewCard,
  newCard,
  cardNumber,
  setCardNumber,
  setDisplayNumber,
  setComplete,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

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

  const handleOnSubmit = () => {
    setComplete(true)
    console.log('SUCCESS!')
  }

  return (
    <section className='form'>
      <form className='form__container' onSubmit={handleSubmit(handleOnSubmit)}>
        <div className='form__standard'>
          <p>Cardholder Name</p>
          <input
            className='form__input'
            placeholder='e.g. Hank Hill'
            type='text'
            {...register('name', { required: true })}
            onChange={handleCardOnChange}
            value={newCard.name}
          />
          {errors.name && <p>Please enter a name</p>}
        </div>
        <div className='form__standard'>
          <p>Card Number</p>
          <input
            className='form__input'
            placeholder='e.g. 1234 5678 9123 0000'
            type='number'
            pattern='[0-9]{10}'
            {...register('cardNumber', { required: true })}
            onChange={handleNumberOnChange}
            value={cardNumber}
          />
          {errors.cardNumber && <p>Required</p>}
        </div>
        <div className='form__extra'>
          <p className='form__extra__exp'>Exp. Date (MM/YY)</p>
          <input
            className='form__input form__extra__exp--mm'
            placeholder='MM'
            {...register('expMM', { required: true })}
            onChange={handleCardOnChange}
            value={newCard.expMM}
          />
          <input
            className='form__input form__extra__exp--yy'
            placeholder='YY'
            {...register('expYY', { required: true })}
            onChange={handleCardOnChange}
            value={newCard.expYY}
          />
          {(errors.expMM || errors.expYY) && <p>Can't be blank</p>}
          <p className='form__extra__cvc'>CVC</p>
          <input
            className='form__input form__extra__cvc--cvc'
            placeholder='e.g. 123'
            {...register('cvc', { required: true })}
            onChange={handleCardOnChange}
            value={newCard.cvc}
          />
          {errors.cvc && <p>Can't be blank</p>}
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
