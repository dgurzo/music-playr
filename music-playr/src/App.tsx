import React from 'react';
import Content from './Content';
import { Navigationbar } from './Navbar';
import { Sidebar } from './Sidebar';
import { MusicPlayer } from './MusicPlayer';
import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';

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
          <div className="container" style={{width: '100%', position: 'fixed', bottom: 0, background: 'white'}}>
            <AudioPlayer 
                showFilledProgress
                showFilledVolume
                layout='horizontal'
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            />
            </div>
    </Style>
  );
}

export default App;
