import React, { Fragment } from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'
import { Card, CardBody, CardImg, CardText, CardTitle } from 'react-bootstrap'

const ProductCard = ({product}) => {
  return (
    <Fragment>
        <Link to={`product/${product.id}`}>
            <Card className='custom-card'>
                <CardImg variant='top' className='py-3 card-img' src={product.image}></CardImg>
                <CardBody>
                    <CardTitle className='fs-6'>{ product.title.slice(0,30)}</CardTitle>
                    <CardText className='text-capitalize text-decoration-none fs-6'>
                        {product.category}
                    </CardText>
                    <h5>${product.price}</h5>
                </CardBody>
            </Card>
        </Link>
    </Fragment>
  )
}

export default ProductCard