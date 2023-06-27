import { useDispatch } from 'react-redux';
import './App.css';
import {useEffect} from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import { fetchAllBlockedUsers, fetchAllUsers } from './store/slices/users/userAPI';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchAllUsers())
    dispatch(fetchAllBlockedUsers())
  }, [])
  
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
