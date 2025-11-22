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


  const templateItem = ({ strain='Default Weed', 
                          type='Hybrid', 
                          effects=['happy', 'hungry', 'relaxed'], 
                          flavours=['earthy', 'flowery', 'pine'] 
                        }) => ({
  id: uuid(),
  strain: strain, 
  type: type, 
  effects: effects, 
  flavours: flavours,
  img: weedImg, 
  quantity: 1,
  price: 2.44,
  get calculatePrice(){
    const total = this.quantity * this.price;
    return roundTo(total, 2);
  }, 
  isSaved: false, 
  inCart: false
  })


    const [items, setItems] = useState([
    templateItem({strain: 'OG Kush',
                  type: 'hybrid', 
                  effects: ['hungry', 'relaxed', 'sleepy'], 
                  flavours: ['woody', 'pine', 'earthy']
                }),    
    templateItem({strain: 'Purple Haze',
                  type: 'sativa', 
                  effects: ['creative', 'giggly', 'euphoric'], 
                  flavours: ['flowery', 'lavender', 'violet']
                }),    
    templateItem({strain: 'Northern Lights',
                  type: 'indica', 
                  effects: ['hungry', 'relaxed', 'sleepy'], 
                  flavours: ['woody', 'pine', 'earthy']
                }),    
    templateItem({strain: 'White Widow',
                  type: 'hybrid', 
                  effects: ['uplifted', 'talkative', 'euphoric'], 
                  flavours: ['woody', 'earthy', 'flowery']
                }),    
    templateItem({strain: 'Afghan Kush',
                  type: 'indica', 
                  effects: ['sleepy', 'hungry', 'relaxed'], 
                  flavours: ['woody', 'earthy', 'tar']
                }),    
    templateItem({strain: 'Girl Scout Cookies',
                  type: 'hybrid', 
                  effects: ['happy', 'hungry', 'relaxed'], 
                  flavours: ['mint', 'earthy', 'sweet']
                }),    
  ]);

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
