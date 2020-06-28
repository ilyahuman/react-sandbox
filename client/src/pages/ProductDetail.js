import React from "react";
import {useSelector} from "react-redux";
import { useParams } from 'react-router-dom'
import { ProductDetailComponent } from '../components/ProductDetailComponent/ProductDetailComponent'

export const ProductDetail = () => {
    debugger
    let { id } = useParams();
    const product = useSelector(store => store.products.products.find(item => item._id === id));

    if (!product) return 'Loading...';

    return (
        <ProductDetailComponent product={product} />
    )
}