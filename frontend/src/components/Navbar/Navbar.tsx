import  {  React,useState } from 'react'
import assets from '../../assets/assets';
import { Link } from 'react-router-dom';
import './Navbar.css'
//import StoreContext from '../../context/StoreContext';

function Navbar({setShowLogin}) {
  const [menu,setMenu]=useState("home")

//const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div>
      <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Services</a>
        <a href='#app-download'onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
  {/*<div className={getTotalCartAmount()===0?"":"dot"}></div>*/}
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
      </div>
      <hr />
    </div>
  
  )
}

export default Navbar
