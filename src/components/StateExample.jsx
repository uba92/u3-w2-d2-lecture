import { useState } from 'react'
import { Button } from 'react-bootstrap'
import NameComponent from './NameComponent'

const StateExample = () => {
  //gli hooks vanno qui e non possono essere utilizzati in altre funzioni, cicli, condizionali, etc.
  //quando viene invocato, useState crea una "variabile di stato"
  //una invocazione di usestate torna un array con DUE elementi
  // const arrayDiDueElementi = useState[] ---> si destrutturalizza in:
  //   const [elementoUno, elementoDue] = useState()  il primo elemento è un valore, il secondo è una funzione
  //il primo elemento è la variabile di stato, la variabile che in un componente a classe dichiaravo come
  //proprietà dello state
  //il secondo è un setState mirato ad aggiornare solo il valore della variabile associato

  //stiamo reallizando un counter
  const [counter, setCounter] = useState(0) //il valore tra le tonde in useState è il valore iniziale di counter

  const [name, setName] = useState('Mario')
  return (
    <div>
      <h2>useState in React</h2>
      <div className='d-flex justify-content-around'>
        <Button
          variant='success'
          onClick={() => {
            if (counter > 0) {
              setCounter(counter - 1)
            }
          }}
        >
          -
        </Button>
        <p>{counter}</p>
        <Button
          variant='success'
          onClick={() => {
            setCounter(counter + 1)
          }}
        >
          +
        </Button>
      </div>
      <div>
        <Button
          variant='danger'
          onClick={() => {
            setCounter(0)
          }}
        >
          Reset
        </Button>
      </div>
      <div>
        <NameComponent nameProp={name} setNameFunction={setName} />
      </div>
    </div>
  )
}
export default StateExample
