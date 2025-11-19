import React from 'react'
import { Link } from 'react-router'
import styles from '../styles/item.module.css'
import { BackIcon, PackageIcon } from '../icons/icons'
import { findObj } from '../utils/utils'

const Item = ({ id, strain, type, effects, flavours, img, price, quantity, setItems }) => {

  const incrementQuantity = () => 
    setItems(prevArr=> {
      const newArr= [...prevArr]; 
      const [obj, index] = findObj(id, prevArr); 
      obj.quantity+=1; 
      newArr[index] = obj;
      return newArr;
    }
  );

  const decrementQuantity = () => 
    setItems(prevArr => {
      const newArr= [...prevArr]; 
      const [obj, index] = findObj(id, prevArr); 
      if(obj.quantity > 1){
        obj.quantity-=1;
      }
      newArr[index] = obj;
      return newArr;
    }
  );

  return (
    <div className={styles.body}>
      <span>
        <Link style={{display: 'inline' }} to='/store' >
          <BackIcon className={styles.backButton} />
        </Link>
      </span>
      <div className={styles.main}>
        <div className={styles.leftContainer}>
          <div className={styles.imageContainer}>
            <img src={img} alt='weed image' width='96px'/>
          </div>
          <div className={styles.bottom}>
            <div className={styles.filters}>
              <p className={styles.filterTitle} >Effects:</p>
              <div className={styles.filterContainer}>
              {
                effects.map(effect=> <p className={styles.filter} >{effect}</p>
                )
              }
              </div>
            </div>
            <div className={styles.filters}>
              <p className={styles.filterTitle} >Flavours:</p>
              <div className={styles.filterContainer}>
              {
                flavours.map(flavour=> <p className={styles.filter} >{flavour}</p>

                )
              }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.upper}>
            <h1>{ strain }</h1>
            <p>{ type }</p>
            <div className={styles.inStock}>
              <PackageIcon color={'royalblue'} size={16}/>
              <p>In Stock</p>
            </div>
            <p className={styles.price} >$ { price }</p>
            <div className={styles.quantitySelection}>
              <button className={styles.quantityBtn} onClick={decrementQuantity} >-</button>
              <p>{ quantity }</p>
              <button className={styles.quantityBtn} onClick={incrementQuantity} >+</button>
            </div>
          </div>
          <p className={styles.description} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit convallis congue. Nam fermentum, nibh non ultrices volutpat, elit turpis viverra lorem, in lobortis quam elit non nisi. Vivamus tristique malesuada massa, sed tincidunt ipsum iaculis sit amet. Morbi dapibus est eget turpis gravida placerat. Fusce elit lectus, imperdiet at.
          </p>
          <div className={styles.callToActions}>
              <button className={styles.buyNow} >Buy Now</button>
              <button className={styles.addToBag} >Add To Bag</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item