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
                        <Col lg={4}>
                            <EarningItem />
                        </Col>
                        <Col lg={4}>
                            <RentingItem />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
}

export default MyInventory;
