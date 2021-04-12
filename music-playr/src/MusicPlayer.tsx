import React, { useState } from 'react';
import styled from 'styled-components';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Slider from '@material-ui/core/Slider';

const CurrentTrack = styled("div")`
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 60px;
    background: #282828;
    padding: 15px 15px;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;

// BAL
const CurrentTrackActions = styled("div")`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 10%;
`;

const ButtonHover = styled("div")`
    &:hover {
        cursor: pointer;
        color: white;
    }
`;

// KÖZEPE
const CurrentTrackProgress = styled("div")`
    width: 55%;
    padding: 0 30px;
    color: #aaaaaa;
    font-size: 12px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
`;

// JOBB
const TrackOptions = styled("div")`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 35%;
`;

// lyrics
const TrackOptionsLyrics = styled("div")`
    font-size: 11px;
    text-transform: uppercase;
    width: 25%;
    padding: 0 15px 0 15px;
    color: #aaaaaa;
    &:hover {
        cursor: pointer;
        color: white;
    }
`;

// gombok
const TrackControls = styled("div")`
    width: 75%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const TrackControlItem = styled("div")`
    &:hover {
        cursor: pointer;
        color: white;
    }
`;

const ControlVolume = styled("div")`
    width: 50%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;

export class MusicPlayer extends React.PureComponent {
    render() {
        return (
            <div>
                <CurrentTrack>
                    <CurrentTrackActions>
                        <ButtonHover>
                            <SkipPreviousIcon fontSize="large" />
                        </ButtonHover>
                        <ButtonHover>
                            <PlayArrowIcon fontSize="large" />
                        </ButtonHover>
                        <ButtonHover>
                            <SkipNextIcon fontSize="large" />
                        </ButtonHover>
                    </CurrentTrackActions>

                    <CurrentTrackProgress>
                        <p>0:00</p>
                        <Slider style={{width: "85%", color: "green"}}/>
                        <p>1:11</p>
                    </CurrentTrackProgress>

                    <TrackOptions>
                        <TrackOptionsLyrics>Lyrics</TrackOptionsLyrics>
                        <TrackControls>
                            <TrackControlItem><ShuffleIcon /></TrackControlItem>
                            <TrackControlItem><RepeatIcon /></TrackControlItem>
                            
                            <ControlVolume>
                                <VolumeDownIcon style={{marginRight: "10px"}}/>
                                <Slider style={{width: "60%", color: "green"}}/>
                                <VolumeUpIcon style={{marginLeft: "10px"}}/>
                            </ControlVolume>
                        </TrackControls>
                    </TrackOptions>
                </CurrentTrack>
            </div>
        )
    }
}