import React from 'react'
import styles from '../styles/cartcard.module.css'
import { PackageIcon, DeleteIcon } from '../icons/icons'
import { findObj, arrayIncludesObj, deleteObjFromArray } from '../utils/utils'

const CartCard = ({ itemObj, setItems, setCart }) => {

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

    const removeFromCart = () => {
        setCart(prevArr => {
          const newArr = [...prevArr]; 
          if(arrayIncludesObj(itemObj, prevArr)){
            return deleteObjFromArray(itemObj, newArr);
          }
          return newArr;
      }
      );
        setItems(prevArr=> {
            const newArr= [...prevArr]; 
            const [obj, index] = findObj(itemObj.id, prevArr); 
            obj.quantity = 1;
            obj.inCart = false; 
            newArr[index] = obj;
            return newArr;
        })  
    }


  return (
    <div className={styles.body}>
        <div>
            <div className={styles.imageContainer}>
                <img src={itemObj.img} alt='weed image' width='48px'/>
            </div>
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
                <p>{ `$${itemObj.calculatePrice}` }</p>
            </div>
        </div>
    </div>
  )
}

export default CartCard