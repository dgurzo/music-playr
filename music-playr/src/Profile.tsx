import * as React from 'react';
import styled from 'styled-components';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';
import { History } from 'history';
import { GreenButton } from './ui/GreenButton';
import { Link } from 'react-router-dom';

const ProfileStyle = styled("div")`
    position: relative;
    margin-top: 80px;
`;

const Image = styled("img")`
    border: 2px solid black;
    float: left;
    margin: 0px 30px;
    border-radius: 8px;
    width: 180px;
    height: 180px;
`;

const DataP = styled("p")`
    margin-bottom: 40px;
`;

interface Props {
    history: History
}

interface User {
    _id: string,
    full_name: string,
    usernamepassword: string,
    email: string
}

export const Profile: React.FunctionComponent<Props> = ({history}) => {
    const [user, setUser] = React.useState<any>(history.location.state);
    let userId = localStorage.getItem('userid'); 
    const [followedUsers, setFollowedUsers] = React.useState<User[]>([]); 

    React.useEffect(() => {
        GetFollowedUsers();
        console.log(followedUsers);
    }, [])

    const GetFollowedUsers = async () => {
        let response = await fetch("http://localhost:5000/follow/getfollows", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userid: user._id
            })
        });
        let fol = await response.json();
        console.log(fol);
        
        let s: any[] = [];
        for(let i = 0; i < fol.length; i++) {
          s.push(fol[i].follower[0]);
        }
        console.log(s);
        setFollowedUsers(s);

    }

    const handleFollow = async () => {
        if(user._id !== userId) {
            let response = await fetch("http://localhost:5000/follow/start", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                followerid: userId,
                followedid: user._id
            })
        });
        let resp = await response.json();
        console.log(resp);

        if(resp.delete == "successful") {
            window.alert("Follow deleted!");
        } else {
            window.alert("Successful follow!");
        }
        } else {
            window.alert("Do not follow yourself! That's strange!");
        }
    }

    return (
            <div style={{marginBottom: '80px'}}>
                <ProfileStyle style={{marginLeft: '30px'}}>
                    <h1 style={{marginLeft: '30px', marginBottom: '20px'}}>{user.full_name}</h1>
                    <GreenButton onClick={handleFollow}>Follow</GreenButton>
                </ProfileStyle>

                {/*<h2 style={{margin: '30px 0 0 30px'}}>Követőid</h2>
                <CardContainer>
                    <Card>
                        <CardImage></CardImage>
                        <CardText>
                            <h4>User</h4>
                        </CardText>
                    </Card>
        </CardContainer>*/}

                <h2 style={{margin: '30px 0 0 30px'}}>Follows</h2>
                <CardContainer>
                    {followedUsers.map(u => (
                            <Card key={u._id}>
                                <CardImage></CardImage>
                                <CardText>
                                    <h4>{u.full_name}</h4>
                                </CardText>
                            </Card>
                    ))}
                </CardContainer>
            </div>
        )
}

//https://lh3.googleusercontent.com/proxy/Gn49Tipiz7Jmtqj5spcOIlsRmkKQ1WgEERZWfvaTkxGQvYAkWzIKVVKh6Cn0NoeQZDHABgrQfhU5Ginh29z_BcTnHoaiLhPtF_lhu93L-PFs0tkabc8vh-nkzTCgQTY