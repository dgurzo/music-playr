import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

const style = {
    margin: '20px auto'
}

function Home() {
    return (
        <div style={style}>
            <h1 style={{textAlign: 'center'}}>Regisztrálj ingyen most!</h1>
            <h3 style={{textAlign: 'center'}}>És férj hozzá zenék ezreihez!</h3>
        </div>
    )
}

export default Home;