import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';

import { Provider } from 'react-redux'
import store from './redux/store';

import Login from './containers/Login';
import Items from './containers/Items';
import NotFound from './containers/NotFound';
import Profile from './containers/Profile';
import Share from './containers/Share';

import {BrowserRouter, Route, Switch } from 'react-router-dom';
//import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

const Boomtown = () => (
  <div className="indexboomtown">
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store = {store}>
                <Layout>
                    <BrowserRouter>
                        <Switch>
                        <Route exact path="/" component={Items} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/share" component={Share} />
                        <Route path="/profile/:USERID"  component={Profile} />
                        <Route component={NotFound} />
                            <Items />
                        </Switch>

                    </BrowserRouter>

                </Layout>
        </Provider>
    </MuiThemeProvider>
    </div>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
