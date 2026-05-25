import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.scss';

import { selectProducts } from '../../redux/products/selectors';
import { setSortBy } from '../../redux/products/slice';
import ProductCard from '../ProductCard/ProductCard';
const order = ["Select", "Low to High", "High to Low"]
function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    return (
        <div>
            <div className="product-list-header">

                <h2>{products.length} Products</h2>
                <div className="price-sort">
                    <h3>Order By:  </h3>

                    <select
                        onChange={(e) =>
                            dispatch(setSortBy(e.target.value))
                        }
                    >
                        {order.map(e => (
                            <option key={e}>{e}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductList;