import { useState, FunctionComponent } from "react";
import { Input } from "./ui/Input";
import { LoginButton } from "./ui/LoginButton";
import styled from 'styled-components';
import { useHistory } from 'react-router';

const TitleStyle = styled("h1")`
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

interface State {
  username: string;
  password: string;
}

export const Login: FunctionComponent<State> = () => {
  const [formData, setFormdata] = useState({
    username: "",
    password: ""
  });

  let history = useHistory();

  const handleSubmit = async () => {
    const newFormData = {
      username: formData.username,
      password: formData.password
    }

    /*fetch(`http://localhost:5000/users/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            .then(res => {
              res.json();
            })
            .then(data => {
                console.log("Success: " + JSON.stringify(data));
                //localStorage.setItem('userid');
            })
            .catch((error) => {
                console.log("Error: " + error);
            });*/
    
    let response = await fetch("http://localhost:5000/users/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    let loginres = await response.json();
    console.log(loginres);
    localStorage.setItem('token', loginres.token);
    localStorage.setItem('userid', loginres.user._id);

    window.alert("Succesful login!");
    history.push("/");
  }
  
  return (
    <div
      style={{
        width: "30%",
        margin: "auto"
      }}>
      <div>
        <TitleStyle>Bejelentkezés</TitleStyle>
        <Input
          label="Felhasználónév"
          type="text"
          name="username"
          placeholder="Add meg a felhasználóneved..."
          value={formData.username}
          onChange={(e) => setFormdata({...formData, username: e.target.value})}/>
        <Input
          label="Jelszó"
          type="password"
          name="password"
          placeholder="Add meg a jelszavad..."
          value={formData.password}
          onChange={(e) => setFormdata({...formData, password: e.target.value})}/>
        <LoginButton onClick={handleSubmit}>Rajta</LoginButton>
        <a href="/registration">Regisztráció</a>
      </div>
    </div>
  );
}