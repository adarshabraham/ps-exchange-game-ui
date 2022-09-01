import {
    EditOutlined
} from '@ant-design/icons';
import { Button, Card, Row } from 'antd';
import 'antd/dist/antd.css';
import React from "react";
import { BASE_URL } from './Constants';


const data = [
    {
        title: 'GOOGL',
        shares: '4',
        price: '56'
    },
    {
        title: 'TESLA',
        shares: '29',
        price: '166'
    }
];

const MyInfo = () => {
    
    const handleMyInfo = e => {
        fetch(BASE_URL+"/myinfo", {
            method: 'GET',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
        })
            .then(response => response.json())
            .then(data => {
    
    
            })
    
    }
    return (
        <Row type='flex' justify="center" align="middle" style={{ minHeight: '85vh' }}>
            <div className="site-card-border-less-wrapper">
                <Card
                    title="My Information"
                    bordered={false}
                    style={{
                        width: 500,
                        height: 290,

                    }}
                >
                    <p>Name :   Alice Thomas<EditOutlined /></p>
                    <p>Email : alice@r3.com<EditOutlined /></p>
                    <p>Location : United Kingdom<EditOutlined /></p>
                    <Button onClick={handleMyInfo}>Ok</Button>
                    <br></br>
                    <br></br>

                    <Button onClick={handleMyInfo}>Logout</Button>
                </Card>
            </div>
        </Row>

    );
}

export default MyInfo;  