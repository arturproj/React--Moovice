import React from 'react'
import Nav from 'react-bootstrap/Nav'

const NavBar = ({active}) =>{

    return (
        <Nav fill variant="tabs" defaultActiveKey={active}>
            <Nav.Item>
                <Nav.Link href="/">This week</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/battle/">This week Battle</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/popular/">Popular</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/popular-battle/">Popular Battle</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/my-list/">My List</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar;