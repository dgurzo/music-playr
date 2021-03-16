import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

  const style = {
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
}

function Artist() {
    return (
        <div style={style}>
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
        </div>
    )
}

export default Artist;