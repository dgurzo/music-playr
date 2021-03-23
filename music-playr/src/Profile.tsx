import * as React from 'react';
import styled from 'styled-components';

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

const CardContainer = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    //overflow: hidden;
`;

const Card = styled("div")`
    display: grid;
    grid-template-columns: 250px;
    grid-template-rows: 250px 70px;
    grid-template-areas: "image" "text";
    border-radius: 18px;
    background: black;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    text-align: center;
    transition: 0.5s;
    cursor: pointer;
    margin: 40px 20px;
    &:hover {
        transform: scale(1.2);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
    }
`;

const CardImage = styled("div")`
    grid-area: image;
    background: url("https://store-images.s-microsoft.com/image/apps.46943.9007199266245148.65716085-8f7e-40af-9dd6-34b7bc30c6dd.af0b8fbf-5d63-4c74-97a9-31eefb48822b?mode=scale&q=90&h=300&w=300");
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-size: cover;
`;

const CardText = styled("div")`
    grid-area: text;
    margin: 10px;
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
                </CardContainer>
            </div>
        )
    }
}

//https://lh3.googleusercontent.com/proxy/Gn49Tipiz7Jmtqj5spcOIlsRmkKQ1WgEERZWfvaTkxGQvYAkWzIKVVKh6Cn0NoeQZDHABgrQfhU5Ginh29z_BcTnHoaiLhPtF_lhu93L-PFs0tkabc8vh-nkzTCgQTY