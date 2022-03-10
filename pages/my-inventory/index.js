import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EarningItem from '../../components/Inventory/EarningItem';
import RentingItem from '../../components/Inventory/RentingItem';

function MyInventory() {
    return (
        <Container>
            <div className="inventory-box">
                <h1 className="text-center mb-5">My Inventory</h1>
                <div className="pool-list">
                    <Row>
                        <Col lg={6}>
                            <h4 className="inventoryBoxTitle bg-dark p-2 rounded text-white">Earning</h4>
                            <EarningItem />
                            <EarningItem />
                            <EarningItem />
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <h4 className="inventoryBoxTitle bg-dark p-2 rounded text-white">Renting</h4>
                                <RentingItem />
                                <RentingItem />
                                <RentingItem />
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
}

export default MyInventory;
