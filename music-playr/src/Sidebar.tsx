import * as React from "react";
import styled from 'styled-components';

const SidebarStyle = styled("div")`
    position: fixed;
    left: 0;
    width: 250px;
    height: 100%;
    background: #000;
`;

const SidebarHeader = styled("header")`
    font-size: 22px;
    color: white;
    text-align: center;
    line-height: 70px;
    user-select: none;
`;

const SidebarList = styled("ul")`
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
`;

const SidebarListLink = styled("a")`
    display: block;
    height: 100%;
    width: 100%;
    line-height: 50px;
    font-size: 20px;
    padding-left: 40px;
    box-sizing: border-box;
    border-top: 1px solid rgba(255, 255, 255, .1);
    border-bottom: 1px solid black;
    transition: .4s;
    color: #b3b3b3;

    &:hover {
        padding-left: 50px;
    }
`;

export class Sidebar extends React.PureComponent {
    render() {
        return (
            <SidebarStyle>
                
                <SidebarList>
                    <li><SidebarListLink href="#" style={{textDecoration: 'none'}}>Kezdőlap</SidebarListLink></li>
                    <li><SidebarListLink href="#" style={{textDecoration: 'none'}}>Keresés</SidebarListLink></li>
                    <li><SidebarListLink href="#" style={{textDecoration: 'none'}}>Gyűjteményem</SidebarListLink></li>
                    <li><SidebarListLink href="#" style={{textDecoration: 'none'}}>Kedvencek</SidebarListLink></li>
                    <li><SidebarListLink href="#" style={{textDecoration: 'none'}}>+ Új playlist</SidebarListLink></li>
                </SidebarList>
            </SidebarStyle>
        )
    }
}

//<SidebarHeader>MusicPlayr</SidebarHeader>