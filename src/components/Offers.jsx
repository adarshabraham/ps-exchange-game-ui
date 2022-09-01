import { Avatar, Button, Col, Divider, List, Row } from 'antd';
import 'antd/dist/antd.css';
import { default as React } from "react";
import { BASE_URL } from './Constants';

const data = [
    {
        title: 'Offer 1',
        stockSymbol: 'Tesla',
        shares: '4'
    },
    {
        title: 'Offer 2',
        stockstockSymbolName: 'Google',
        shares: '4'
    }
];

const Offers = (props) => {
    var action = ''
    const handleOfferAction = e => {
        console.log(action)
        const offerActionRequestBody = {
            action: action
        }
        fetch(BASE_URL + "/offer_action", {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(offerActionRequestBody)
        })
            .then(response => response.json())
            .then(data => {
            })

    }

    return (
        <Row type='flex' style={{ minHeight: '85vh' }}>
            <Col flex='auto' align="left">
                <List
                    itemLayout="horizontal"
                    dataSource={props.offersResponseBody}
                    renderItem={(offers) => (

                        <List.Item >
                            <List.Item.Meta
                                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                title={<p>Offer</p>}
                                description={
                                    <div>
                                        <p><b>Proposal</b></p>
                                        <p>User: {offers.user}</p>

                                        <p>Stock Symbol: {offers.stocksymbol}&nbsp;&nbsp; Name: {offers.stockname}&nbsp;&nbsp; Shares: {offers.shares}&nbsp;&nbsp;
                                            Exchange: {offers.exchange}&nbsp;&nbsp; Market: {offers.market} &nbsp;&nbsp; Currency: {offers.currency}&nbsp;&nbsp; Time: {offers.time}
                                        </p>
                                        <br></br>
                                        <p><b>Offer</b></p>
                                        <p>User: {offers.puser}</p>

                                        <p>Stock Symbol: {offers.pstocksymbol}&nbsp;&nbsp; Name: {offers.pstockname}&nbsp;&nbsp; Shares: {offers.pshares}&nbsp;&nbsp;
                                            Exchange: {offers.pexchange}&nbsp;&nbsp; Market: {offers.pmarket} &nbsp;&nbsp; Currency: {offers.pcurrency}&nbsp;&nbsp; Time: {offers.ptime}
                                        </p>
                                        <Button onClick={(e) => {
                                            action = 'accept'
                                            handleOfferAction()
                                        }}>Accept</Button>&nbsp;&nbsp;
                                        <Button onClick={(e) => {
                                            action = 'decline'
                                            handleOfferAction()
                                        }}>Decline</Button>
                                        <Divider></Divider>
                                    </div>
                                }
                            />
                        </List.Item>

                    )}
                />
            </Col>
        </Row>

    )

}

export default Offers; 