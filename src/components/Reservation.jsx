import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
// name --> string
//phone --> string/number
//numberOfPeople --> number
//smoking --> boolean
//dateTime --> date string (ISO format)
//specialRequest --> string

//ogni volta che un componente deve interagire con un form, questo componente deve possedere uno STATE
//per ora sappiamo che un componente che può possedere uno STATE è un componente a CLASSE

class Reservation extends Component {
  //stato iniziale del form
  state = {
    reservation: {
      name: '',
      phone: '',
      numberOfPeople: '1',
      smoking: false,
      dateTime: '',
      specialRequest: '',
    },
  }

  submitReservation = (e) => {
    e.preventDefault()
    // facciamo la chiamata POST
    fetch('https://striveschool-api.herokuapp.com/api/reservation', {
      method: 'POST',
      body: JSON.stringify(this.state.reservation),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          // prenotazione salvata
          alert('Prenotazione inviata!')
          // svuotare i campi del form!
          // per svuotare il form, devo solo resettare lo stato!
          // ogni campo del form è collegato alla propria proprietà in "reservation"
          this.setState({
            reservation: {
              name: '',
              phone: '',
              numberOfPeople: '1',
              smoking: false,
              dateTime: '',
              specialRequests: '',
            },
          })
        } else {
          // errore nella prenotazione
          throw new Error('Errore nel salvataggio della prenotazione')
        }
      })
      .catch((err) => {
        console.log('ERRORE!!', err)
      })
  }
  render() {
    return (
      <Form className=' text-light my-3' onSubmit={this.submitReservation}>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='name'>Nome</Form.Label>
          <Form.Control
            id='name'
            type='text'
            placeholder='Topo Gigio'
            required
            value={this.state.reservation.name}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  name: e.target.value,
                },
              })
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Numero di telefono</Form.Label>
          <Form.Control
            type='tel'
            placeholder='340xxxxxxx'
            required
            value={this.state.reservation.phone}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  phone: e.target.value,
                },
              })
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Numero di persone</Form.Label>
          <Form.Select
            aria-label='Default select example'
            value={this.state.reservation.numberOfPeople}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  numberOfPeople: e.target.value,
                },
              })
            }}
          >
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
            <option value='4'>Four</option>
            <option value='5'>Five</option>
            <option value='6'>Six</option>
            <option value='7'>Seven</option>
            <option value='8'>Eight</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Check
            type='checkbox'
            label='Outoor?'
            checked={this.state.reservation.smoking}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  smoking: e.target.checked,
                },
              })
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Quando arrivi?</Form.Label>
          <Form.Control
            type='datetime-local'
            required
            min={`${new Date().getFullYear()}-${
              new Date().getMonth() + 1
            }-${new Date().getDate()}T00:00`}
            value={this.state.reservation.dateTime}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  dateTime: e.target.value,
                },
              })
            }}
          />
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>Richieste particolari</Form.Label>
          <Form.Control
            as='textarea'
            rows={5}
            value={this.state.reservation.specialRequest}
            onChange={(e) => {
              this.setState({
                reservation: {
                  ...this.state.reservation,
                  specialRequest: e.target.value,
                },
              })
            }}
          />
        </Form.Group>
        <Button variant='success' type='submit'>
          Submit Reservation
        </Button>
      </Form>
    )
  }
}

export default Reservation
