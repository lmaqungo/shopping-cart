import React from 'react'
import styles from './card.module.css'
import { CartIcon, HeartIcon } from '../../icons/icons'
import { Link } from 'react-router'
import { useState } from 'react'
import { useEffect } from 'react'


const Card = ({ setSavedItems, itemObj, setItems }) => {

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
        setSavedItems(prevArr => prevArr.filter(item=> item.id !== itemObj.id))
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
      setSavedItems(prevArr => {
        const arr = [...prevArr]; 
        arr.push(itemObj); 
        return arr
      })
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
            <HeartIcon className={itemObj.isSaved ? styles.heartClicked : styles.heart} onClick={heartClickHandler}/>
            <div className={styles["image-container"]}>
                <img src={itemObj.colors['green']} alt='lego image' width='96px'/>
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