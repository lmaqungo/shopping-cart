import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import { Outlet, useLocation } from 'react-router'
import initialItems from './data/items'

function App() {

  const location = useLocation(); 
  const [selectedTags, setSelectedTags] = useState([]); 

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
    items, 
    setItems, 
    savedItems, 
    setSavedItems, 
    cart, 
    setCart,
    activeHeart, 
    selectedTags, 
    setSelectedTags
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
