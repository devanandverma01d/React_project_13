import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Row className="h-100">
                    <Col sm={2} className="b_tbdr h-100"><Aside /></Col>
                    <Col sm={10} className="b_tbdr h-100"><Outlet /></Col>
                </Row>
            </main>
            <Footer />
        </>

    )
}
