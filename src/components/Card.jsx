import React from 'react'
import styles from '../styles/card.module.css'
import { CartIcon, HeartIcon } from '../icons/icons'
import { Link } from 'react-router'
import { useState } from 'react'
import { arrayIncludesObj, deleteObjFromArray } from '../utils/utils'
import { useEffect } from 'react'


const Card = ({ setFavourites, itemObj }) => {

  const [heartClicked, setHeartClicked] = useState(false);
  // const [heartClicked, setHeartClicked] = useState(itemObj.isFavourited);
  const [cartClicked, setCartClicked] = useState(false);

  const heartClickHandler = (e) => {
     e.stopPropagation();
     e.preventDefault();
     heartClicked ? setHeartClicked(false) : setHeartClicked(true);
     // give the itemsObj.isfavourite = heartClicked
  }

  useEffect( () => {
    if(heartClicked){
      setFavourites(prevArr=> {
        const newArr = [...prevArr]; 
        if (!arrayIncludesObj(itemObj, newArr)){
          newArr.push(itemObj)
        }
        return newArr;
      }

      )
    } 
    else if (!heartClicked){
      setFavourites(prevArr => {
        const newArr = [...prevArr]; 
        if(arrayIncludesObj(itemObj, newArr)){
          return deleteObjFromArray(itemObj, newArr);
        }
        return newArr;
      }

      )
    }
  }
    , [heartClicked]
  )

  const cartClickHandler = (e) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    cartClicked ? setCartClicked(false) : setCartClicked(true);
  }

  return (
    <>
      <Link className={styles.removeLinkStyling} to={`${itemObj.id}`}>      
        <div className={styles.cardOuter}>
            <HeartIcon className={heartClicked ? styles.heartClicked : styles.heart} onClick={heartClickHandler}/>
            <div className={styles["image-container"]}>
                <img src={itemObj.img} alt='weed image' width='96px'/>
            </div>
            <div className={styles.bottom}>
                <div className={styles["text"]}>
                    <p className={styles.boldText} >{itemObj.strain}</p>
                    <p className={styles.greyText} >{itemObj.type}</p>
                    <p className={styles.boldText} >{`$${itemObj.price}`}</p>
                </div>
                <CartIcon className={cartClicked ? styles.cartClicked : styles.cart} onClick={cartClickHandler}/>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Card