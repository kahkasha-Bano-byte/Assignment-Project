import React, { useEffect, useState } from 'react';
import './MainLayout.scss';

import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../../redux/products/slice';

import ProductList from '../ProductList/ProductList';
import SizeFilter from '../Filters/SizeFilter';
import CartSidebar from '../CartSidebar/CartSidebar';
import { getCartItems } from '../../redux/cart/selectors';

function MainLayout() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className="main-layout">
    
      <div className="layout-body">
        <aside className="left-section">
          <SizeFilter />
        </aside>

        <main className="middle-section">
          <ProductList />
        </main>

        <aside className={"right-section"}>
          {<CartSidebar />}
        </aside>
      </div>
    </div>
  );
}

export default MainLayout;