import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './NavbarCustom';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Near Lending</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" charSet="UTF-8" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" charSet="UTF-8" />
            </Head>
            <div className="main-content">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}
