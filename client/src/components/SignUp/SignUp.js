import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(name, email, password);

        const request = await fetch('/user/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        const data = await request.json();
        console.log(data)
    }

    return (
        <div className='sign-up'>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name" />
                </Form.Group>

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

export default SignUp;
