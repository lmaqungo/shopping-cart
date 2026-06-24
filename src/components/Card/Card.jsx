import React from 'react'
import styles from './card.module.css'
import { CartIcon, HeartIcon } from '../../icons/icons'
import { Link } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'


const Card = ({ itemObj, setItems }) => {

  const [heartClicked, setHeartClicked] = useState(itemObj.isSaved);
  const [cartClicked, setCartClicked] = useState(itemObj.inCart);

  const heartClickHandler = (e) => {
     e.stopPropagation();
     e.preventDefault();
     if(heartClicked){
        setItems(prevArr => 
          prevArr.map(item=> {
            if(item.id === itemObj.id){
              return {
                ...item, 
                isSaved: false
              }
            } else {
              return item
            }
          })
        )
        setHeartClicked(false)
     } else {
      setItems(prevArr => 
        prevArr.map(item => {
          if(item.id === itemObj.id) {
            return {
              ...item, 
              isSaved: true
            }
          } else {
            return item
          }
        })
      )
      setHeartClicked(true)
     }
  }
  
  const cartClickHandler = (e) => {
    e.stopPropagation(); 
    e.preventDefault(); 
    if(cartClicked){
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
      setCartClicked(false)
    } else {
      setItems(prevArr => 
        prevArr.map(item => {
          if(item.id === itemObj.id){
            return {
              ...item, 
              inCart: true
            }
          } else {
            return item
          }
        })
      )
      setCartClicked(true)
    }
  }

  return (
    <>
      <Link className={styles.removeLinkStyling} to={`${itemObj.id}`}>      
        <div className={styles.cardOuter}>
            <HeartIcon className={`${styles.iconSize} ${itemObj.isSaved ? styles.heartClicked : styles.heart}`} onClick={heartClickHandler}/>
            <div className={styles["image-container"]}>
                <img className={styles.img} src={itemObj.colors['green']} alt='lego image' width='96px'/>
            </div>
            <div className={styles.bottom}>
                <div className={styles["text"]}>
                    <p className={styles.infoText} >{itemObj.name}</p>
                    <p className={styles.infoText} >{`$${itemObj.price}`}</p>
                </div>
                <CartIcon className={`${styles.iconSize} ${itemObj.inCart ? styles.cartClicked : styles.cart}`} onClick={cartClickHandler}/>
            </div>
        </div>
      </Link>
    </>
  )
}

export default Card