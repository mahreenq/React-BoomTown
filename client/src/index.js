import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import muiTheme from './config/theme';

import Layout from './components/Layout';

import Login from './containers/Login';
import Items from './containers/Items';



const Boomtown = () => (
  <div>
    <MuiThemeProvider muiTheme={muiTheme}>
        <Layout>

            <Items />

        </Layout>
    </MuiThemeProvider>
    </div>

);

ReactDOM.render(<Boomtown />, document.getElementById('root'));
registerServiceWorker();
