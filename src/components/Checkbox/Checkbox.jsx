import React from 'react'
import styles from './checkbox.module.css'
import { useState, useEffect } from 'react'
import { CheckIcon } from '../../icons/icons'

const Checkbox = ({ label, stateArraySetter, stateArray }) => {

    const [isClicked, setIsClicked] = useState(initialCheckValue());

    function initialCheckValue(){
      if(stateArray) {
        return stateArray.includes(label) 
      }
      else{
        return false
      }
    }

    const handleClick = () =>{
      if(isClicked){
        stateArraySetter(prevArr=> prevArr.filter(element=> element!== label ) )
        setIsClicked(false)
      } else{
        stateArraySetter(prevArr => {
          const arr = [...prevArr]; 
          arr.push(label); 
          return arr
        })
        setIsClicked(true)
      }
    }

  return (
    <div className={styles.outer} onClick={handleClick}>
        <span className={isClicked ? styles['checkbox-clicked'] : styles['checkbox']} >
            {isClicked && <CheckIcon size={20} /> }
        </span>
        <span>{label}</span>
    </div>
  ) 
}

export default Checkbox