import React from 'react';
import { Input } from "./ui/Input";
import { LoginButton } from "./ui/LoginButton";
import styled from 'styled-components';

const TitleStyle = styled("h1")`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

interface State {
    fullname: string;
    birthday: string;
    username: string;
    password: string;
    pwdagain: string;
}
  
interface Props {
    onSubmit: (data: State) => void;
    buttonText: string;
}

export class Registration extends React.PureComponent<Props, State> {
    state = {
        fullname: "",
        birthday: "",
        username: "",
        password: "",
        pwdagain: ""
      };
    
      handleChange = (e: any) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        } as any);
      };

    render() {
        const { fullname, birthday, username, password, pwdagain } = this.state;

        return (
            <div
                style={{
                    width: "30%",
                    margin: "auto"
                }}
            >
                <TitleStyle>Regisztráció</TitleStyle>
                <Input
                    label="Teljes név"
                    type="text"
                    name="fullname"
                    placeholder="Add meg a teljes neved..."
                    value={fullname}
                    onChange={this.handleChange}
                />
                <Input
                    label="Születési dátum"
                    type="date"
                    name="birthday"
                    placeholder="Add meg a születési dátumod..."
                    value={birthday}
                    onChange={this.handleChange}
                />
                <Input
                    label="Felhasználónév"
                    type="text"
                    name="username"
                    placeholder="Add meg a felhasználóneved..."
                    value={username}
                    onChange={this.handleChange}
                />
                <Input
                    label="Jelszó"
                    type="password"
                    name="password"
                    placeholder="Add meg a jelszót..."
                    value={password}
                    onChange={this.handleChange}
                />
                <Input
                    label="Jelszó újra"
                    type="password"
                    name="pwdagain"
                    placeholder="Kérlek add meg újra a jelszót..."
                    value={pwdagain}
                    onChange={this.handleChange}
                />
                <LoginButton>Rajta</LoginButton>
            </div>
        );
    } 
}