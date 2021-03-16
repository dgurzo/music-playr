import React from 'react';
import { Media, Button, Table } from 'reactstrap';

const style = {
    width: '90%',
    margin: 'auto',
    'margin-top': '20px'
}

const button = {
    width: "100px",
    margin: '5px 10px 40px 0px'
}

function Album() {
    return (
        <div style={style}>
            <Media left href="#">
                <img src="./img/100x100.jpg" alt="Generic placeholder image" />
            </Media>
            <h3>Album címe</h3>

            <div>
                <Button color="primary" style={button}>Play</Button>{' '}
                <Button color="primary" style={button}>Like</Button>{' '}
            </div>

            <Table dark>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Cím</th>
                    <th>Hossz</th>
                    <th>Előadó</th>
                    <th></th>
                    </tr>
                </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Dal1</td>
          <td>Hossz1</td>
          <td>Előadó1</td>
          <td><Button color="primary" style={{width: '100px'}}>Play</Button>{' '}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Dal2</td>
          <td>Hossz2</td>
          <td>Előadó2</td>
          <td><Button color="primary" style={{width: '100px'}}>Play</Button>{' '}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Dal3</td>
          <td>Hossz3</td>
          <td>Előadó3</td>
          <td><Button color="primary" style={{width: '100px'}}>Play</Button>{' '}</td>
        </tr>
      </tbody>
    </Table>
        </div>
    )
}

export default Album;