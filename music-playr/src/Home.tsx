import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Navigationbar from './Navbar';

const style = {
    margin: '20px auto'
}

function Home() {
    return (
        <div style={style}>
            <h1 style={{textAlign: 'center'}}>Regisztrálj ingyen most!</h1>
            <h3 style={{textAlign: 'center'}}>És férj hozzé zenék ezreihez!</h3>
        </div>
    )
}

export default Home;