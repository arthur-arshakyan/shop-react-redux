import React, {useRef} from 'react'
import styles from './Form.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isAuthAdmin, logIn, selectUsers } from '../../../../store/slices/users/usersSlice'

const Form = () => {
  const dispatch = useDispatch()
  const {usersData, blockedUsers} = useSelector(selectUsers)
  const loginRef = useRef()
  const navigate = useNavigate()

  const handlerSubmit = (event) => {
    event.preventDefault()
    const [{value:login},{value:password}] = loginRef.current;

    const findUser = usersData.find(user => (user.login === login || user.email === login) && user.password === password)
    const findAdmin = usersData.find(user => (user.login === login || user.email === login) && user.password === password && user.admin)

    if(blockedUsers.find(user=> user.id === findUser.id)){
      navigate("/blockedPage", {replace:true})
      return
    }

    if(findAdmin){
      dispatch(logIn(findAdmin))
      dispatch(isAuthAdmin())
      navigate("/adminPage", {replace: true})
      return
    }

    if(findUser){
      dispatch(logIn(findUser))
      navigate("/homePage", { replace: true })
    }

    if(!findAdmin && !findUser){
      alert('Your password is incorrect or this account does not exist.')
    }
  }
  

  return (
    <div className={styles.form}>
        <h2>Login Here</h2>
        <form onSubmit={handlerSubmit} ref={loginRef}>
            <input type="text" name='login' placeholder="Enter Email or Login"/>
            <input type="password" name='password' placeholder="Enter Password"/>
            <button>Login</button>
        </form>
        <p>Don't have an account ?<br/>
          <Link to='/registration'>Sign Up Here</Link>
        </p>
    </div>
  )
}

export default Form