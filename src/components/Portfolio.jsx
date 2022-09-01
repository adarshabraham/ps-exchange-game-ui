import { Card, Row } from 'antd';
import 'antd/dist/antd.css';
import React from "react";


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

const MyPortfolio = () => {
    return (
        <Row type='flex' justify="center" align="middle" style={{ minHeight: '85vh' }} >
            <div className="site-card-border-less-wrapper">
                <Card
                    title="My Portfolio"
                    bordered={false}
                    style={{
                        width: 400,
                        height: 500
                    }}
                >



                    <Card
                    title="Stock Tokens"
                    bordered={false}
                    style={{
                        width: 200,
                        height: 50
                    }}
                >
                    <p>Stock Symbol: META
                       Shares: 100 </p>
                    <p>Stock Symbol: GOOG
                       Shares: 70 </p>
                </Card>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Card
                    title="Coins"
                    bordered={false}
                    style={{
                        width: 200,
                        height: 50
                    }}
                >
                    <p>Currency : GBP 
                        <br></br>
                        Amount: 70
                    </p>
                    <p>Currency : USD
                    <br></br>
                        Amount: 99
                    </p>
                </Card>

                </Card>
            </div>
        </Row>

    );
}

export default MyPortfolio; 