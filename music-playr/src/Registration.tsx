import React, { FunctionComponent, useState } from 'react';
import { Input } from "./ui/Input";
import { LoginButton } from "./ui/LoginButton";
import styled from 'styled-components';
import { useHistory } from 'react-router';

const TitleStyle = styled("h1")`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

type RegState = {
    fullname: string;
    birthday: string;
    username: string;
    password: string;
    pwdagain: string;
}

export const Registration: FunctionComponent<RegState> = () =>  {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        username: "",
        password: "",
        pwdagain: ""
    });

    let history = useHistory();
    
    const handleSubmit = () => {
        if(formData.password === formData.pwdagain) {
            const newFormData = {
                full_name: formData.full_name,
                username: formData.username,
                password: formData.password,
                email: formData.email
            }

            fetch(`http://localhost:5000/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(res => res.json())
            .then(data => {
                console.log("Success: " + JSON.stringify(data));
            })
            .catch((error) => {
                console.log("Error: " + error);
            });
            
            window.alert("Succesful registration!");
            history.push("/login");
        } else {
            window.alert("Passwords are not the same!");
        }
    }
    
    //const { fullname, birthday, username, password, pwdagain } = this.state;

    return (
        <div
            style={{
                width: "30%",
                margin: "auto"
            }}>
            <TitleStyle>Registration</TitleStyle>
            <Input
                label="Full name"
                type="text"
                name="fullname"
                placeholder="name"
                value={formData.full_name}
                onChange={(e) => setFormData({...formData, full_name: e.target.value})}/>
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}/>
            <Input
                label="Username"
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}/>
            <Input
                label="Password"
                type="password"
                name="password"
                placeholder="pwd"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}/>
            <Input
                label="Password again"
                type="password"
                name="pwdagain"
                placeholder="pwd"
                value={formData.pwdagain}
                onChange={(e) => setFormData({...formData, pwdagain: e.target.value})}/>
            <LoginButton onClick={handleSubmit}>Rajta</LoginButton>
        </div>
    );
}