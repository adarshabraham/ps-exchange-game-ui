import {
    StockOutlined
} from '@ant-design/icons';
import { Button, Col, Divider, Form, Input, List, Modal, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from "react";
import { BASE_URL } from './Constants';


const data = [
    {
        title: 'GOOG',
        shares: '4',
        price: '56'
    },
    {
        title: 'META',
        shares: '29',
        price: '166'
    }
];

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
const AllProposals = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [stockname, setStockname] = useState([""]);
    const [shares, setShares] = useState([0]);
    const [time, setTime] = useState([0]);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        if (stockname && shares && time) {
            const makeOfferRequestBody = {
                stockname: stockname,
                shares: shares,
                time: time
            }
            fetch(BASE_URL + "/make_offer", {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(makeOfferRequestBody)
            })
                .then(response => response.json())
                .then(data => {
                    // let msg;
                    // console.log(data)
                    // if (data.validationErrors.length == 0) {
                    //     msg = "Successfully Registered";
                    //     props.history.push("/loggedIn")
                    // }
                    // else {
                    //     msg = data.validationErrors.map(a => a + " ").toLocaleString();
                    // }
                })
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Row type='flex' style={{ minHeight: '85vh' }}>
            <Col flex='auto' style={{ minWidth: '100vh' }}>
                <h2 > &nbsp;Available proposals</h2>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item >
                            <List.Item.Meta
                                avatar={<StockOutlined />}
                                title={<p>{item.title}</p>}
                                description={
                                    <div>
                                        <p>Shares: {item.shares} &nbsp;&nbsp; <a>Stock Data</a></p>
                                        <Button onClick={showModal}>Make an offer</Button>
                                        <Modal title="Offer stock" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                            <Form
                                                {...formItemLayout}
                                                name="basic"
                                                initialValues={{
                                                    remember: true,
                                                }}
                                                autoComplete="off"
                                                style={{ minWidth: '35vh' }}

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
                                                    label="Time Limit (MM)"
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

                                            </Form>
                                        </Modal>
                                        <Divider></Divider>
                                    </div>

                                }
                            />

                        </List.Item>

                    )}

                />
            </Col>
        </Row>

    );
}

export default AllProposals; 