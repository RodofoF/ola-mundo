import React from 'react'
import styles from './MenuLink.module.css'
import { NavLink } from 'react-router-dom'

export default function MenuLink({children, to}) {
  return (
    // <NavLink className={
    //     `${styles.link}
    //      ${localizacao.pathname === to ? styles.linkDestacado : ""}
    // `} to={to}>
    //     {children}
    // </NavLink>
    <NavLink 
        to={to}
        className={({isActive, isPending}) => (
            isActive ? styles.linkDestacado : isPending ? styles.link : ""
    )}> {children}

    </NavLink>
  )
}
