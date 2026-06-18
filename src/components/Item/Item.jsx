import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import styles from './item.module.css'
import { BackIcon, PackageIcon, WeightIcon, HeartIcon } from '../../icons/icons'
import { findObj, arrayIncludesObj, deleteObjFromArray } from '../../utils/utils'

const Item = ({ itemObj, setItems, setCart, setSavedItems }) => {

  const [heartClicked, setHeartClicked] = useState(itemObj.isSaved); 

  const heartClickHandler = () => {
    if(heartClicked){
      setItems(prevArr => 
        prevArr.map(item=> {
          if(itemObj.id === item.id){
            return {
              ...item, 
              isSaved: false 
            }
          } else {
            return item
          }
        })
      )
      setSavedItems(prevArr => 
        prevArr.filter(item => item.id!== itemObj.id)
      )
      setHeartClicked(false)
    } else {
      setItems(prevArr => 
        prevArr.map(item=> {
          if(itemObj.id === item.id){
            return {
              ...item, 
              isSaved: true 
            }
          } else {
            return item
          }
        })
      )
      setSavedItems(prevArr => {
        const arr = [...prevArr]; 
        arr.push(itemObj); 
        return arr
      })
      setHeartClicked(true)
    }
  }

  const handleColorSelection = (e) => {
    setItems(prevItemsArray => 
      prevItemsArray.map(item=> {
        if(item.id === itemObj.id){
          return {
            ...item, 
            selectedColor: e.target.value
          }
        } else {
          return item
        }
      })
    )
  }

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
            <HeartIcon className={itemObj.isSaved ? styles.heartClicked : styles.heart} onClick={heartClickHandler}/>
            <img src={itemObj.colors[itemObj.selectedColor]} alt='weed image' width='96px'/>
          </div>
          <div className={styles.bottom}>
            <div className={styles.filters}>
              <p className={styles.filterTitle} >Tags:</p>
              <div className={styles.filterContainer}>
              {
                itemObj.tags.map(tag=> <p className={styles.filter} >{tag}</p>
                )
              }
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.upper}>
            <h1>{ itemObj.name }</h1>
            <div className={styles.inStock}>
              <PackageIcon color={'royalblue'} size={16}/>
              <p>In Stock</p>
            </div>
            <p className={styles.price} >$ { itemObj.calculatePrice }</p>
            <div className={styles.quantitySelectionContainer}>
              <span className={styles.weight}>
                <WeightIcon size={20} color='black'/>
                <p>(g)</p>
              </span>
              <div className={styles.quantitySelection}>
                <button className={styles.quantityBtn} onClick={decrementQuantity} >-</button>
                <p>{ itemObj.quantity }</p>
                <button className={styles.quantityBtn} onClick={incrementQuantity} >+</button>
              </div>
            </div>
          </div>
          <div className={styles.colorSelectorContainer} >
            <label htmlFor="color-select">Color</label>
            <select onChange={handleColorSelection} className={styles.colorSelector} name="color" id="color-select">
              <option selected={itemObj.selectedColor === 'red' ? true : false } value="red">red</option>
              <option selected={itemObj.selectedColor === 'green' ? true : false } value="green">green</option>
              <option selected={itemObj.selectedColor === 'blue' ? true : false } value="blue">blue</option>
              <option selected={itemObj.selectedColor === 'yellow' ? true : false } value="yellow">Yellow</option>
            </select>
          </div>
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