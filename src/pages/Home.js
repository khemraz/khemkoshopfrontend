import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { Categories } from '../components/Categories'
import Footer from '../components/Layouts/Footer'
import { Navbar } from '../components/Layouts/Navbar'
import Login from './Login'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Categories/>
        {/* <Login/> */}
        {/* <Footer/> */}
    </div>
  )
}
