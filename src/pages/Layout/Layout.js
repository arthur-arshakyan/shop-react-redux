import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import styles from './Layout.module.css'
import LayoutData from '../../components/LayoutData/LayoutData'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import {RxDashboard} from 'react-icons/rx'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import {RiContactsLine} from 'react-icons/ri'
import {BsBarChart} from 'react-icons/bs'

const Layout = () => {
    const {currentUser} = useSelector(selectUsers)
    const {pathname} = useLocation()
    
  return (
    <>
      <aside className={styles.sideBar}>
          <div className={styles.avatar}>
              <img src={currentUser.avatar}/>
              <p className={styles.name}>{currentUser.firstname} {currentUser.lastname}</p>
          </div>
          <NavLink to={'/adminPage/'} className={({isActive}) => `${isActive || pathname === '/adminPage' ? styles.active : null}`}><LayoutData icon={<RxDashboard />} content={'Dashboard'}/></NavLink>
          <NavLink to={'/adminPage/products'} className={({isActive}) => `${isActive ? styles.active : null}`}><LayoutData icon={<MdOutlineProductionQuantityLimits/>} content={'Products'}/></NavLink>
          <NavLink to={'/adminPage/settings'} className={({isActive}) => `${isActive ? styles.active : null}`}><LayoutData icon={<FiSettings/>} content={'Settings'}/></NavLink>
          <NavLink to={'/adminPage/contacts'} className={({isActive}) => `${isActive ? styles.active : null}`}><LayoutData icon={<RiContactsLine/>} content={'Contacts'}/></NavLink>
          <NavLink to={'/adminPage/charts'} className={({isActive}) => `${isActive ? styles.active : null}`}><LayoutData icon={<BsBarChart/>} content={'Charts'}/></NavLink>
      </aside> 
      <main className={styles.main}>
        <Outlet/>
      </main>
    </>
  )
}

export default Layout