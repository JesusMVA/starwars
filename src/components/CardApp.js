import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CSS/CardApp.css';


function BasicExample() {
  return ( 
    <Card  style={{ width: '18rem'}}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
      
        </Card.Text>
        <Button variant="" className='btn btn-outline-warning'>Ver mas</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;