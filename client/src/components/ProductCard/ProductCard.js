import React from "react";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const nameStyles = {
    'display': 'flex'
}

const ProductCard = ({product, index}) => {
    const {name, image, price, _id} = product;

    return (
        <tr>
            <td>{index}</td>
            <td>
                <div style={nameStyles}>
                    <img width='60px' src={image} alt=""/>
                    <p>{name}</p>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>
                <Link to={`/product/${_id}`}>Click</Link>
            </td>
        </tr>
    )
}

export default ProductCard;