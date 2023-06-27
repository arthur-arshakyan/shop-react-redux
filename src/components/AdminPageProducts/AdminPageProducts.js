import React, { useEffect, useState } from 'react'
import { fetchDeleteProduct, fetchProducts } from '../../store/slices/products/productsAPI'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../store/slices/products/productsSlice'
import styles from './AdminPageProducts.module.css'
import {BiEdit} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import EditProductModal from '../EditProductModal/EditProductModal'
import AddProductModal from '../AddProductModal/AddProductModal'

const AdminPageProducts = () => {
    const {productsData} = useSelector(selectProducts)
    const [modal, setModal] = useState(false)
    const [addModal, setAddModal] = useState(false)
    const [id, setId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const showModal = (id) => {
        setId(id)
        setModal(true)
    }

    const showAddModal = () => {
        setAddModal(true)
    }
    
  return (
    <div className={styles.container}>
        <div className={styles.add}>
            <h1>Products</h1>
            <div className={styles.buttonDiv}>
                <button onClick={showAddModal}>Add Product</button>
            </div>
        </div>
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Img</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    productsData.map(product => (
                        <tr key={product?.id}>
                            <td>#{product?.id}</td>
                            <td>
                                <img src={product?.img} alt="product img" />
                            </td>
                            <td>{product?.title}</td>
                            <td>{product?.description}</td>
                            <td>${product?.price}</td>
                            <td className={styles.icons}>
                                <p onClick={() => showModal(product?.id)}><BiEdit/></p>
                                <p onClick={() => dispatch(fetchDeleteProduct(product?.id))}><AiOutlineDelete/></p>
                            </td>
                        </tr>
            ) )}
            </tbody>
        </table>
        {
            modal && <EditProductModal id={id} setModal={setModal}/>
        }
        {
            addModal && <AddProductModal setAddModal={setAddModal}/>
        }
    </div>
  )
}

export default AdminPageProducts