import React from 'react';
import Content from './Content';
import { Navigationbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { MusicPlayer } from './MusicPlayer';
import styled from 'styled-components';

const Style = styled("div")`
  overflow: auto;
`;

function App() {
  return (
    <Style>
        <Navigationbar />
        <Sidebar />
        <Content />
        <MusicPlayer />
    </Style>
  );
}

export default App;
