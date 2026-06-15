import React from 'react'
import { CloseIcon } from '../../icons/icons'
import styles from './filtertag.module.css'

const FilterTag = ({ label='default tag' }) => {
  return (
    <div className={styles.pill}>
        { label }
        <CloseIcon size={14} className={styles.active}/>
    </div>
  )
}

export default FilterTag