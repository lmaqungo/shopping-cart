import React from 'react'
import styles from './card.module.css'
import { CartIcon, HeartIcon } from '../../icons/icons'
import { Link } from 'react-router'
import { useState } from 'react'
import { arrayIncludesObj, deleteObjFromArray, findObj } from '../../utils/utils'
import { useEffect } from 'react'


const Card = ({ setSavedItems, setCart, itemObj, setItems }) => {

  const [heartClicked, setHeartClicked] = useState(itemObj.isSaved);
  const [cartClicked, setCartClicked] = useState(itemObj.inCart);

  const heartClickHandler = (e) => {
     e.stopPropagation();
     e.preventDefault();
     heartClicked ? setHeartClicked(false) : setHeartClicked(true);
  }
  
  const cartClickHandler = (e) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    cartClicked ? setCartClicked(false) : setCartClicked(true);
  }


  useEffect(() => {
    if(heartClicked){
      setItems(prevArr=> {
      const newArr= [...prevArr]; 
      const [obj, index] = findObj(itemObj.id, prevArr); 
      obj.isSaved = true; 
      newArr[index] = obj;
      return newArr;
    });
      setSavedItems(prevArr=> {
          const newArr = [...prevArr]; 
          if (!arrayIncludesObj(itemObj, prevArr)){
            newArr.push(itemObj)
          }
          return newArr;
        }

      );
    } else if(!heartClicked){
      setItems(prevArr=> {
      const newArr= [...prevArr]; 
      const [obj, index] = findObj(itemObj.id, prevArr); 
      obj.isSaved = false; 
      newArr[index] = obj;
      return newArr;
    });
      setSavedItems(prevArr => {
          const newArr = [...prevArr]; 
          if(arrayIncludesObj(itemObj, prevArr)){
            return deleteObjFromArray(itemObj, newArr);
          }
          return newArr;
        }

        )
    }
  }
    , [heartClicked]
  )

  useEffect(() => {
    if(cartClicked){ 
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
      }
      ); 
    } else if(!cartClicked){
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
      })
    }
  }
    , [cartClicked]
  )

  return (
    <>
      <Link className={styles.removeLinkStyling} to={`${itemObj.id}`}>      
        <div className={styles.cardOuter}>
            <HeartIcon className={itemObj.isSaved ? styles.heartClicked : styles.heart} onClick={heartClickHandler}/>
            <div className={styles["image-container"]}>
                <img src={itemObj.img} alt='lego image' width='96px'/>
            </div>
            <div className={styles.bottom}>
                <div className={styles["text"]}>
                    <p className={styles.boldText} >{itemObj.name}</p>
                    <p className={styles.greyText} >{itemObj.type}</p>
                    <p className={styles.boldText} >{`$${itemObj.price}`}</p>
                </div>
                <CartIcon className={itemObj.inCart ? styles.cartClicked : styles.cart} onClick={cartClickHandler}/>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Card