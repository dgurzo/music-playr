import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const style = {
    width: '50%',
    margin: 'auto'
}

const buttonStyle = {
    width: '100%'
}

function Login() {
    return (
        <div style={style}>
            <h1 style={{textAlign: 'center'}}>Bejelentkezés</h1>
            <Form>
                <FormGroup>
                    <Label for="username">Felhasználónév: </Label>
                    <Input type="text" name="username" id="username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Jelszó: </Label>
                    <Input type="password" name="password" id="password" />
                </FormGroup>
                <Button style= {buttonStyle}>Rajta</Button>
                <a href="#" style={{fontSize: '20px'}}>Regisztráció</a>
            </Form>
        </div>
    )
}

export default Login;