import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import { Login }  from './Login';
import { Registration } from './Registration';
import Search from './Search';
import Artist from './Artist';
import Album from './Album';
import styled from 'styled-components';

const Margin = styled("main")`
    margin-left: 250px;
`;

const Main = () => (
    <Margin>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/registration' component={Registration} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/artist' component={Artist} />
                <Route exact path='/album' component={Album} />
            </Switch>
        </BrowserRouter>
    </Margin>
)
  
export default Main;