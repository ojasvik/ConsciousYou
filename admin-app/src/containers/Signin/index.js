import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Input } from './../../components/UI/Input/index';
import { login } from '../../actions';
import { useDispatch } from 'react-redux';

/**
* @author
* @function SignIn
**/


export const SignIn = (props) => {

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user = {
           email: 'ok@gmail.com', 
           password: 'hellokitty'
        };

        dispatch(login(user));
    }


    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: "50px" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email"
                                placeholder="Email"
                                value=""
                                type="email"
                                onChange={() => { }}
                            ></Input>
                            <Input
                                label="Password"
                                placeholder="Password"
                                value=""
                                type="password"
                                onChange={() => { }}
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