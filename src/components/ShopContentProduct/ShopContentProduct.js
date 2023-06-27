import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectUsers } from '../../store/slices/users/usersSlice'
import { fetchPatchProduct } from '../../store/slices/products/productsAPI'
import styles from './ShopContentProduct.module.css'
import ShopProductViewMore from '../ShopProductViewMore/ShopProductViewMore'

const ShopContentProduct = ({product}) => {
    console.log(product);
    const {currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()
    const [viewModal, setViewModal] = useState(false)

    // const addToCart = () => {
    //     dispatch(fetchPatchProduct({product, id: currentUser.id}))
    // }
  return (
    <div className={styles.product}>
        <img src={product?.img} alt={product?.title} className={styles.productImg}/>
        <div className={styles.productContent}>
            <div className={styles.top}>
                <h2>{product?.title}</h2>
                <b>$ {product?.price}</b>
            </div>
            <div className={styles.bottom}>
                <button onClick={() => setViewModal(true)}>View More</button>
                <button onClick={() => dispatch(fetchPatchProduct({product, id: currentUser.id}))}>Add to Cart</button>
            </div>
        </div>
        {
            viewModal && <ShopProductViewMore product={product} setViewModal={setViewModal} currentUser={currentUser}/>
        }
    </div>
  )
}

export default ShopContentProduct