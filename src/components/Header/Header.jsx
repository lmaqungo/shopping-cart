import styles from './header.module.css'
import { Link, useLocation  } from 'react-router'
import { HeartIcon, CartIcon, SearchIcon} from '../../icons/icons'
import { useEffect } from 'react'
import { BurgerMenuIcon } from '../../icons/icons'


const Header = ({ activeHeart, setActiveHeart, activeType, setActiveType, setOpenMenu }) => {

  const handleClick = (id) => {
    setActiveType(activeType === id ? "" : id);
  }

  function openBurgerMenu(){
    setOpenMenu(true)
  }

  if(activeType === 'heart'){
    setActiveHeart(true)
  } else {
    setActiveHeart(false)
  }

  const location = useLocation(); 
  
  return (
    <header>
    <div className={styles.section}>
        <Link to="/" className={styles.logo}>
            <h1 className={styles.logoHeader} >Brick & Order</h1>
        </Link>
        <nav className={styles.flex}>
            {location.pathname === "/store" && <BurgerMenuIcon onClick={openBurgerMenu} className={styles.menuIcon} />}
            <Link to='/' className={styles['nav-link']}>Home</Link>
            <Link to='/store' className={styles['nav-link']}>Store</Link>
        </nav>
    </div>
    <div className={styles.section}>
        <form className={styles.search} >
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