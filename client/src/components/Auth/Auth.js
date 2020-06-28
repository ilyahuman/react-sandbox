import React, {useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SignIn from "../SignIn/SignIn";
import SignUp from '../SignUp/SignUp'
import { Button } from "react-bootstrap";
import './login.css';
import {useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const isSignedIn = useSelector(state => state.user.isSignedIn);

    const renderRedirect = () => {
        if (isSignedIn) {
            return <Redirect to='/' />
        }
    }

    return (
        <div className="authorization">
            {renderRedirect()}
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={6}>
                        {isLogin ? <SignIn /> : <SignUp />}
                        <Button style={{
                            'marginTop': '15px'
                        }} variant="outline-info" size="sm" onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? 'Sign up' : 'Sign in'}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Auth;
