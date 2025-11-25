import styles from '../styles/header.module.css'
import { Link } from 'react-router'
import { HeartIcon, CartIcon, SearchIcon} from '../icons/icons'
import { useEffect } from 'react'
import { useLocation } from 'react-router'


const Header = ({ activeHeart, setActiveHeart, activeType, setActiveType }) => {

  const handleClick = (id) => {
    setActiveType(activeType === id ? "" : id);
  }

  useEffect(()=> {
    activeType === 'heart' ? setActiveHeart(true) : setActiveHeart(false)
  }
  , [activeType, activeHeart]
  )

  const location = useLocation(); 
  
  return (
    <header>
    <div className={styles.section}>
        <Link to="/" className={styles.logo}>
            <h1 className={styles.logoHeader} ><span className={styles.green} >Green</span> Finger</h1>
        </Link>
        <nav className={styles.flex} >
            <Link to='/' className={styles['nav-link']}>Home</Link>
            <Link to='/store' className={styles['nav-link']}>Store</Link>
        </nav>
    </div>
    <div className={styles.section}>
        <form className={styles.search}>
        <SearchIcon className={styles['search-icon']}/>
        <input type="text" placeholder='Search'/>
        </form>
        <div className={styles["nav-gap"]}>
          <span>
            <Link style={{display: 'inline' }} to='/store' >
              <HeartIcon className={activeHeart ? styles.heartClicked : styles.heart} onClick={()=>handleClick('heart')} />
            </Link>
          </span>
          <span>
            <Link style={{display: 'inline' }} to='/cart' >
              <CartIcon onClick={()=>handleClick('cart')} className={location.pathname === "/cart" ? styles.cartClicked : ""}/>
            </Link>
          </span>
        </div>
    </div>
    </header>
  )
}

export default Header