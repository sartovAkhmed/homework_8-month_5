import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginQuery } from '../store/loginSlice'

export const Login = () => {
    const [userName, setUserName] = useState('kminchelle')
    const [userPassword, setUserPassword] = useState('0lelplR')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const hundlerSubmit = (e) => {
        e.preventDefault()
        dispatch(loginQuery({userName, userPassword}))
        navigate('/todo')
    }

    return (
        <form onSubmit={hundlerSubmit}>
            <div className="container">
                <div className="login__form__inner">
                    <input type="text" value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                    <input type="text" value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
    )
}
