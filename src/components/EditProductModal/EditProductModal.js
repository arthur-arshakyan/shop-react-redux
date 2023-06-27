import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../store/slices/products/productsSlice'
import { fetchEditProduct } from '../../store/slices/products/productsAPI'
import styles from '../EditModal/EditModal.module.css'

const EditProductModal = ({id, setModal}) => {

    const fileRef = useRef(null)
    const [img, setImg] = useState('')
    const dispatch = useDispatch()
    const {productsData} = useSelector(selectProducts)
    const product = productsData.find(product => product.id === id)

    const setFile = (event) => {
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            setImg(reader.result)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const {
            title,
            description,
            price
        } = event.target

        const data = {
            id,
            title: title.value,
            description: description.value,
            price: price.value,
            img: fileRef.current.files.length ? img : product.avatar
        }

        dispatch(fetchEditProduct(data))
        setModal(false)
    }

  return (
    <main onClick={() => setModal(false)} className={styles.modalBg}>
        <section onClick={(event) => event.stopPropagation()} className={styles.modalContent}>
            <h1>Edit product</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name='title'defaultValue={product?.title} placeholder='Title'/>
                <input type="text" name='description' defaultValue={product?.description} placeholder='Description'/>
                <input type="text" name='price' defaultValue={product?.price} placeholder='Price'/>
                <input type="file" ref={fileRef} onChange={(event) => setFile(event)}/>
                <button>Edit</button>
            </form>
        </section>
    </main>
  )
}

export default EditProductModal