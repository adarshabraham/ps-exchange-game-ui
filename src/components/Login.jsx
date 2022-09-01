import { Button, Form, Input, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { BASE_URL } from './Constants';


const Login = (props) => {
  const [username, setUsername] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [comments, setComments] = useState([""]);
  const [responseMessage, setResponseMessage] = useState("");

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleLogin = () => {
    if (username && password) {
      const registrartionRequestBody = {
        username: username,
        password: password,
      }
      fetch(BASE_URL+"/login", {
        method: 'POST',
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(registrartionRequestBody)
      })
        .then(response => response.json())
        .then(data => {
          setResponseMessage(data.message)
          if(data.loginStatus == 'Successful'){
            props.history.push("/loggedIn")
          }
          
          let updatedComments = comments;
          updatedComments.push(data)
          setComments([...comments], registrartionRequestBody);

        })
    }
  }


  return (
    <div>
      <Row type="flex" justify="center" align="middle" style={{ minHeight: '85vh', minWidth: '100vh', borderBlockColor: 'black' }}>
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2 style={{ textAlign: 'center' }}>Welcome</h2>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input
              placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password
              placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Button type="primary" htmlType="submit" onClick={handleLogin} block>
            Login
          </Button>

         <div style={{ textAlign: 'right' }}>
         <Link to='/register' > Forgot password?</Link>
         </div>

         {<p style={{ color: 'Red', textAlign: 'center' }}>{responseMessage}</p>}
         <div style={{ textAlign: 'center' }}>
         <u><h3><Link to='/register' style={{ textAlign: 'center', color:'#001529' }}>Sign Up!</Link></h3></u>
         </div> 
        </Form>

      </Row>
    </div>
  ); 
};

export default Login;