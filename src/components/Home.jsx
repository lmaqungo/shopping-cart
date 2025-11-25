import styles from '../styles/home.module.css'
import { Link } from 'react-router'

const Home = () => {
  return (
      <div className={styles.main}>
          <h1>Welcome to <span className={styles.logoHeader}> <span className={styles.green} >Green</span> Finger</span></h1>
          <p>Discover our selection of sticky icky, bursting with flavour and terpenes. </p>
          <span>
            <Link to='/store'>
                <button className={styles.shopBtn}>Shop Now</button>
            </Link>
          </span>
      </div>
  )
}

export default Home