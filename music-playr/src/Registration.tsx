import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const style = {
    width: '50%',
    margin: 'auto'
}

const buttonStyle = {
    width: '100%'
}

function Registration() {
    return (
        <div style={style}>
            <h1 style={{textAlign: 'center'}}>Regisztráció</h1>
            <Form>
                <FormGroup>
                    <Label for="fullname">Teljes név: </Label>
                    <Input type="text" name="fullname" id="fullname" />
                </FormGroup>
                <FormGroup>
                    <Label for="birth">Születési dátum: </Label>
                    <Input type="date" name="birth" id="birth" />
                </FormGroup>
                <FormGroup>
                    <Label for="username">Felhasználónév: </Label>
                    <Input type="text" name="username" id="username" />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Jelszó: </Label>
                    <Input type="password" name="password" id="password" />
                </FormGroup>
                <FormGroup>
                    <Label for="passwordagain">Jelszó újra: </Label>
                    <Input type="password" name="passwordagain" id="passwordagain" />
                </FormGroup>
                <Button style={buttonStyle}>Rajta</Button>
            </Form>
        </div>
    )
}

export default Registration;