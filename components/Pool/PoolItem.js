import React from 'react';
import { Button } from 'react-bootstrap';

export default function PoolItem() {
    return (
        <div className="pool-item mt-4 bg-light">
            <h4 className="pool-title">SAND/USDT Price 3.45</h4>
            <div className="pool-desc">
                <div className="pool-row d-flex align-items-center justify-content-between">
                    <div className="pool-desc-title">SAND Amount</div>
                    <div className="pool-desc-value">2000/10000</div>
                </div>
                <div className="pool-row d-flex align-items-center justify-content-between">
                    <div className="pool-desc-title">USDT Amount</div>
                    <div className="pool-desc-value">2000/10000</div>
                </div>
            </div>
            <div className="pool-buttons mt-3">
                <Button className="me-2">Deposit</Button>
                <Button variant="warning">Borrow</Button>
            </div>
        </div>
    );
}
