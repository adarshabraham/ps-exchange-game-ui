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

const SellStock = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [shares, setShares] = useState([0]);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        if (shares) {
            const sellRequestBody = {
                shares: shares
            }
            fetch(BASE_URL+"/sell", {
                method: 'POST',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(sellRequestBody)
            })
                .then(response => response.json())
                .then(data => {
                })
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <Row type='flex' style={{ minHeight: '85vh' }}>
            <Col flex='auto' style={{ minWidth: '100vh' }}>
                <h2 > &nbsp;My Stocks</h2>
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
                                        <>
                                            <Button type="primary" onClick={showModal}>
                                                Sell
                                            </Button>
                                            <Modal title="Sell stock" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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

                                                </Form>
                                            </Modal>
                                        </>
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

export default SellStock; 