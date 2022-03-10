import React from 'react';
import { Button } from 'react-bootstrap';

export default function EarningItem() {
    return (
        <div className="inventory-item bg-light">
            <h4 className="inventory-item-title">Earning</h4>
            <div className="inventory-item-content">
                <div className="inventory-item-row d-flex align-items-center justify-content-between mb-2">
                    <div className="inventory-desc-title">SAND (07/03/2022)</div>
                    <div className="inventory-desc-meta d-flex align-items-center">
                        <div className="inventory-value">2000/5.5</div>
                        <div className="inventory-action ms-4">
                            <Button variant="warning">Claim</Button>
                        </div>
                    </div>
                </div>
                <div className="inventory-item-row d-flex align-items-center justify-content-between">
                    <div className="inventory-desc-title">Mana (08/03/2022)</div>
                    <div className="inventory-desc-meta d-flex align-items-center">
                        <div className="inventory-value">2000/5.5</div>
                        <div className="inventory-action ms-4">
                            <Button variant="warning">Claim</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
