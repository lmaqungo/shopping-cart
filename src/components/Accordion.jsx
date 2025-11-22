import { useState } from 'react'; 
import { DropDownIcon } from '../icons/icons';
import styles from '../styles/accordion.module.css';

const Accordion = ({ children, title, overflow=false }) => {

    const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.accordion}>
        <div className={styles.upper} onClick={ ()=> isActive ? setIsActive(false) : setIsActive(true) }>
            <h2>
                { title }
            </h2>
            <DropDownIcon className={isActive ? styles['flip-dropdown-down'] : styles['flip-dropdown-up'] }/>
        </div>
        <div className={isActive ? overflow ? styles['scrolling-child-show'] : styles['non-scrolling-child-show'] : styles["children-hide"]}>{ children }</div>
    </div>
  )
}

export default Accordion