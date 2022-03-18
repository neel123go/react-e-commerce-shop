import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({ cartCount }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <h2 className='mt-5'>All Products</h2>
            <div className="container overflow-hidden">
                <div className="row gx-5">
                    {
                        products.map(product => <Product cartCount={cartCount} product={product} key={product.id}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;