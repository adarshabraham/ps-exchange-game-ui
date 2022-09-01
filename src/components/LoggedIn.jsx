import { Col, Menu, Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import AllProposals from './AllProposals';
import BuyStock from './BuyStock';
import { BASE_URL, datas } from './Constants';
import MyInfo from './Myinfo';
import MyProposals from './MyProposals';
import Offers from './Offers';
import MyPortfolio from './Portfolio';
import Propose from './Propose';
import SellStock from './SellStock';


function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [

    getItem('Propose', '1'),
    getItem('Received Offers', '2'),
    getItem('Buy Stock', '3'),
    getItem('Sell Stock', '4'),
    getItem('My Proposals', '5'),
    getItem('Available Proposals', '6'),
    getItem('Portfolio', '7'),
    getItem('MyInfo', '8'),


];

var offersResponseBody = ''  

const LoggedIn = () => {

    const handleOffers = e => {
            fetch(BASE_URL+"/offers", {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
            })
                .then(response => response.json())
                .then(data => {
                        offersResponseBody=data
                })
    }

    const handleMyProposals = e => {
            fetch(BASE_URL+"/myproposals", {
                method: 'GET',
                headers: new Headers({
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }),
            })
                .then(response => response.json())
                .then(data => {
                    offersResponseBody=data

                })
        
    }

    
    const handlePortfolio = e => {
        fetch(BASE_URL+"/portfolio", {
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


    let history = useHistory();
    const [option, setOption] = useState([1]);
    const dsiplayMenuDetails = () => {
        let output = null;
        if (option == 1) {
            output = <Propose />
        }
        else if (option == 2) {
            
            handleOffers();
            console.log('wwwww'+offersResponseBody)
            output = <Offers offersResponseBody={offersResponseBody}/>
        }
        else if (option == 3) {
            output = <BuyStock />
        }
        else if (option == 4) {
            output = <SellStock />
        }
        else if (option == 5) {
            output = <MyProposals />
        }
        else if (option == 6) {
            output = <AllProposals />
        }
        else if (option == 7) {
            output = <MyPortfolio />
        }

        else if (option == 8) {
            output = <MyInfo />
        }

        return output;
    }

    return (
        <Row style={{ minHeight: '85vh', minWidth: '100vh' }}>
            <Col>
                <Menu
                    style={{
                        height: '85vh',
                        width: '40vh',
                    }}
                    defaultOpenKeys={['sub1']}
                    defaultSelectedKeys={['1']}
                    // selectedKeys={[current]}
                    mode="inline"
                    items={items}
                    onClick={(e) => setOption(e.key)}

                />
            </Col>
            <Col flex="auto">
                {dsiplayMenuDetails()}
            </Col>

        </Row>
    );
}
export default LoggedIn;