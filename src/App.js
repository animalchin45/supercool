import React, { useState } from 'react'

import Card from './components/Card'
import Form from './components/Form'
import FormComplete from './components/FormComplete'

function App() {
  const [newCard, setNewCard] = useState({
    name: '',
    expMM: '',
    expYY: '',
    cvc: '',
  })
  const [cardNumber, setCardNumber] = useState('')
  const [displayNumber, setDisplayNumber] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])
  const [complete, setComplete] = useState(false)

  return (
    <main className='main'>
      <Card displayNumber={displayNumber} newCard={newCard} />
      {!complete && (
        <Form
          newCard={newCard}
          setNewCard={setNewCard}
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          displayNumber={displayNumber}
          setDisplayNumber={setDisplayNumber}
          setComplete={setComplete}
        />
      )}
      {complete && (
        <FormComplete
          setCardNumber={setCardNumber}
          setNewCard={setNewCard}
          setDisplayNumber={setDisplayNumber}
          setComplete={setComplete}
        />
      )}
    </main>
  )
}

export default App
