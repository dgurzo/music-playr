import * as React from "react";
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import CollectionsIcon from '@material-ui/icons/Collections';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PersonIcon from '@material-ui/icons/Person';

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

export const Sidebar: React.FunctionComponent = () => {
    let userId = localStorage.getItem('userid');

        return (
            <SidebarStyle>
                
                <SidebarList>
                    <li><SidebarListLink href="#" style={{textDecoration: 'none'}}>Kezdőlap</SidebarListLink></li>
                    <li><SidebarListLink href="/search" style={{textDecoration: 'none'}}><SearchIcon /> Keresés</SidebarListLink></li>
                    <li><SidebarListLink href="/collections" style={{textDecoration: 'none'}}><CollectionsIcon /> Gyűjteményem</SidebarListLink></li>
                    <li><SidebarListLink href="/favouritesongs" style={{textDecoration: 'none'}}><FavoriteIcon /> Kedvencek</SidebarListLink></li>
                    {(userId !== null) ?  
                    <li><SidebarListLink href="/findusers" style={{textDecoration: 'none'}}><PersonIcon /> Find Users</SidebarListLink></li>:
                    <></>}
                </SidebarList>
            </SidebarStyle>
        )
}

//<SidebarHeader>MusicPlayr</SidebarHeader>