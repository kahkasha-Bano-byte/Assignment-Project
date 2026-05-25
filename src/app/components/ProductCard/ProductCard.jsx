import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductCard.scss';

import { addToCart } from '../../redux/cart/slice';


function ProductCard({ product }) {
    const imageUrl = `/assets/images/${product.sku}.jpg`;


    const dispatch = useDispatch();

    const cartItems = useSelector(
        state => state.cart.cartItems
    );

    const isAdded = cartItems.some(
        item => item.id === product.id
    );

    return (
        <div className="product-card" data-testid = "product card">

            <div className="product-image">

                <img
                    src={imageUrl}
                    alt={product.title}
                />
                {product.isFreeShipping && (
                    <span className="shipping-tag">
                        Free Shipping
                    </span>
                )}

            </div>

            <h3>
                {product.title}
            </h3>

            <p className="product-price">
                $ {product.price}
            </p>

            <hr />

            <button
                className={isAdded ? 'added-btn' : ''}

                onClick={() => {
                    dispatch(addToCart({
                        ...product,
                        image: imageUrl
                    }));
                }}
                
            >
                {isAdded ? 'Add' : 'Add To Cart'}
            </button>

        </div>
    );
}

export default ProductCard;