import React from 'react';
import styled from 'styled-components';
import ChechIcon from '@material-ui/icons/Check';

// TODO: organize the css into separate files under /ui folder

const AlbumStyle = styled("div")`
  position: relative;
  margin: 80px auto;
  width: 95%;
`;

const AlbumContainer = styled("div")`
  display: block;
  line-height: 1.4;
  font-size: 14px;
`;

const AlbumInfo = styled("div")`
  display: flex;
  margin-bottom: 15px;
  flex-flow: row wrap;
`;

const AlbumInfoArt = styled("div")`
  display: block;
  box-sizing: border-box;
`;

const AlbumInfoMeta = styled("div")`
  margin-left: 15px;
  display: flex;
  flex-flow: column wrap;
`;

const AlbumYear = styled("div")`
  color: #aaaaaa;
  letter-spacing: 1px;
`;

const AlbumName = styled("div")`
  color: white;
  font-size: 30px;
  font-weight: 100;
`;

const AlbumActions = styled("div")`
  margin-top: auto;
`;

const ButtonLight = styled("button")`
  padding: 5px 15px;
  margin-right: 10px;
  background: none;
  color: #c8c8c8;
  border: 1px solid #c8c8c8;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  outline: none;
  &:hover {
    cursor: pointer;
    border: 1px solid green;
    color: white;
  }
`;

const AlbumTracks = styled("div")`
  display: block;
  line-height: 1.4;
  font-size: 14px;
`;

const Tracks = styled("div")`
  display: flex;
  flex-flow: column wrap;
  margin-botom: 15px;
`;

const TracksHeading = styled("div")`
  color: #aaaaaa;
  height: 42px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const TracksHeadingNumber = styled("div")`
  margin-left: 10px;
  font-style: italic;
`;

const TracksHeadingTitle = styled("div")`
  margin-left: 70px;
  width: 70px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TracksHeadingLength = styled("div")`
  margin-left: auto;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Track = styled("div")`
  border-top: 1px solid #282828;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 10px 0;
  &:hover {
    background: #282828;
  }
`;

const TrackNumber = styled("div")`
  margin-left: 10px;
  color: #aaaaaa;
  width: 12px;
`;

const TrackAdded = styled("div")`
  margin-left: 20px;
  color: #c8c8c8;
`;

const TrackTitle = styled("div")`
  margin-left: 22px;
  color: white;
`;

const TrackLength = styled("div")`
  margin-left: auto;
  color: #aaaaaa;
`;

export class Album extends React.PureComponent {
  render() {
    return(
      <div>
        <AlbumStyle>
          <AlbumContainer>
            <AlbumInfo>
              <AlbumInfoArt>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/7022/whenDarkOut.jpg" alt="When It's Dark Out" style={{width: "135px", height: "135px"}} />
              </AlbumInfoArt>
              
              <AlbumInfoMeta>
                <AlbumYear>2015</AlbumYear>
                <AlbumName>When It's Dark Out</AlbumName>
                <AlbumActions>
                  <ButtonLight>Play</ButtonLight>
                  <ButtonLight>Like</ButtonLight>
                </AlbumActions>
              </AlbumInfoMeta>
            </AlbumInfo>

            <AlbumTracks>
              <TracksHeading>
                <TracksHeadingNumber>#</TracksHeadingNumber>
                <TracksHeadingTitle>Song</TracksHeadingTitle>
                <TracksHeadingLength>Length</TracksHeadingLength>
              </TracksHeading>
              <Track>
                <TrackNumber>1</TrackNumber>
                <TrackAdded>
                  <ChechIcon></ChechIcon>
                </TrackAdded>
                <TrackTitle>Title</TrackTitle>
                <TrackLength>1:11</TrackLength>
              </Track>
              <Track>
                <TrackNumber>1</TrackNumber>
                <TrackAdded>
                  <ChechIcon></ChechIcon>
                </TrackAdded>
                <TrackTitle>Title</TrackTitle>
                <TrackLength>1:11</TrackLength>
              </Track>
              <Track>
                <TrackNumber>1</TrackNumber>
                <TrackAdded>
                  <ChechIcon></ChechIcon>
                </TrackAdded>
                <TrackTitle>Title</TrackTitle>
                <TrackLength>1:11</TrackLength>
              </Track>
              <Track>
                <TrackNumber>1</TrackNumber>
                <TrackAdded>
                  <ChechIcon></ChechIcon>
                </TrackAdded>
                <TrackTitle>Title</TrackTitle>
                <TrackLength>1:11</TrackLength>
              </Track>
              <Track>
                <TrackNumber>1</TrackNumber>
                <TrackAdded>
                  <ChechIcon></ChechIcon>
                </TrackAdded>
                <TrackTitle>Title</TrackTitle>
                <TrackLength>1:11</TrackLength>
              </Track>
              <Track>
                <TrackNumber>1</TrackNumber>
                <TrackAdded>
                  <ChechIcon></ChechIcon>
                </TrackAdded>
                <TrackTitle>Title</TrackTitle>
                <TrackLength>1:11</TrackLength>
              </Track>
              <Track>
                <TrackNumber>1</TrackNumber>
                <TrackAdded>
                  <ChechIcon></ChechIcon>
                </TrackAdded>
                <TrackTitle>Title</TrackTitle>
                <TrackLength>1:11</TrackLength>
              </Track>
              <Track>
                <TrackNumber>1</TrackNumber>
                <TrackAdded>
                  <ChechIcon></ChechIcon>
                </TrackAdded>
                <TrackTitle>Title</TrackTitle>
                <TrackLength>1:11</TrackLength>
              </Track>
            </AlbumTracks>
          </AlbumContainer>
        </AlbumStyle>
      </div>
    )
  }
}