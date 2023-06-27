import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import ShopCartItem from '../ShopCartItem/ShopCartItem'
import styles from './ShopCartModal.module.css'

const ShopCartModal = ({setCartModal}) => {

    const {currentUser} = useSelector(selectUsers)
    const total = currentUser.cartProducts.reduce((acc, curr) => +curr.total + acc, 0)
    
  return (
    <div onClick={() => setCartModal(false)} className={styles.modalBg}>
        <div onClick={(event) => event.stopPropagation()} className={styles.modalContent}>
            {/* top */}
            {
                currentUser?.cartProducts?.length
                    ?
                    <p className={styles.total}>Total : <span>${total.toFixed(2)}</span></p>
                    :
                    <p className={styles.cartEmpty}>Cart is empty</p>
            }
            {/* bottom */}
            <div className={styles.carts}>
                {/* items */}
                {
                    currentUser?.cartProducts?.map(product => <ShopCartItem key={product.id} product={product}/>)
                }
            </div>
        </div>
    </div>
  )
}

export default ShopCartModal