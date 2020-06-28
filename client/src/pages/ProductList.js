import React from "react";
import { useSelector } from "react-redux";
import { Table } from 'react-bootstrap'
import ProductCard from "../components/ProductCard/ProductCard";

export const ProductList = () => {
    const products = useSelector(store => store.products.products);

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((product, index) => {
                        return <ProductCard
                            key={product._id}
                            product={product}
                            index={index}
                        />
                    })
                }
                </tbody>
            </Table>

        </div>
    )
}
