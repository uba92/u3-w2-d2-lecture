import { Carousel } from 'react-bootstrap'
import paste from '../data/menu.json'
const MainContent = () => {
  return (
    <Carousel>
      {paste.map((pasta) => {
        return (
          <Carousel.Item key={pasta.id}>
            <img src={pasta.image} alt={pasta.name} className='img-fluid' />
            <Carousel.Caption>
              <h3>{pasta.name}</h3>
              <p>{pasta.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default MainContent
