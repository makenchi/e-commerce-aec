import React from 'react'
import { Card, CardBody, CardText } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryCard = ({category}) => {
  return (
    <Link to={`category/${category}`} className='text-decoration-none text-dark'>
        <Card>
            <CardBody>
                <CardText className='text-capitalize'>
                    {category}
                </CardText>
            </CardBody>
        </Card>
    </Link>
  )
}

export default CategoryCard