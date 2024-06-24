import React, { useState } from 'react';
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import { Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import ItemPage from './Item/ItemPage/ItemPage';
import ListYourBusiness from './pages/ListYourBusiness/ListYourBusiness';


function App() {
    const [showLogin,setShowLogin]=useState(false)

  return (
  <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ListYourBusiness' element={<ListYourBusiness/>} />
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path="/itempage" element={<ItemPage />} />
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App
