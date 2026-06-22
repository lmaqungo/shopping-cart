import React from 'react'
import { CloseIcon } from '../../icons/icons'
import styles from './filtertag.module.css'

const FilterTag = ({ tag, setTags }) => {

  function handleClose(){
    setTags(prevArr => 
      prevArr.map(tagObj => {
        if(tag.id === tagObj.id){
          return {
            ...tag, 
            isActive: false
          }
        } else {
          return tagObj
        }
      })
    )
  }

  return (
    <div className={styles.pill}>
        { tag.title }
        <CloseIcon handleClose={handleClose} size={14} className={styles.active}/>
    </div>
  )
}

export default FilterTag