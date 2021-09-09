import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../../components/Layout'
import { Input } from './../../components/UI/Input/index';
import { signup } from './../../actions/user.actions';

/**
* @author
* @function SignUp
**/

export const SignUp = (props) => {

    const auth = useSelector(state => state.auth);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state=> state.user);

    const userSignup = (e) => {

        e.preventDefault();

        const user = {
            firstName, lastName, email, password
        }
        dispatch(signup(user));
    }

    if(auth.authenticate){
        return <Redirect to={"/"} />
    }

    if(user.loading){
        return <p>Loading...</p>
    }


    return (
        <Layout>
            <Container>
                {user.message}
                <Row style={{ marginTop: "50px" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userSignup}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value={firstName}
                                        type="text"
                                        onChange={(e) => {setFirstName(e.target.value)}}
                                    ></Input>
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value={lastName}
                                        type="text"
                                        onChange={(e) => { setLastName(e.target.value) }}
                                    ></Input>
                                </Col>
                            </Row>
                            <Input
                                label="Email"
                                placeholder="Email"
                                value={email}
                                type="email"
                                onChange={(e) => { setEmail(e.target.value) }}
                            ></Input>
                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type="password"
                                onChange={(e) => {setPassword(e.target.value) }}
                            ></Input>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </Layout>
    )

}