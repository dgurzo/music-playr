import React from 'react';
import Content from './Content';
import { Navigationbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { MusicPlayer } from './MusicPlayer';
import styled from 'styled-components';

const Style = styled("div")`
  overflow: auto;
`;

const PlayerContainer = styled("div")`
    width: 500px,
    height: 60px;
    position: fixed;
    bottom: 0;
`;


function App() {
  return (
    <Style>
        <Navigationbar />
        <Sidebar />
        <Content />
    </Style>
  );
}

export default App;
