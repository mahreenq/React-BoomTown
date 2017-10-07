import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCardList from '../../components/ItemCardList'
import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

const NotFound = ({data }) => {

  return (
      <div className="error">
        <p className="errmsg">404 ERROR</p>
        <p><Link to = '/' >  HOME </Link></p>
      </div>

    );
}

NotFound.propTypes = {

}

export default NotFound;

//presentational
