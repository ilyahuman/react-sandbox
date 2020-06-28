import { getAllProducts } from "./products";

export const getProducts = () => async dispatch => {
    try {
        const response = await fetch('/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        });

        const data = await response.json();

        if (data) {
            dispatch(getAllProducts(data));
        }
    } catch (e) {
        console.log(e)
    }
}