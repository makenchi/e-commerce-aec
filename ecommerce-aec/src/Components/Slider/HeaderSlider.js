import { Carousel, CarouselCaption, CarouselItem } from 'react-bootstrap'
import React, { Fragment } from 'react'

const HeaderSlider = () => {
  return (
    <Fragment>
        <Carousel variant='dark'>
            <CarouselItem>
                <img className='d-block w-100'
                    style={{height: "100vh", objectFit: "cover"}}
                    src="../img/slider/banner_img1.png"
                    alt='banner 1' />
                <CarouselCaption className='bg-white'>
                    <h5>New products 1</h5>
                    <p>buy buy buy</p>
                    <div className='mb-3'>
                        <button variant='dark'>Shop now</button>
                    </div>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <img className='d-block w-100'
                    style={{height: "100vh", objectFit: "cover"}}
                    src="../img/slider/banner_img2.png"
                    alt='banner 1' />
                <CarouselCaption className='bg-white'>
                    <h5>New products 2</h5>
                    <p>buy buy buy</p>
                    <div className='mb-3'>
                        <button variant='dark'>Shop now</button>
                    </div>
                </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                <img className='d-block w-100'
                    style={{height: "100vh", objectFit: "cover"}}
                    src="../img/slider/banner_img3.png"
                    alt='banner 1' />
                <CarouselCaption className='bg-white'>
                    <h5>New products 3</h5>
                    <p>buy buy buy</p>
                    <div className='mb-3'>
                        <button variant='dark'>Shop now</button>
                    </div>
                </CarouselCaption>
            </CarouselItem>
        </Carousel>
    </Fragment>
  )
}

export default HeaderSlider