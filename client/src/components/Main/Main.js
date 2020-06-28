import React, {useEffect} from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { asyncGetUser } from '../../store/actions/asyncUser'
import { getProducts } from '../../store/actions/asyncProducts'
import { useDispatch, useSelector } from "react-redux";
import UserDashboard from '../UserDashboard/user-dashboard'
import { Container } from "react-bootstrap";
import { ProductList } from '../../pages/ProductList'
import { ProductDetail } from "../../pages/ProductDetail";

const Main = () => {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.username);

    useEffect(() => {
        dispatch(asyncGetUser());
        dispatch(getProducts());
    }, []);

    if (!user) {
        return <h2>Loading...</h2>
    }

    return (
        <Container>
            <div className='main-container' style={{
                'margin': '20px 0'
            }}>
                <UserDashboard />

                <ul>
                    <li><Link to='/'>Products</Link></li>
                    <li><Link to='/search'>Search</Link></li>
                </ul>

                <Switch>
                    <Route exact path='/' component={ProductList} />
                    <Route exact path='/search' component={Search} />
                    <Route path="/product/:id" component={ProductDetail} />
                </Switch>
            </div>
        </Container>
    )
}

const Search = () => {
    return <div>Search</div>
}

export default Main;
