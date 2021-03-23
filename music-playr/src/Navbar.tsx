import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = styled("header")`;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: black;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    padding: 5px 5px;
`;

const NavbarLink = styled("a")`
    text-decoration: none;
    color: #b3b3b3;
`;

/*const NavbarList = styled("ul")`
    list-style: none;
`;

const NavbarListItem = styled("li")`
    display: inline-block;
    padding: 0 15px;
    text-transformation: uppercase;
`;*/

const Button = styled("a")`
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px 15px;
    border-radius: 5px;
    background: #d22938;
`;

const Header = styled("a")`
    font-size: 22px;
    color: white;
    line-height: 35px;
    user-select: none;
    margin-left: 70px;
`;

const Searchbox = styled("div")`
    position: relative;
    width: 400px;
    height: 42px;
    border: 3px solid white;
    padding: 0px 10px;
    border-radius: 50px;
`;

const SearchboxInput = styled("input")`
    width: 100%;
    height: 100%;
    vertical-align: center;
    padding: 0px 5px;
    border: none;
    border-radius: 50px;
    font-size: 18px;
    background-color: black;
    color: white;
    font-weight: 500;
    &:focus {
        outline: none;
    }
`;

export class Navigationbar extends React.PureComponent {
    render() {
        return (
            <Navbar>
                <Header href="/">MusicPlayr</Header>
                <Searchbox>
                    <SearchboxInput type="text" placeholder="Keresés..."></SearchboxInput>
                </Searchbox>
                <Button href="/login">Bejelentkezés</Button>
            </Navbar>
        )
    }
}

/*<NavbarList>
                        <NavbarListItem><NavbarLink href="#"> asdasd</NavbarLink></NavbarListItem>
                        <NavbarListItem><NavbarLink href="#"> asdasd</NavbarLink></NavbarListItem>
                        <NavbarListItem><NavbarLink href="#"> asdasd</NavbarLink></NavbarListItem>
                    </NavbarList>*/