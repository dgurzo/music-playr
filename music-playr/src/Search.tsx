import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import Cards from './Cards';

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

function Search() {
    return (
        <div style={style}>
            <h2>Műfajok böngészése</h2>
            <div style={cards}>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Műfaj</a></CardTitle>
                    </CardBody>
                </Card>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Műfaj</a></CardTitle>
                    </CardBody>
                </Card>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Műfaj</a></CardTitle>
                    </CardBody>
                </Card>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Műfaj</a></CardTitle>
                    </CardBody>
                </Card>
                <Card style={cardStyle}>
                    <CardImg top width="100%" src="./img/wp2465923-javascript-wallpapers.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle tag="h5"><a href="#">Műfaj</a></CardTitle>
                    </CardBody>
                </Card>
                
            </div>
        </div>
    )
}

export default Search;