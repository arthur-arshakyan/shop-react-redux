import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../store/slices/products/productsAPI'
import { selectProducts } from '../../store/slices/products/productsSlice'
import ShopHeader from '../../components/ShopHeader/ShopHeader'
import styles from './Shop.module.css'
import ShopContent from '../../components/ShopContent/ShopContent'

const Shop = () => {
    const dispatch = useDispatch()
    const {productsData, filteredProducts} = useSelector(selectProducts)
    console.log(filteredProducts);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

  return (
    <main className={styles.shop}>
      <ShopHeader/>
      <ShopContent productsData={productsData} filteredProducts={filteredProducts}/>
    </main>
  )
}

export default Shop