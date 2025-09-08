import React from 'react'
import Header from './component/Header'
import Navigation from './routing/Navigation'
import Footer from './component/Footer'
// import Home from './component/Home'
import Card from './pages/Card'
import Advantages from './component/Advantages'
// import data from './data/data'

export default function App() {
  return (
    <div>
      <Header/>
      {/* <Home/> */}
      <Navigation/>
      {/* <Card data={data}/> */}
      <Advantages/>
      <Footer/>
    </div>
  )
}
