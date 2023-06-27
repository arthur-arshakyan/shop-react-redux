import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { fetchEditUser } from '../../store/slices/users/userAPI'
import styles from './EditModal.module.css'

const EditModal = ({id, setModal}) => {

    const fileRef = useRef(null)
    const [ava, setAva] = useState('')
    const dispatch = useDispatch()
    const {usersData} = useSelector(selectUsers)
    const user = usersData.find(user => user.id === id)

    const setFile = (event) => {
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = () => {
            setAva(reader.result)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const {
            firstname,
            lastname
        } = event.target

        const data = {
            id,
            firstname: firstname.value,
            lastname: lastname.value,
            avatar: fileRef.current.files.length ? ava : user.avatar
        }

        dispatch(fetchEditUser(data))
        setModal(false)
    }

  return (
    <main onClick={() => setModal(false)} className={styles.modalBg}>
        <section onClick={(event) => event.stopPropagation()} className={styles.modalContent}>
            <h1>Edit user</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name='firstname'defaultValue={user?.firstname} placeholder='First name'/>
                <input type="text" name='lastname' defaultValue={user?.lastname} placeholder='Last name'/>
                <input type="file" ref={fileRef} onChange={(event) => setFile(event)}/>
                <button>Edit</button>
            </form>
        </section>
    </main>
  )
}

export default EditModal