import React,{ useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const { setUser } = useContext(UserContext);
    const userObj = {
        id: 1,
        name: 'richter'
    } 

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className='btn btn-primary'
                onClick={ ()=> setUser(userObj) }
            >
                Crear User
            </button>
        </div>
    )
}
