import React from 'react'
import stylles from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={stylles.footer}>
            <div className="container">
                <div className={stylles.footer__inner}>
                    footer
                </div>
            </div>
        </footer>
    )
}
