import React from 'react'
import ChangingBack from './components/ChangingBackground/ChangingBack';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SlidingIcons from './components/SlidingIcons/SlidingIcons';
import Subnavbar from './components/Sub-Navbar/sub-navbar';
import BackgroundPic from './components/backgroundPic/backgroundPic';
import BookList from './components/BookList/BookList';
const Home = () => {
  return (
  <>
  <Navbar/>
      <Subnavbar/>
      <BackgroundPic/>
      <ChangingBack/>
      <SlidingIcons/>
      <BookList/>
      <Footer/>
      
  </>
  )
}

export default Home