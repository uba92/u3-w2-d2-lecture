import { Button } from 'react-bootstrap'
const NameComponent = (props) => {
  return (
    <>
      <div>
        <Button
          onClick={() => {
            props.setNameFunction('Mario')
          }}
        >
          Mario
        </Button>
        <Button
          onClick={() => {
            props.setNameFunction('Luigi')
          }}
        >
          Luigi
        </Button>
      </div>
      <div>
        <p>Sono: {props.nameProp}</p>
      </div>
    </>
  )
}

export default NameComponent
