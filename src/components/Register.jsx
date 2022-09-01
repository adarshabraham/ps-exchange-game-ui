import { Button, Form, Input, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from "react";
import { BASE_URL } from './Constants';


const Register = (props) => {
    const [comments, setComments] = useState([""]);
    const [username, setUsername] = useState([""]);
    const [email, setEmail] = useState([""]);
    const [password, setPassword] = useState([""]);
    const [location, setLocation] = useState([""]);
    const [firstName, setFirstName] = useState([""]);
    const [lastName, setLastName] = useState([""]);
    const [responseMessage, setResponseMessage] = useState("");
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };

    const handleSubmit = e => {
        if (username && email && password && firstName && lastName && location) {
            const registrartionRequestBody = {
                username: username,
                email: email,
                forename: firstName,
                surname: lastName,
                password: password,
                location: location,
                userUUID: "akjsdf"
            }
            fetch(BASE_URL + "/register", {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(registrartionRequestBody)
            })
                .then(response => response.json())
                .then(data => {
                    let msg;
                    console.log(data)
                    if (data.validationErrors.length == 0) {
                        msg = "Successfully Registered";
                        props.history.push("/loggedIn")
                    }
                    else {
                        msg = data.validationErrors.map(a => a + " ").toLocaleString();
                    }

                    setResponseMessage(msg)
                    let updatedComments = comments;
                    updatedComments.push(data)
                    setComments([...comments], registrartionRequestBody);
                })
        }
    }

    return (
        <Row type="flex" justify="center" align="middle" style={{ minHeight: '85vh', minWidth: '100vh' }}>
            <Form
                {...formItemLayout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{ minWidth: '35vh' }}
            >
                <h2 style={{ textAlign: 'center' }}>Create your account.</h2>
                <Form.Item
                    label="Username"
                    name="username"

                    rules={[
                        {
                            required: true,
                            message: 'Enter a username.',
                        },
                    ]}
                >
                    <Input placeholder="Enter a username." onChange={(e) => setUsername(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="Email"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Enter a email.',
                        },
                    ]}
                >
                    <Input placeholder="Enter an email." onChange={(e) => setEmail(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Enter a Password.',
                        },
                    ]}
                >
                    <Input.Password placeholder="Enter a Password." onChange={(e) => setPassword(e.target.value)} />

                </Form.Item>

                <Form.Item
                    label="Forename"
                    name="Forename"
                    rules={[
                        {
                            required: true,
                            message: 'Enter forename.',
                        },
                    ]}
                >
                    <Input placeholder="Enter Forename." onChange={(e) => setFirstName(e.target.value)} />
                </Form.Item>

                <Form.Item
                    label="Surname"
                    name="Surname"
                    rules={[
                        {
                            required: true,
                            message: 'Enter Lastname.',
                        },
                    ]}
                >
                    <Input placeholder="Enter Lastname." onChange={(e) => setLastName(e.target.value)} />
                </Form.Item>



                <Form.Item
                    label="Country"
                    name="Country"
                    rules={[
                        {
                            required: true,
                            message: 'Enter Location.',
                        },
                    ]}
                >
                    <Input placeholder="Enter Location." onChange={(e) => setLocation(e.target.value)} />
                </Form.Item>

                <p style={{ color: 'Red' }}>{responseMessage}</p>
                <div align="center">
                    <Button type="primary" htmlType="submit" onClick={handleSubmit} style={{ minWidth: '20vh' }}>
                        Create Account
                    </Button>
                </div>
            </Form>
        </Row>

    );
};

export default Register;