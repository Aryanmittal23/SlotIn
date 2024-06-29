import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import AppDownload from '../../components/AppDownload/AppDownload'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Recommend from '../../components/Recommend/Recommend'
import Location from '../../components/Location/Location'

function Home() {
  const [category,setCategory]=useState("All")

  return (
    <div >
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <Recommend category={category}/>
      <Location/>
      <AppDownload/>
    </div>
  )
}

export default Home
