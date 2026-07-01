import styles from './home.module.css'
import { Link } from 'react-router'
import Carousel from '../Carousel/Carousel'
import { useOutletContext } from 'react-router'

const Home = () => {

  const { items } = useOutletContext();

  return (
      <div className={styles.main}>
          <h1 className={styles.header} >Welcome to Brick & Order</h1>
          <p className={styles.body} >Discover our selection of replacement bricks to finally complete your creations!</p>
          <span>
            <Link to='/store'>
                <button className={styles.shopBtn}>Shop Now</button>
            </Link>
          </span>
          <Carousel items={items} />
      </div>
  )
}

export default Home