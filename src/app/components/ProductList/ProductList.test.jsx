import { describe, it, expect } from "vitest";
import { render, screen, fireevent } from '@testing-library/react';
import ProductList from './ProductList.jsx'
const mockProduct = [
    {
        id: 1,
        sku: 683749379,

    },
    {
        id: 1,
        sku: 764868282
    }
]


describe("product listing "){
    it('it should be give correct number of products', () => {
        render(<ProductList />)
    })
}
