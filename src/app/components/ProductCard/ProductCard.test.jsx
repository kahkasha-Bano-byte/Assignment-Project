import React from 'react';
import {
    render,
    screen,
    fireEvent
} from '@testing-library/react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../../redux/cart/slice';
import ProductCard from './ProductCard';

const mockProduct = {
    id: 1,
    sku: 100,
    title: 'Test Product',
    price: 30,
    isFreeShipping: true,
};



describe('ProductCard', () => {

    it('render product card' ,()=>{
        render(<ProductCard  product={mockProduct}/>)
        screen.data-testid{}
    })
    it('renders product title', () => {
    render(<ProductCard  product={mockProduct}/>)
        
        expect(
            screen.getByText(
                'Test Product'
            )
        ).toBeInTheDocument();
    });

    it('renders product price', () => {

        render(<ProductCard  product={mockProduct}/>)

        expect(
            screen.getByText('$ 30')
        ).toBeInTheDocument();
    });

    it('renders free shipping tag', () => {

        render(<ProductCard  product={mockProduct}/>)

        expect(
            screen.getByText(
                'Free Shipping'
            )
        ).toBeInTheDocument();
    });

    it('adds product to cart on first click', () => {

        render(<ProductCard  product={mockProduct}/>)

        fireEvent.click(
            screen.getByRole(
                'button',
                { name: /Add To Cart/i }
            )
        );

        expect(
            store.getState()
                .cart
                .cartItems[0]
                .quantity
        ).toBe(1);
    });

    it('shows Added button after adding item', () => {

        render(<ProductCard  product={mockProduct}/>)

        fireEvent.click(
            screen.getByRole(
                'button',
                { name: /Add To Cart/i }
            )
        );

        expect(
            screen.getByRole(
                'button',
                { name: /Added/i }
            )
        ).toBeInTheDocument();
    });

    it('increments quantity on second click', () => {

        render(<ProductCard  product={mockProduct}/>)
        const button =
            screen.getByRole(
                'button',
                { name: /Add To Cart/i }
            );

        fireEvent.click(button);
        fireEvent.click(button);

        expect(
            store.getState()
                .cart
                .cartItems[0]
                .quantity
        ).toBe(2);
    });

});