import styles from './home.module.css'
import { Link } from 'react-router'

const Home = () => {
  return (
      <div className={styles.main}>
          <h1 className={styles.header} >Welcome to Bricks</h1>
          <p className={styles.body} >Discover our selection of replacement bricks to finally complete your creations!</p>
          <span>
            <Link to='/store'>
                <button className={styles.shopBtn}>Shop Now</button>
            </Link>
          </span>
      </div>
  )
}

export default Home