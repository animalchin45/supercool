import React, { useState } from 'react'

import Card from './components/Card'
import Form from './components/Form'

function App() {
  const [newCard, setNewCard] = useState({
    name: '',
    expMM: '',
    expDD: '',
    cvc: '',
  })
  const [cardNumber, setCardNumber] = useState('')
  const [displayNumber, setDisplayNumber] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ])

  return (
    <main className='main'>
      <Card displayNumber={displayNumber} newCard={newCard} />
      <Form
        setNewCard={setNewCard}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        displayNumber={displayNumber}
        setDisplayNumber={setDisplayNumber}
      />
    </main>
  )
}

export default App
