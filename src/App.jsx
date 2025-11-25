import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet, useLocation } from 'react-router'
import initialItems from './data/items'

function App() {

  const location = useLocation(); 
  const [selectedType, setSelectedType] = useState('');  
  const [selectedEffects, setSelectedEffects] = useState([]); 
  const [selectedFlavours, setSelectedFlavours] = useState([]); 
  const [activeType, setActiveType] = useState('');

  const [activeHeart, setActiveHeart] = useState(false); 

  const [items, setItems] = useState(initialItems);

  const [savedItems, setSavedItems] = useState([]);
  const [cart, setCart] = useState([]);

  const [error, setError] = useState(null);

  useEffect(()=> {
    window.addEventListener('error', (e)=> setError(e.error)); 
    window.addEventListener('unhandledrejection', (e) => setError(e.reason))
  }, [])

    if(error) return <div>Something broke. check console</div> 



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
      <Header activeHeart={activeHeart} setActiveHeart={setActiveHeart} activeType={activeType} setActiveType={setActiveType} />
      <main className={location.pathname === "/" ? "center" : ""}>
        <Outlet context={contextObj}/>
      </main>
    </div>
  )
}

export default App
