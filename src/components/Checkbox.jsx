import React from 'react'
import styles from '../styles/checkbox.module.css'
import { useState, useEffect } from 'react'
import { CheckIcon } from '../icons/icons'
import { deleteItemFromArray } from '../utils/utils'

const Checkbox = ({ label='default label', type='multi-click', uniClickHandler, isClickedUni, parent, parentArraySetter, parentArray }) => {

    const [isClicked, setIsClicked] = useState(initialCheckValue());

    function initialCheckValue(){
      if(parentArray) {
        return parentArray.includes(label) 
      }
      else{
        return false
      }
    }

    useEffect(()=>{
      if(parent==='effects' || parent==='flavours'){
        if(isClicked){
          const newArr = [...parentArray]; 
          if(!parentArray.includes(label)){
            newArr.push(label);
          }
          parentArraySetter(newArr);
        } 

        else if(!isClicked){
          const newArr = [...parentArray]; 
          if(newArr.includes(label)){
            parentArraySetter(deleteItemFromArray(newArr, label))
          } 
        }

      }
    }, 
    [isClicked, parent])

    const handleClick = () =>{
        isClicked ? setIsClicked(false) : setIsClicked(true)
    }

  if(type==='multi-click') {
    return (
      <div className={styles.outer} onClick={handleClick}>
          <span className={isClicked ? styles['checkbox-clicked'] : styles['checkbox']} >
              {isClicked && <CheckIcon size={20} /> }
          </span>
          <span>{label}</span>
      </div>
    ) 
  } else if(type==='uni-click'){
    return(
      <div className={styles.outer} onClick={() => uniClickHandler(label)}>
          <span className={isClickedUni ? styles['checkbox-clicked'] : styles['checkbox']} >
              {isClickedUni && <CheckIcon size={20} /> }
          </span>
          <span>{label}</span>
      </div>
    )
  }
}

export default Checkbox