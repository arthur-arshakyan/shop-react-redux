import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../store/slices/users/usersSlice";
import {fetchAllUsers, fetchPostAddUser} from "../../store/slices/users/userAPI";
import styles from './Registration.module.css'
import { Link, useNavigate } from 'react-router-dom';
import {generatorId} from "../../helpers/generatorId";

const Registration = () => {
    const dispatch = useDispatch()
    const {usersData} = useSelector(selectUsers)
    const [ava, setAva] = useState('')
    const navigate = useNavigate()

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
            lastname,
            login,
            email,
            password,
            confPassword
        } = event.target

        if(usersData.find(user=> user?.login === login.value || user?.email === email.value)){
            return alert('Already exists')
         }
         if(password.value !== confPassword.value){
           return alert("Passwords do NOT match")
         }
         if(password.value.length < 8){
            return alert('Password must contain at least 8 characters')
         }

        let data = {
            id: generatorId(usersData),
            firstname: firstname.value,
            lastname: lastname.value,
            login: login.value,
            email: email.value,
            password: password.value,
            avatar: ava,
            cartProducts: []
        }
        dispatch(fetchPostAddUser(data))
        navigate('/')
    }

    return (
            <div className={styles.body}>
                <main>
                    <div className={styles.signUp}>
                        <h1>Sign Up</h1>
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <input type="text" name='firstname' placeholder={'Firstname'}/>
                            <input type="text" name='lastname' placeholder={'Lastname'}/>
                            <input type="text" name='login' placeholder={'Login'}/>
                            <input type="email" name='email' placeholder={'Email'}/>
                            <input type="password" name='password' placeholder={'Password'}/>
                            <input type="password" name='confPassword' placeholder={'Confirm password'}/>
                            <input type="file" name='file' accept='image/*' onChange={(event)=> setFile(event)} placeholder={'Avatar'}/>
                            <button>Register</button>
                            <p>Have an account? <Link to='/'>Log in</Link></p>
                        </form>
                    </div>
                </main>
            </div>
    );
};

export default Registration;