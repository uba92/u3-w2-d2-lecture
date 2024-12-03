import { Component } from 'react'
import { ListGroup, Spinner, Alert, Button } from 'react-bootstrap'

class Admin extends Component {
  state = {
    reservation: [],
    isLoading: true,
    isError: false,
  }

  getReservations = () => {
    fetch('https://striveschool-api.herokuapp.com/api/reservation')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei dati!')
        }
      })
      .then((arrayOfReservation) => {
        console.log('arrayOfReservation: ', arrayOfReservation)
        this.setState({
          reservation: arrayOfReservation,
          isLoading: false,
        })
      })
      .catch((err) => {
        console.log('error', err)
        this.setState({
          isLoading: false,
          isError: true,
        })
      })
  }

  componentDidMount() {
    this.getReservations()
  }
  render() {
    // this.getReservations()
    return (
      <>
        <h2 className=' text-light'>TAVOLI PRENOTATI</h2>

        {this.state.isError && (
          <Alert variant={'danger'}>Oops! Qualcosa è andato storto!</Alert>
        )}
        {this.state.isLoading && (
          <Spinner animation='border' role='status' variant='success'></Spinner>
        )}

        <ListGroup>
          {this.state.reservation.map((res) => {
            return (
              <ListGroup.Item key={res._id}>
                <span className=' d-flex justify-content-between align-items-center'>
                  {res.name} per {res.numberOfPeople} il {res.dateTime}
                  <Button
                    variant={'danger'}
                    onClick={() => {
                      fetch(
                        'https://striveschool-api.herokuapp.com/api/reservation' +
                          '/' +
                          res._id,
                        {
                          method: 'DELETE',
                        }
                      )
                        .then((response) => {
                          if (response.ok) {
                            alert('Eliminato')
                            this.getReservations()
                          } else {
                            throw new Error('Errore durante eliminazione')
                          }
                        })
                        .catch((err) => {
                          alert('non eliminato', err)
                        })
                    }}
                  >
                    X
                  </Button>
                </span>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </>
    )
  }
}

export default Admin
