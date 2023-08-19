import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Registration from "../../pages/Registration/Registration";
import AdminPage from '../../pages/AdminPage/AdminPage'
import Login from "../../pages/Login/Login";
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/slices/users/usersSlice';
import Layout from '../../pages/Layout/Layout';
import AdminPageProducts from '../AdminPageProducts/AdminPageProducts';
import Shop from '../../pages/Shop/Shop';
import BlockedPage from '../BlockedPage/BlockedPage';
import Settings from '../Other/Settings/Settings';
import Contacts from '../Other/Contacts/Contacts';
import Charts from '../Other/Charts/Charts';
import NotFound from '../Other/NotFound/NotFound';

const AppRouter = () => {
    const {isAdmin} = useSelector(selectUsers)
    return (
        <div>
            <Routes>
                <Route path={'/shop-react-redux'} element={<Shop/>}/>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'/registration'} element={<Registration/>}/>
                {
                    isAdmin 
                    && 
                    <Route path={'/adminPage/'} element={<Layout/>}>
                        <Route index element={<AdminPage/>}/>
                        <Route path={'products'} element={<AdminPageProducts/>}/>
                        <Route path={'settings'} element={<Settings/>}/>
                        <Route path={'contacts'} element={<Contacts/>}/>
                        <Route path={'charts'} element={<Charts/>}/>
                    </Route>
                }
                <Route path={'/blockedPage'} element={<BlockedPage/>}/>
                <Route path={'/*'} element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;