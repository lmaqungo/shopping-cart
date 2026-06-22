import React from 'react'
import styles from './cartcard.module.css'
import { PackageIcon, DeleteIcon } from '../../icons/icons'
import { roundTo } from '../../utils/utils'
import { Link } from 'react-router'

const CartCard = ({ itemObj, setItems }) => {

  const incrementQuantity = () => 
      setItems(prevArr => 
        prevArr.map(item => {
          if(item.id === itemObj.id){
            return{
              ...item, 
              quantity: item.quantity + 1
            }
          } else {
            return item
          }
      }))

  const decrementQuantity = () => 
    setItems(prevArr => 
      prevArr.map(item => {
        if(item.id === itemObj.id){
          if(item.quantity > 1){
            return{
              ...item, 
              quantity: item.quantity -1
            }
          } else {
            return {
              ...item, 
              quantity: 1
            }
          }
        }else {
          return item
        } 
      })
    )

    const removeFromCart = () => {
     setItems(prevArr => 
      prevArr.map(item => {
        if(item.id === itemObj.id){
          return {
            ...item, 
            inCart: false
          }
        } else {
          return item
        }
      })
    )
  }

  function calculatePrice(quantity, price){
    return roundTo(quantity * price, 2)
    }

  return (
    <div className={styles.body}>
        <div>
          <span>
            <Link style={{display: 'inline' }} to={`/store/${itemObj.id}`}>
              <div className={styles.imageContainer}>
                  <img src={itemObj.colors[itemObj.selectedColor]} alt='weed image' width='48px'/>
              </div>
            </Link>
          </span>
        </div>
        <div className={styles.rightContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.textContent}>
                    <p>{ itemObj.strain }</p>
                    <p>{ itemObj.type }</p>
                    <div className={styles.inStock}>
                        <PackageIcon color={'royalblue'} size={16}/>
                        <p style={{color: 'royalblue' }} >In Stock</p>
                    </div>
                    <p>{`Weight: ${itemObj.quantity} g`}</p>
                </div>

                <div className={styles.quantitySelection}>
                              <button className={styles.quantityBtn} onClick={decrementQuantity} >-</button>
                              <p>{ itemObj.quantity }</p>
                              <button className={styles.quantityBtn} onClick={incrementQuantity} >+</button>
                </div>

            </div>
            <div className={styles.innerContainer}>
                <button className={styles.deleteBtn} onClick={removeFromCart}>
                    <DeleteIcon size={18}/>
                </button>
                <p>{ `$${calculatePrice(itemObj.quantity, itemObj.price)}` }</p>
            </div>
        </div>
    </div>
  )
}

export default CartCard