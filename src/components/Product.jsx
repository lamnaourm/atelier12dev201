import React from 'react'
import styles from './product.module.css'

export default function Product({produit, handleClick}) {
  return (
    <div className={styles.produit}>
        <img src={produit.images[0]} alt={produit.titre} />
        <h1>{produit.title}</h1>
        <p>{produit.description}</p>
        <h4>Prix : {produit.price}</h4>
        <button onClick={() => handleClick(produit)}>Ajouter au panier</button>
    </div>
  )
}
