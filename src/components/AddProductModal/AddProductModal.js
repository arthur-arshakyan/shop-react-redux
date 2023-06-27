import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../store/slices/products/productsSlice'
import { generatorId } from '../../helpers/generatorId'
import { fetchPostAddProduct } from '../../store/slices/products/productsAPI'
import styles from './AddProductModal.module.css'

const AddProductModal = ({setAddModal}) => {

    const {productsData} = useSelector(selectProducts)
    const [img, setImg] = useState('')
    const dispatch = useDispatch()

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

        if(productsData.find(product => product?.title === title.value)){
            return alert('Already exists')
        }

        let data = {
            id: generatorId(productsData),
            title: title.value,
            description: description.value,
            price: price.value,
            img: img
        }
        dispatch(fetchPostAddProduct(data))
        setAddModal(false)
    }

  return (
    <main onClick={() => setAddModal(false)} className={styles.addProductModal}>
        <section onClick={(event) => event.stopPropagation()} className={styles.modalContent}>
            <h1>Add product</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name='title' placeholder='Title'/>
                <textarea type="text" name='description' placeholder='Decription' rows='5'/>
                <input type="text" name='price' placeholder='Price'/>
                <input type="file" name='file' accept='image/*' onChange={(event) => setFile(event)}/>
                <button>Add</button>
            </form>
        </section>
    </main>
  )
}

export default AddProductModal