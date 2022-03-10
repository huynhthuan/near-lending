import React from 'react';
import { Button } from 'react-bootstrap';

export default function RentingItem() {
    return (
        <div className="inventory-item bg-light mb-4">
            <div className="inventory-item-content">
                <div className="inventory-item-row d-flex align-items-center justify-content-between mb-2">
                    <div className="inventory-desc-title">
                        <p>SAND/USDT</p>
                        <p>(07/03/2022)</p>
                    </div>
                    <div className="inventory-desc-meta d-flex align-items-center">
                        <div className="inventory-value">2000/5.5</div>
                        <div className="inventory-action ms-4">
                            <Button variant="success" className="me-2">
                                Pay
                            </Button>
                            <Button variant="warning">Claim</Button>
                        </div>
                    </div>
                </div>
                <div className="inventory-item-row d-flex align-items-center justify-content-between">
                    <div className="inventory-desc-title">
                        <p>Mana/USDT</p>
                        <p>(07/03/2022)</p>
                    </div>
                    <div className="inventory-desc-meta d-flex align-items-center">
                        <div className="inventory-value">2000/5.5</div>
                        <div className="inventory-action ms-4">
                            <Button variant="success" className="me-2">
                                Pay
                            </Button>
                            <Button variant="warning">Claim</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
