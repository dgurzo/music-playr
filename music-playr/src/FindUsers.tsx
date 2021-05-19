import * as React from 'react';
import styled from 'styled-components';
import { CardContainer } from './ui/CardContainer';
import { Card } from './ui/Card';
import { CardImage } from './ui/CardImage';
import { CardText } from './ui/CardText';
import { Link } from 'react-router-dom';

const ProfileStyle = styled("div")`
    position: relative;
    margin-top: 80px;
`;

interface User {
    _id: string,
    full_name: string,
    username: string,
    password: string,
    email: string
}

export const FindUsers: React.FunctionComponent = () => {
    const [users, setUsers] = React.useState<User[]>([]);
    let userId = localStorage.getItem('userid');

    React.useEffect(() => {
        GetUsers();
        console.log(users);
    }, [])

    const GetUsers = async () => {
        let response = await fetch("http://localhost:5000/users/get/all");
        let us = await response.json();
        console.log(us);
        setUsers(us);
    }
    
    return (
        <div>
            <ProfileStyle style={{marginLeft: '20px'}}>
                <h1>Find Users</h1>
            </ProfileStyle>

            <CardContainer>
                {(userId !== null) ?
                    users.map(user => (
                        <Link to={{
                            pathname: "/profile",
                            state: user
                        }} key={user._id} style={{textDecoration: 'none', color: 'white'}}>
                            <Card>
                                <CardImage></CardImage>
                                <CardText>
                                    <h4>{user.full_name}{(user._id === userId)?" (Me)":""}</h4>
                                </CardText>
                            </Card>
                        </Link>
                    )) : <></>
                }
                
            </CardContainer>
        </div>
    )
}