import React,{Fragment} from 'react'
import TopNavbar from '../Components/Header/TopNavbar'
import Footer from '../Components/Footer/Footer'
import HeaderSlider from '../Components/Slider/HeaderSlider'

const Home = () => {
  return (
    <Fragment>
        <TopNavbar />
        <HeaderSlider />
        <Footer />
    </Fragment>    
  )
}

export default Home;