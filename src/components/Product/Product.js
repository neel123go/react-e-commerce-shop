import React from 'react';
import ProductDetails from '../ProductDetails/ProductDetails';
import './Product.css';

const Product = (props) => {
    const { title, price, category, image } = props.product;
    const { cartCount } = props;
    return (
        <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" className='col-12 col-lg-3 col-md-4 col-sm-6 my-4'>
            <div className="card p-2 h-100">
                <h4>{title.slice(0, 20)}</h4>
                <p>{category}</p>
                <div className="text-center my-2 h-100 d-flex justify-content-center align-items-center">
                    <img className='w-50' src={image} alt="" />
                </div>
                <h4>Price: {price}$</h4>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={cartCount} className='btn m-2 text-light' style={{ backgroundColor: 'rgb(8, 143, 221)' }}>Add Cart</button>
                    <ProductDetails product={props.product}></ProductDetails>
                </div>
            </div>
        </div >
    );
};

export default Product;