import * as React from "react";
import { Input } from "./ui/Input";
import { LoginButton } from "./ui/LoginButton";
import styled from 'styled-components';

const TitleStyle = styled("h1")`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

interface State {
  username: string;
  password: string;
}

interface Props {
  onSubmit: (data: State) => void;
  buttonText: string;
}

export class Login extends React.PureComponent<Props, State> {
  state = {
    username: "",
    password: ""
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    } as any);
  };

  render() {
    const { username, password } = this.state;

    return (
      <div
        style={{
          width: "30%",
          margin: "auto"
        }}
      >
        <div>
            <TitleStyle>Bejelentkezés</TitleStyle>
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
                placeholder="Add meg a jelszavad..."
                value={password}
                onChange={this.handleChange}
            />
            <LoginButton onClick={() => this.props.onSubmit(this.state)}>
                Rajta
            </LoginButton>
            <a href="/registration">Regisztráció</a>
        </div>
      </div>
    );
  }
}