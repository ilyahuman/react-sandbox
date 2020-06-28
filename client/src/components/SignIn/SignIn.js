import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { asyncSignIn } from '../../store'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loading = useSelector(store => store.user.loading);

    const dispatch = useDispatch();

    const onSubmit = async (event) => {
        event.preventDefault();
        dispatch(asyncSignIn({email, password}))
    }

    return (
        <div className='sign-in'>
            {
                loading ? 'Loading...' : ''
            }
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default SignIn;
