import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import './App.css'
import { HeartIcon, CartIcon, SearchIcon } from './icons/icons'
import Header from './components/Header'
import Store from './components/Store'
import Home from './components/Home'
import { Outlet, useLocation } from 'react-router'
import { v4 as uuid } from 'uuid' 
import weedImg from './assets/weed.png'
import { roundTo } from './utils/utils'
import initialItems from './data/items'

function App() {

  const location = useLocation(); 
  const [selectedType, setSelectedType] = useState('');  
  const [selectedEffects, setSelectedEffects] = useState([]); 
  const [selectedFlavours, setSelectedFlavours] = useState([]); 

  const [activeHeart, setActiveHeart] = useState(false); 

  const [items, setItems] = useState(initialItems);

  const [savedItems, setSavedItems] = useState([]);
  const [cart, setCart] = useState([]);

//   useEffect(() => {
//     savedItems.forEach((item, index) => console.log(`index ${index +1}: ${item.strain}`))
//   } , [savedItems]
// )
//   useEffect(() => {
//     cart.forEach((item) => console.log(`${item.strain} in cart: ${item.inCart}`))
//   } , [cart]
// )

  // useEffect(()=> {
  //   items.forEach(item=> console.log(`${item.strain} is saved: ${item.isSaved}`))
  // }
  //   , [items]
  // )

  const contextObj = {
    selectedType, 
    setSelectedType, 
    selectedEffects, 
    setSelectedEffects, 
    selectedFlavours, 
    setSelectedFlavours, 
    items, 
    setItems, 
    savedItems, 
    setSavedItems, 
    cart, 
    setCart,
    activeHeart
  }


  return (
    <div className="body">
      <Header activeHeart={activeHeart} setActiveHeart={setActiveHeart} />
      <main className={location.pathname === "/" ? "center" : ""}>
        <Outlet context={contextObj}/>
      </main>
    </div>
  )
}

export default App
