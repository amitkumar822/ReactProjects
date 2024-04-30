import React from 'react'
import Header from './components/Header'
import Category from './components/Category'
import TopResturant from './components/TopResturant'
import OnlineDelivery from './components/OnlineDelivery'
import PlaceToEatAcrossCities from './components/PlaceToEatAcrossCities'
// import TextCard from './components/TextCard'
import CuisineNearMe from './components/CuisineNearMe'
import ExploreEveryRes from './components/ExploreEveryRes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Category/>
      <TopResturant/>
      <OnlineDelivery/>
      <PlaceToEatAcrossCities/>
      <CuisineNearMe/>
      <ExploreEveryRes/>
      <Footer/>
    </>
  )
}

export default App
