import React from 'react'
import { Link, useOutletContext } from 'react-router'
import { BackIcon } from '../../icons/icons'
import styles from './cart.module.css'
import CartCard from '../CartCard/CartCard'
import { roundTo } from '../../utils/utils'
import Confetti from 'react-confetti-boom'
import { useState, useEffect } from 'react'

const Cart = () => {

  const VAT_RATE = 0.15;
  const [checkOutClicked, setCheckOutClicked] = useState(false);

    useEffect(() => {
    const checkoutTimer = setTimeout(() => {
      setCheckOutClicked(false);
    }, 2000);


    return () => {
      clearTimeout(checkoutTimer);
    };
  }, [checkOutClicked]);

  
  const {
    items, 
    setItems
  } = useOutletContext()

  useEffect(() => {
    console.log('expecting the items array to change when the quantity is incremented or decremented')
    console.log(items)
  }, [items])

  const renderCards = ()=> {
    if(items.filter(item => item.inCart).length > 0){
      return(
        items.filter(item => item.inCart).map(item => <CartCard key={item.id} itemObj={item} setItems={setItems} />)
      )
    }else{
      return(
        <p>Cart is empty</p>
      )
    }
  }

  const calculateSubTotal = () => {
    let subTotal = 0; 
    items.filter(item => item.inCart).forEach(item=> {
      const itemPrice = roundTo(item.quantity * item.price, 2)
      subTotal+= itemPrice
    })
    return roundTo(subTotal, 2)
  }

  const calculateVat = () => {
    const subTotal = calculateSubTotal(); 
    return roundTo((subTotal * VAT_RATE), 2) ; 
  }

  const subTotal = calculateSubTotal(); 
  const vat = calculateVat(); 
  const total = roundTo((subTotal + vat), 2);

  function checkoutAnimation(){
    
    items.filter(item => item.inCart).length>0 && setCheckOutClicked(true);
  }

  return (
    <div className={styles.body} >
      {checkOutClicked && <Confetti effectInterval={2000} />}
      <span>
        <Link style={{display: 'inline' }} to='/store' >
          <BackIcon className={styles.backButton} />
        </Link>
      </span>
      <h3>Cart</h3>
      <div className={styles.mainContent}>
        <div className={styles.cart}>
          {renderCards()}
        </div>
        <div className={styles.orderSummary}>
          <h3>Order Summary</h3>
          <h2>{ `$${total}` }</h2>
          <div className={styles.rowSpan}>
            <p>Subtotal</p>
            <p>{ `$${calculateSubTotal()}` }</p>
          </div>
          <div className={styles.rowSpan}>
            <p>{`VAT(${VAT_RATE * 100}%)`}</p>
            <p>{ `$${vat}` }</p>
          </div>
          <hr />
          <div className={styles.rowSpan}>
            <h3>Total</h3>
            <h3>{ `$${total}` }</h3>
          </div>
          <button className={styles.checkout} onClick={checkoutAnimation}>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart