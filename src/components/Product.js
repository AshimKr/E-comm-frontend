import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating';
import { LinkContainer } from 'react-router-bootstrap';

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <LinkContainer to={`/product/${product._id}`} style={{cursor:'pointer'}}>
            <Card.Img variant="top" src={require('../images/airpods.jpg')} />
        </LinkContainer>

        <Card.Body>
        <LinkContainer to={`/product/${product._id}`} style={{cursor:'pointer'}}>
            <Card.Title>
                <h6>{product.name}</h6>
            </Card.Title>
        </LinkContainer>
            <Card.Text as='div'>
                <div className='my-3'>
                    <Rating rating={product.rating} text={`${product.numReviews}`}/> 
                </div>
            </Card.Text>
            <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product