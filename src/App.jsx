import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLocation } from 'react-router'
import initialItems from './data/items'
import initialTags from './data/tags'

function App() {

  const location = useLocation(); 
  const [tags, setTags] = useState(initialTags); 

  const [activeType, setActiveType] = useState('');

  const [activeHeart, setActiveHeart] = useState(false); 

  const [openMenu, setOpenMenu] = useState(false); 

  const [items, setItems] = useState(initialItems);

  const [savedItems, setSavedItems] = useState([]);
  const [cart, setCart] = useState([]);

  const contextObj = {
    items, 
    setItems, 
    savedItems, 
    setSavedItems, 
    cart, 
    setCart,
    activeHeart, 
    tags, 
    setTags, 
    openMenu, 
    setOpenMenu
  }

  return (
      <div className="body">
        <Header activeHeart={activeHeart} setActiveHeart={setActiveHeart} activeType={activeType} setActiveType={setActiveType} setOpenMenu={setOpenMenu} />
        <main className={location.pathname === "/" ? "center" : ""}>
          <Outlet context={contextObj}/>
        </main>
      </div>
  )
}

export default App
