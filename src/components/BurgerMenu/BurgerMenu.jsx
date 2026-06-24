import React from 'react'
import { CloseIcon } from '../../icons/icons'
import styles from './burgerMenu.module.css'

const BurgerMenu = ({ children, openMenu, setOpenMenu, className }) => {
  return (
    <div className={`${styles.burgerMenu} ${openMenu ? styles.open : styles.close} ${className} `} >
        <div className={styles.inner} >
            <CloseIcon handleClose={() => setOpenMenu(false)} className={styles.closeIcon} size={24} />
            { children }
        </div>
    </div>
  )
}

export default BurgerMenu