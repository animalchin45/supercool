import React from 'react'

function Form() {
  return (
    <section className='form'>
      <form className='form__container'>
        <div>
          <p>Cardholder Name</p>
          <input placeholder='e.g. Hank Hill' />
        </div>
        <div>
          <p>Card Number</p>
          <input placeholder='e.g. 1234 5678 9123 000' />
        </div>
        <div>
          <p>Exp. Date (MM/YY)</p>
          <input placeholder='MM' />
          <input placeholder='YY' />
          <p>CVV</p>
          <input placeholder='e.g. 123' />
        </div>
        <div>
          <button>Confirm</button>
        </div>
      </form>
    </section>
  )
}

export default Form
