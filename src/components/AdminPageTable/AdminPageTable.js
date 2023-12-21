import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { fetchAddBlockUser, fetchDelBlockUser, fetchDeleteUser } from '../../store/slices/users/userAPI'
import styles from './AdminPageTable.module.css'
import {TbLock, TbLockOpen} from 'react-icons/tb'
import {BiEdit} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import EditModal from '../EditModal/EditModal'

const AdminPageTable = () => {
    const {usersData} = useSelector(selectUsers)
    const [modal, setModal] = useState(false)
    const [id, setId] = useState(null)
    const dispatch = useDispatch()

    const showModal = (id) => {
        setId(id)
        setModal(true)
    }

    const deleteUser = (id) => {
        dispatch(fetchDeleteUser(id))
    }

    const blockUser = (event, id) => {
        event.target.closest('div').classList.add(styles.activeIcon)
        const user = usersData.find(user => user.id === id)
        user && dispatch(fetchAddBlockUser(user))
    }

    const unBlockUser = (event, id) => {
        event.target.closest('div').previousElementSibling.classList.remove(styles.activeIcon)
        dispatch(fetchDelBlockUser(id))
    }

    return (
        <>
    <table className={styles.table}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Avatar</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Login</th>
                <th>Email</th>
                <th>Password</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                usersData.map(user => (
                    <tr key={user.id}>
                        <td>#{user?.id}</td>
                        <td> <img src={user?.avatar} alt="avatar" /></td>
                        <td>{user?.firstname}</td>
                        <td>{user?.lastname}</td>
                        <td>{user?.login}</td>
                        <td>{user?.email}</td>
                        <td>{user?.password.split('').fill('*', 3, -1) }</td>
                        <td className={styles.td}>
                            <div onClick={(event) => blockUser(event, user?.id)}><TbLock className={styles.tableIcon} /></div>
                            <div onClick={(event) => unBlockUser(event, user?.id)}><TbLockOpen className={styles.tableIcon}/></div>
                            <div><BiEdit className={styles.tableIcon} onClick={() => showModal(user?.id)}/></div>
                            <div><AiOutlineDelete className={styles.tableIcon} onClick={() => deleteUser(user?.id)}/></div>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
    {
        modal && <EditModal id={id} setModal={setModal}/>
    }
    </>
  )
}

export default AdminPageTable