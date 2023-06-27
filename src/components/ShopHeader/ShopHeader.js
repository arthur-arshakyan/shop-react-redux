import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import ShopCartModal from '../ShopCartModal/ShopCartModal'
import {GiShoppingBag, GiShoppingCart} from 'react-icons/gi'
import {FiSearch} from 'react-icons/fi'
import styles from './ShopHeader.module.css'

import {filterProducts} from '../../store/slices/products/productsSlice'
import {resetFilteredProducts, selectProducts, setOpacity} from '../../store/slices/products/productsSlice'
import UserLogout from '../UserLogout/UserLogout'

const ShopHeader = () => {

    const {currentUser} = useSelector(selectUsers)
    const {productsData} = useSelector(selectProducts)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [cartModal, setCartModal] = useState(false)
    const [logout, setLogout] = useState(false)

    cartModal ? document.body.classList.add(styles.bodyOverflow) : document.body.classList.remove(styles.bodyOverflow)

    function checkEqual(value,opacity,dispatcher){
        if(productsData.find(product=> product.title.toLowerCase().split(' ').find(str=>str.startsWith(value.toLowerCase())))){
            const filteredProducts = productsData.filter(product=>product.title.toLowerCase().split(' ').find(str=>str.startsWith(value.toLowerCase())));
            dispatch(filterProducts(filteredProducts))
            dispatch(setOpacity(opacity))
        }else{
            dispatcher()
            dispatch(setOpacity(false))
        }
    }

    function inputHandler(e){
        const value = e.target.value;
        checkEqual(value,true,() => dispatch(filterProducts([])))
        if(!value) dispatch(setOpacity(false))
    }

    function handleSubmit(e){
        e.preventDefault();
        const {search} = e.target;
        // console.log(e.target);
        checkEqual(search.value,false,() => dispatch(resetFilteredProducts()))
    }
    
  return (
    <>
        <main className={styles.shopHeader}>
            <header className={styles.header}>
                <div className={styles.content}>
                    {/* <div className={styles.logoIcon}><GiShoppingBag/></div> */}
                    <div className={styles.logoIcon}>
                        L O G O
                    </div>
                    {/* <div className={styles.search}> */}
                        <form onSubmit={(e)=>handleSubmit(e)} className={styles.search}>
                            <input type="text" name='search' placeholder='Search products' onInput={(e)=> inputHandler(e)}/>
                            <button className={styles.searchIcon}>
                                <FiSearch/>
                            </button>
                        </form>
                    {/* </div> */}
                    {/* cartAndUser */}
                    {
                        currentUser 
                            ?
                            <div className={styles.cartAndUser}>
                                <div onClick={() => setCartModal(true)} className={styles.cartIcon}>
                                    <p className={styles.productCount}>{currentUser.cartProducts.length}</p>
                                    <GiShoppingCart/>
                                    {/* onclicki vaxt modal carti */}
                                </div>
                                <div onClick={() => setLogout(!logout)}>
                                    {/* onclicki vaxt modal pti bacvi vor logout ylni*/}
                                    <img src={currentUser?.avatar} alt="img" className={styles.userImg}/>
                                    {/* stex */}
                                </div>
                            </div>
                            :
                            <div className={styles.offline}>
                                <Link to='/'>Sign In</Link>
                                <Link to='/registration'>Sign Up</Link>
                            </div>
                    }
                    {
                        logout && <UserLogout/>
                    }
                </div>
            </header>
        </main>
        {
            cartModal && <ShopCartModal setCartModal={setCartModal}/>
        }
    </>
  )
}

export default ShopHeader