import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';

const Main = () => (
    <main>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/registration' component={Registration} />
            </Switch>
        </BrowserRouter>
    </main>
)
  
export default Main;