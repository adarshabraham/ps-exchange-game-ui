import { Button, Col, Form, Input, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from "react";
import { BASE_URL } from './Constants';


const BuyStock = () => {
    const [stockname, setStockname] = useState([""]);
    const [shares, setShares] = useState([""]);
    const [proposeResponse, setProposeResponse] = useState([false]);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };



    const handleBuyStock = e => {
        if (stockname && shares) {
            const proposeRequestBody = {
                stockname: stockname,
                shares: shares
            }
            fetch(BASE_URL+"/buy", {
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

    return (
        <Row type='flex' justify="center" align="middle" style={{ minHeight: '85vh' }}>
            <Col align="middle">
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
                    <Form.Item
                        label="Stock Symbol"
                        name="stock"

                        rules={[
                            {
                                required: true,
                                message: 'Enter a stock symbol.',
                            },
                        ]}
                    >
                        <Input placeholder="Enter a stock symbol." onChange={(e) => setStockname(e.target.value)} />
                    </Form.Item>
                    <Form.Item
                        label="Shares"
                        name="share"

                        rules={[
                            {
                                required: true,
                                message: 'Enter number of shares.',
                            },
                        ]}
                    >
                        <Input placeholder="Enter number of shares." onChange={(e) => setShares(e.target.value)} />
                    </Form.Item>
                    <div align="right">
                        <Button type="primary" htmlType="submit" align="right" style={{ minWidth: '23vh' }} onClick={handleBuyStock}>
                            Buy
                        </Button>
                    </div>
                    <div align="right">
                       
                       {proposeResponse == true && <b style={{ color: 'Green' }}> Success &#10004;</b> }
                       </div>
                    <div align="right">
                    <a href='https://finance.yahoo.com/chart/LIVE/ ' target="_blank" align="right">Live stock prices.</a>
                    </div>
                </Form>

            </Col>
        </Row>

    );
}

export default BuyStock; 