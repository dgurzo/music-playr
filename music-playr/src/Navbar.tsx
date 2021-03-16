import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    Input
  } from 'reactstrap';

const searchStyle = {
    width: '400px',
    'margin-left': '10px'
}

function Navigationbar() {
    return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Music playr</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="#">Kezdőlap</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Keresés</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Gyűjteményem</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">Kedvencek</NavLink>
                    </NavItem>
                    <NavItem>
                        <Input style={searchStyle} type="text" placeholder="Keresés" />
                    </NavItem>
                </Nav>
                
                <Button>Bejelentkezés</Button>
            </Collapse>
        </Navbar>
    )
}

export default Navigationbar;