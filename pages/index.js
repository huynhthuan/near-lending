import { Button, Col, Container, Row } from 'react-bootstrap';
import PoolItem from '../components/Pool/PoolItem';

export default function Home() {
    return (
        <Container>
            <div className="pool-box">
                <h1 className="text-center mb-5">NEAR Lending</h1>
                <div className="pool-action">
                    <Button variant="success" className="btn-add-pool">
                        Add New Pool
                    </Button>
                </div>
                <div className="pool-list">
                    <Row>
                        <Col lg={4}>
                            <PoolItem />
                        </Col>
                        <Col lg={4}>
                            <PoolItem />
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
}
