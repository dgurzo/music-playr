import React from 'react';
import styled from 'styled-components';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';
import { GreenButton } from './ui/GreenButton';

const ArtistStyle = styled("div")`
    position: relative;
    margin-top: 80px;
`;

export class Artist extends React.PureComponent {
    render() {
        return (
            <div>
                <ArtistStyle>
                    <h1 style={{marginLeft: '30px', marginBottom: '20px'}}>Előadó neve</h1>
                    <GreenButton>Play</GreenButton>
                    <GreenButton>Like</GreenButton>
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