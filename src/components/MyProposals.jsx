import {
    StockOutlined
} from '@ant-design/icons';
import { Button, Col, Divider, List, Row } from 'antd';
import 'antd/dist/antd.css';
import React from "react";


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

const MyProposals = () => {

    return (
        <Row type='flex' style={{ minHeight: '85vh' }}>
            <Col flex='auto' style={{ minWidth: '100vh' }}>
                <h2 > &nbsp;My proposals</h2>
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
                                        <Button>Delete</Button>
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

export default MyProposals; 