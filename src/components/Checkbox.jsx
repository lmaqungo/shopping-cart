import React from 'react'
import styles from '../styles/checkbox.module.css'
import { useState, useEffect } from 'react'
import { CheckIcon } from '../icons/icons'
import { deleteItemFromArray } from '../utils/utils'

const Checkbox = ({ label='default label', type='multi-click', uniClickHandler, isClickedUni, parent, parentArraySetter, parentArray }) => {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(()=>{
      if(parent==='effects' || parent==='flavours'){
        if(isClicked){
          parentArraySetter(prevArr=>{
            if(prevArr){
              const newArr = [...prevArr]; 
              if(!prevArr.includes(label)){
                newArr.push(label)
              }
              return newArr;
            }
          })
        } 

        // else if(!isClicked){
        //   parentArraySetter(prevArr=>{
        //     if(prevArr){
        //       if(prevArr.includes(label)){
        //         return deleteItemFromArray(prevArr, label)
        //       }else{
        //         return prevArr
        //       }
        //     }
        //   })
        // }

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