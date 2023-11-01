import React from 'react'
import styles from './header.module.css'

export default function Header({panier}) {
  return (
    <div className={styles.header}>
        ISMO SHOP
        <div>
            Nombre articles : {panier.length} -    
            Montant Total : {panier.reduce((som,p) => som+p.price, 0)}    
        </div>
    </div>

  )
}
