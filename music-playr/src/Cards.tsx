import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

const cardStyle = {
    height: '250px',
    width: '200px',
    margin: '10px 20px',
    display: 'flex'
}

type cardProps = {
    text: string
}

function Cards(props: cardProps) {
    return (
        <div>
            <Card style={cardStyle}>
                <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5"><a href="#">{props.text}</a></CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Card;