import React from 'react'
import styles from './checkbox.module.css'
import { useState, useEffect } from 'react'
import { CheckIcon } from '../../icons/icons'

const Checkbox = ({ tag, setTags }) => {

    const isClicked = tag.isActive

    const handleClick = () =>{
      if(isClicked){
        setTags(prevArr => 
          prevArr.map(tagObj => {
            if(tag.id === tagObj.id){
              return {
                ...tagObj, 
                isActive: false
              }
            }else{
              return tagObj
            }
          })
        )
      } else{
        setTags(prevArr => 
          prevArr.map(tagObj => {
            if(tag.id === tagObj.id){
              return {
                ...tagObj, 
                isActive: true
              }
            }else{
              return tagObj
            }
          })
        )        
      }
    }

  return (
    <div className={styles.outer} onClick={handleClick}>
        <span className={isClicked ? styles['checkbox-clicked'] : styles['checkbox']} >
            {isClicked && <CheckIcon size={20} /> }
        </span>
        <span>{tag.title}</span>
    </div>
  ) 
}

export default Checkbox