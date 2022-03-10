import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useRouter } from 'next/router';

export default function NavbarCustom() {
    const router = useRouter();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand
                    onClick={() => {
                        router.push('/');
                    }}
                >
                    NEAR
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                router.push('/');
                            }}
                            className={router.asPath === '/' ? 'text-white' : ''}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                router.push('/my-inventory');
                            }}
                            className={router.asPath === '/my-inventory' ? 'text-white' : ''}
                        >
                            My Inventory
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => {
                                router.push('/about');
                            }}
                            className={router.asPath === '/about' ? 'text-white' : ''}
                        >
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
