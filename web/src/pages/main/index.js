import React, {Component}  from 'react';
import api from '../../services/api';  

import './styles.css';


export default class extends Component {
    state = {
        products: []
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState( {products: response.data.docs});
    }

    render() {
        return(
        <div className="product-list">
            {this.state.products.map(product => (
                <article key={product._id}>
                    <strong>{product.code}</strong>
                    <p>{product.description}</p>
                    <p>{product.height}</p>
                    <p>{product.width}</p>
                    <p>{product.depth}</p>

                </article>
            ))}
        </div>
        );
    }

    
}