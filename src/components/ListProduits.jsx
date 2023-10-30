import React, { Component } from 'react'
import axios from 'axios'

export default class ListProduits extends Component {

    state = {
        categories: [],
        categorie: 0
    }

    render() {
        return (
            <div>
                <select name="categorie" id="categorie" value={this.state.categorie} onChange={(e) => this.setState({ categorie: e.target.value })}>
                    <option value="0">Tous les produits</option>
                    {
                        this.state.categories.map(c =>
                            <option key={c.id} value={c.id}>{c.name}</option>
                    )}
                </select>
            </div>
        )
    }

    componentDidMount() {
        const getData = async () => {
            const res = await axios.get("https://api.escuelajs.co/api/v1/categories")
            return res.data;
        }
        getData().then(cats => this.setState({ categories: cats }));
    }
}
