import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import styles from './AdminPage.module.css'
import AdminPageTable from '../../components/AdminPageTable/AdminPageTable'
import {FaUser,FaUserAltSlash} from 'react-icons/fa'
import {AiFillShop} from 'react-icons/ai'
import {BsCalendar3} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const AdminPage = () => {

  const {usersData, blockedUsers} = useSelector(selectUsers)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 30000);
  }, [])
  

  return (
    <main className={styles.main}>
      <h1>Dashboard</h1>
      <section className={styles.dashboards}>
        <div className={styles.square}>
          <div><FaUser className={styles.icon}/></div>
          <p>{usersData.length}</p>
        </div>
        <div className={styles.square}>
          <div><FaUserAltSlash className={styles.icon}/></div>
          <p>{blockedUsers.length}</p>
        </div>
        <div className={styles.square}>
          <div><BsCalendar3 className={styles.icon}/></div>
          <p>
              {date.toLocaleDateString('en-GB', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
          </p>
          <p>{date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
          </p>
        </div>
        <div className={styles.square}>
          <div className={styles.shopIcon}><AiFillShop/></div>
          <Link to='/shop-react-redux' className={styles.linkToShop}>Go to Shop</Link>
        </div>
      </section>

      <AdminPageTable/>

    </main>
  )
}

export default AdminPage