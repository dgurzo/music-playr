import React from 'react';
import styled from 'styled-components';

/*const style = {
    width: '90%',
    margin: 'auto',
    'margin-top': '20px'
}

const cardStyle = {
    height: '300px',
    width: '250px',
    margin: '10px 20px 10px 0px',
    display: 'flex'
}

const cards = {
    display: 'flex'
}

const button = {
    width: "100px",
    margin: '5px 10px 40px 0px'
}*/

const ArtistStyle = styled("div")`
    position: relative;
    margin-top: 80px;
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

const Button = styled("a")`
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px 15px;
    border-radius: 5px;
    background: #47a052;
    margin-left: 30px;
    padding: 10px 30px;
`;

export class Artist extends React.PureComponent {
    render() {
        return (
            <div>
                <ArtistStyle>
                    <h1 style={{marginLeft: '30px', marginBottom: '20px'}}>Előadó neve</h1>
                    <Button>Play</Button>
                    <Button>Like</Button>
                </ArtistStyle>
                
                <h2 style={{margin: '40px 0 0 30px'}}>Albumok</h2>
                <CardContainer>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>Album</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>Album</h4>
                        </CardText>
                    </Card>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>Album</h4>
                        </CardText>
                    </Card>
                </CardContainer>

            </div>
        )
    }
}

/*<div style={style}>
            <h1>Előadó neve</h1>
                <Button color="primary" style={button}>Play</Button>{' '}
                <Button color="primary" style={button}>Like</Button>{' '}

            <h3>Albumok</h3>
            <div style={cards}>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Album címe</a></CardTitle>
                    </CardBody>
                </Card>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Album címe</a></CardTitle>
                    </CardBody>
                </Card>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Album címe</a></CardTitle>
                    </CardBody>
                </Card>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Album címe</a></CardTitle>
                    </CardBody>
                </Card>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Album címe</a></CardTitle>
                    </CardBody>
                </Card>
            </div>
        </div>*/