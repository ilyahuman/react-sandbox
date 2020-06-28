import React from "react";
import { Card } from 'react-bootstrap';

export const ProductDetailComponent = ({product}) => {
    debugger
    const {name, image, price} = product;

    return (
        <Card style={{ width: '24rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {price}
                </Card.Text>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}