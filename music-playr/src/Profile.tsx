import * as React from 'react';
import styled from 'styled-components';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';

const ProfileStyle = styled("div")`
    position: relative;
    margin-top: 80px;
`;

const Image = styled("img")`
    border: 2px solid black;
    float: left;
    margin: 0px 30px;
    border-radius: 8px;
    width: 180px;
    height: 180px;
`;

const DataP = styled("p")`
    margin-bottom: 120px;
`;

export class Profile extends React.PureComponent {
    render() {
        return (
            <div>
                <ProfileStyle>
                    <Image src="https://store-images.s-microsoft.com/image/apps.46943.9007199266245148.65716085-8f7e-40af-9dd6-34b7bc30c6dd.af0b8fbf-5d63-4c74-97a9-31eefb48822b?mode=scale&q=90&h=300&w=300" alt="profile picture"/>
                    <h1>Teljes név</h1>
                    <DataP>10 követő | 10 követés</DataP>
                </ProfileStyle>
                
                <h2 style={{margin: '30px 0 0 30px'}}>Saját playlist-ek</h2>
                <CardContainer>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>Playlist</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>Playlist</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>Playlist</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>Playlist</h4>
                        </CardText>
                    </Card>
                </CardContainer>

                <h2 style={{margin: '30px 0 0 30px'}}>Követőid</h2>
                <CardContainer>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
                </CardContainer>

                <h2 style={{margin: '30px 0 0 30px'}}>Követéseid</h2>
                <CardContainer>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
                </CardContainer>
            </div>
        )
    }
}

//https://lh3.googleusercontent.com/proxy/Gn49Tipiz7Jmtqj5spcOIlsRmkKQ1WgEERZWfvaTkxGQvYAkWzIKVVKh6Cn0NoeQZDHABgrQfhU5Ginh29z_BcTnHoaiLhPtF_lhu93L-PFs0tkabc8vh-nkzTCgQTY