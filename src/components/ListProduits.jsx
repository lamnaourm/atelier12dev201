import React, { Component } from 'react'
import axios from 'axios'
import styles from './listproduits.module.css'
import Product from './Product'
import Header from './Header'

export default class ListProduits extends Component {

    state = {
        categories: [],
        categorie: -1,
        produits: [],
        panier:[]
    }

    addPanier = (produit) => {
        this.setState({panier: [...this.state.panier, produit]})
    }

    render() {
        return (
            <div className={styles.list}>
                <Header panier={this.state.panier}/>
                <select className={styles.listcat} name="categorie" id="categorie" value={this.state.categorie} onChange={(e) => this.setState({ categorie: e.target.value })}>
                    <option value="0">Tous les produits</option>
                    {
                        this.state.categories.map(c =>
                            <option key={c.id} value={c.id}>{c.name}</option>
                        )}
                </select>

                <div className={styles.products}>
                    {
                        this.state.produits.map(p =>
                            <Product key={p.id} produit={p} handleClick={this.addPanier} />
                        )
                    }
                </div>

            </div>
        )
    }

    componentDidMount() {
        const getData = async () => {
            const res = await axios.get("https://api.escuelajs.co/api/v1/categories")
            return res.data;
        }
        getData().then(cats => this.setState({ categories: cats, categorie: 0 }));
    }

    componentDidUpdate(prevprops, prevstate) {
        if (this.state.categorie != prevstate.categorie) {
            const getData = async () => {
                let res;
                if (this.state.categorie == 0)
                    res = await axios.get("https://api.escuelajs.co/api/v1/products")
                else
                    res = await axios.get(`https://api.escuelajs.co/api/v1/categories/${this.state.categorie}/products`)

                return res.data;
            }
            getData().then(produits => this.setState({ produits: produits }));
        }
    }
}
