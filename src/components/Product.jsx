import React from 'react'
import styles from './product.module.css'

export default function Product({image, titre, description, prix}) {
  return (
    <div className={styles.produit}>
        <img src={image} alt={titre} />
        <h1>{titre}</h1>
        <p>{description}</p>
        <h4>Prix : {prix}</h4>
        <button>Ajouter au panier</button>
    </div>
  )
}
