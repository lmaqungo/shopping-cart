import React from 'react'
import { Link } from 'react-router'
import styles from '../styles/item.module.css'
import { BackIcon, PackageIcon } from '../icons/icons'
import { findObj, arrayIncludesObj, deleteObjFromArray } from '../utils/utils'

const Item = ({ itemObj, setItems, setCart }) => {

  const incrementQuantity = () => 
    setItems(prevArr=> {
      const newArr= [...prevArr]; 
      const [obj, index] = findObj(itemObj.id, prevArr); 
      obj.quantity+=1; 
      newArr[index] = obj;
      return newArr;
    }
  );

  const decrementQuantity = () => 
    setItems(prevArr => {
      const newArr= [...prevArr]; 
      const [obj, index] = findObj(itemObj.id, prevArr); 
      if(obj.quantity > 1){
        obj.quantity-=1;
      }
      newArr[index] = obj;
      return newArr;
    }
  );


  const addToCart = () => {
    setItems(prevArr=> {
      const newArr= [...prevArr]; 
      const [obj, index] = findObj(itemObj.id, prevArr); 
      obj.inCart = true; 
      newArr[index] = obj;
      return newArr;
    }); 
    setCart( prevArr => {
      const newArr = [...prevArr]; 
      if (!arrayIncludesObj(itemObj, prevArr)){
        newArr.push(itemObj)
      }
      return newArr;
    });
  } 

  const buyNow = () => {
    addToCart(); 
  }

  const removeFromCart = () => {
     setItems(prevArr=> {
      const newArr= [...prevArr]; 
      const [obj, index] = findObj(itemObj.id, prevArr); 
      obj.inCart = false; 
      newArr[index] = obj;
      return newArr;
    }); 
    setCart(prevArr => {
        const newArr = [...prevArr]; 
        if(arrayIncludesObj(itemObj, prevArr)){
          return deleteObjFromArray(itemObj, newArr);
        }
        return newArr;
    });
  }

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
            <img src={itemObj.img} alt='weed image' width='96px'/>
          </div>
          <div className={styles.bottom}>
            <div className={styles.filters}>
              <p className={styles.filterTitle} >Effects:</p>
              <div className={styles.filterContainer}>
              {
                itemObj.effects.map(effect=> <p className={styles.filter} >{effect}</p>
                )
              }
              </div>
            </div>
            <div className={styles.filters}>
              <p className={styles.filterTitle} >Flavours:</p>
              <div className={styles.filterContainer}>
              {
                itemObj.flavours.map(flavour=> <p className={styles.filter} >{flavour}</p>

                )
              }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.upper}>
            <h1>{ itemObj.strain }</h1>
            <p>{ itemObj.type }</p>
            <div className={styles.inStock}>
              <PackageIcon color={'royalblue'} size={16}/>
              <p>In Stock</p>
            </div>
            <p className={styles.price} >$ { itemObj.calculatePrice }</p>
            <div className={styles.quantitySelection}>
              <button className={styles.quantityBtn} onClick={decrementQuantity} >-</button>
              <p>{ itemObj.quantity }</p>
              <button className={styles.quantityBtn} onClick={incrementQuantity} >+</button>
            </div>
          </div>
          <p className={styles.description} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas suscipit convallis congue. Nam fermentum, nibh non ultrices volutpat, elit turpis viverra lorem, in lobortis quam elit non nisi. Vivamus tristique malesuada massa, sed tincidunt ipsum iaculis sit amet. Morbi dapibus est eget turpis gravida placerat. Fusce elit lectus, imperdiet at.
          </p>
          <div className={styles.callToActions}>
              <span>
                <Link style={{display: 'inline' }} to='/cart' >
                  <button className={styles.buyNow} onClick={buyNow}>Buy Now</button>
                </Link>
              </span>
              <button className={styles.addToBag} onClick={itemObj.inCart ? removeFromCart : addToCart}>{itemObj.inCart ? 'Remove from Cart' : 'Add To Cart'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item