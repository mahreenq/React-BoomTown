import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCardList from '../../components/ItemCardList'

import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

const Profile = ({data }) => {

  return (
      <div className="allItems"> 
      <p><Link to = '/' >  HOME </Link></p>
        <ItemCardList data = {data}/>
        
      </div>

    );
}

Profile.propTypes = {

}

export default Profile;

//presentational
