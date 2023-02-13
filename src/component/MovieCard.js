import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

export const MovieCard = ({movie}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.img} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>
  )
}
