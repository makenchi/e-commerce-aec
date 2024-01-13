import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'

const AllCategories = () => {
  return (
    <Container>
        <h3 className='text-center mb-4'>Browse Categories</h3>
        <Row>
            <Col xs={12} sm={6} md={3} className='mb-2 p-0'>
                <CategoryCard category={"Product 1"} />
            </Col>
        </Row>
    </Container>
  )
}

export default AllCategories