import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { Input } from './../../components/UI/Input/index';

/**
* @author
* @function SignUp
**/

export const SignUp = (props) => {
    return (
        <Layout>
            <Container>
                <Row style={{ marginTop: "50px" }}>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value=""
                                        type="text"
                                        onChange={() => { }}
                                    ></Input>
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value=""
                                        type="text"
                                        onChange={() => { }}
                                    ></Input>
                                </Col>
                            </Row>
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