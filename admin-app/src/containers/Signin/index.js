import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { Input } from './../../components/UI/Input/index';

/**
* @author
* @function SignIn
**/

export const SignIn = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: "50px" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
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