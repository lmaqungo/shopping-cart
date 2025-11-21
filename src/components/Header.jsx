import styles from '../styles/header.module.css'
import { Link } from 'react-router'
import { HeartIcon, CartIcon, SearchIcon} from '../icons/icons'


const Header = ({ activeHeart, setActiveHeart }) => {


  const heartClickHandler = () => {
    activeHeart ? setActiveHeart(false)  : setActiveHeart(true)
  }

  return (
    <header>
    <div className={styles.section}>
        <Link to="/" className={styles.logo}>
            <h1>Potenuse</h1>
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
          <HeartIcon className={activeHeart ? styles.heartClicked : styles.heart} onClick={heartClickHandler} />
          <CartIcon />
        </div>
    </div>
    </header>
  )
}

export default Header