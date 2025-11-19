import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router'
import './App.css'
import { HeartIcon, CartIcon, SearchIcon } from './icons/icons'
import Header from './components/Header'
import Store from './components/Store'
import Home from './components/Home'
import { Outlet, useLocation } from 'react-router'

function App() {

  const location = useLocation(); 
  const [selectedType, setSelectedType] = useState('');  
  const [selectedEffects, setSelectedEffects] = useState([]); 
  const [selectedFlavours, setSelectedFlavours] = useState([]); 



  const contextObj = {
    selectedType, 
    setSelectedType, 
    selectedEffects, 
    setSelectedEffects, 
    selectedFlavours, 
    setSelectedFlavours
  }
 
  // useEffect(() => {
  //   console.log("App mounted");

  //   return () => {
  //     console.log("App unmounted");
  //   };
  // }, []);

  // console.log("App rendered"); 

  return (
    <div className="body">
      <Header />
      <main className={location.pathname === "/" ? "center" : ""}>
        <Outlet context={contextObj}/>
      </main>
    </div>
  )
}

export default App
