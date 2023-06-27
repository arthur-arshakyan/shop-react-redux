import React from 'react'
import styles from './ShopCartItem.module.css'
import {MdDeleteOutline} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import {selectUsers} from '../../store/slices/users/usersSlice'
import { fetchDecreaseProduct, fetchDeleteCartProduct, fetchPatchProduct } from '../../store/slices/products/productsAPI'

const ShopCartItem = ({product}) => {

    const {currentUser} = useSelector(selectUsers)

    const dispatch = useDispatch()



  return (
    <div className={styles.cartItemContent}>
        <div>
            <img src={product?.img} alt="img" className={styles.cartImg}/>
        </div>
        <div className={styles.cartMiddle}>
            <div className={styles.middleTop}>
                <h2>{product?.title}</h2>
                <h3>$ {product?.total.toFixed(2)}</h3>
            </div>
            <div className={styles.countBox}>
                <span onClick={() => dispatch(fetchDecreaseProduct({product, id: currentUser.id}))}>-</span>
                <span>{product?.productQuantity}</span>
                <span onClick={() => dispatch(fetchPatchProduct({product, id: currentUser.id}))}>+</span>
            </div>
        </div>
        <div onClick={() => dispatch(fetchDeleteCartProduct({product,id : currentUser.id}))} className={styles.deleteIcon}>
            <MdDeleteOutline/>
        </div>
    </div>
  )
}

export default ShopCartItem