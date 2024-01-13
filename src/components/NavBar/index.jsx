import React from 'react'
import stylle from './NavBar.module.scss'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <header className={stylle.header}>
            <div className="container">
                <div className={stylle.header__inner}>
                    <div className="logo">Logo</div>
                    <nav>
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/login'>Login</NavLink></li>
                            <li><NavLink to='/todo' >Todo</NavLink></li>
                        </ul>
                    </nav>
                    <div>
                        <button>sign up</button>
                        <button>register</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
