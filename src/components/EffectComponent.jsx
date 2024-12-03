import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const EffectComponent = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  //useEffect viene invocato con una funzione che però non returna nulla, infatti non la dichiaro come const
  //useEffect può avere uno o due parametri, il primo è una funzione effect callback
  //   in questo caso useEffect viene eseguito all'avvio della pagina ed anche ad ogni aggiornamento di props
  // o di state
  useEffect(() => {
    console.log('INVOCATO USEEFFECT')
  })
  //diciamo che useEffect con un solo parametro si usa molto poco, ha poche utilità
  //aggiungiamo anche il SECONDO parametro, chiamato deps (dependencies) che è sempre un array
  //   con questo parametro vado a regolare l'aggionrnamento della pagina in base a quello che metto nell'array delle dipendenze
  // quando questi parametri nelle deps cambiano allora viene invocato useEffect
  useEffect(() => {
    console.log('INVOCATO SECONDO USEEFFECT')
  }, [counter2]) //quando counter2 viene aggiornato verrà eseguito questo useEffect

  useEffect(() => {
    console.log('COMPONENTTDIDMOUNT')
  }, [])
  return (
    <div>
      <Button
        onClick={() => {
          setCounter1(counter1 + 1)
        }}
      >
        valore UNO: {counter1}
      </Button>
      <Button
        onClick={() => {
          setCounter2(counter2 + 1)
        }}
      >
        valore DUE: {counter2}
      </Button>
    </div>
  )
}

export default EffectComponent
