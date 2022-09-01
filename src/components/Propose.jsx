import { Icon } from 'antd';
import { Button, Col, Form, Input, Row, TimePicker } from 'antd';
import 'antd/dist/antd.css';
import FormItem from 'antd/es/form/FormItem';
import React, { useState } from "react";
import { BASE_URL } from './Constants';

const Propose = () => {
    const [stockname, setStockname] = useState([""]);
    const [shares, setShares] = useState([0]);
    const [proposeResponse, setProposeResponse] = useState([false]);
    const [time, setTime] = useState([0]);
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

    const onChange = (time, timeString) => {
        console.log(time, timeString);
    };

    const handlePropose = e => {
        if (stockname && shares && time) {
            const proposeRequestBody = {
                stockname: stockname,
                shares: shares,
                time: time
            }
            fetch(BASE_URL + "/propose", {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(proposeRequestBody)
            })
                .then(response => response.json())
                .then(data => {
                    if(data.status == "s"){
                        setProposeResponse(true)
                        
                    }
                })
        }
    }
    return (
        <Row type='flex' justify="center" align="middle" style={{ minHeight: '85vh' }}>
            <Col align="middle" >
                <Form
                    {...formItemLayout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{ minWidth: '40vh' }}

                >
                    <Form.Item
                        label="Stock"
                        name="stock"

                        rules={[
                            {
                                required: true,
                                message: 'Enter stock symbol.',
                            },
                        ]}
                    >
                        <Input placeholder="Enter stock symbol" onChange={(e) => setStockname(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Shares"
                        name="share"

                        rules={[
                            {
                                required: true,
                                message: 'Enter the number of shares.',
                            },
                        ]}
                    >
                        <Input placeholder="Enter the number of shares" onChange={(e) => setShares(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Time Limit (Min)"
                        name="time"

                        rules={[
                            {
                                required: true,
                                message: 'Enter the time limit.',
                            },
                        ]}
                    >
                        <Input placeholder="Enter the time limit" onChange={(e) => setTime(e.target.value)} />
                    </Form.Item>
                    <div align="right">
                        <Button type="primary" htmlType="submit" align="right" style={{ minWidth: '27vh' }} onClick={handlePropose}>
                            Propose
                        </Button>

                        
                    </div>
                    <div align="right">
                       
                    {proposeResponse == true && <p style={{ color: 'Green' }}> Success &#10004;</p> }
                    </div>
                </Form>
            </Col>
        </Row>


    );
}

export default Propose; 