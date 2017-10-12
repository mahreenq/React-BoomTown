import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCardList from '../../components/ItemCardList'
import ProfileCard from '../../components/ProfileCard'

import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

const Profile = ({data , profileItemsLength, itemsBorrowed }) => {

  return (
      <div className="profile"> 
      {<p><Link to = '/' >  HOME </Link></p>}

         {<ProfileCard profileItemsLength= {profileItemsLength} data = {data[0].itemowner} itemsBorrowed = {itemsBorrowed}/>} 
        <ItemCardList data = {data}/>
        
      </div>

    );
}

Profile.propTypes = {

}

export default Profile;

//presentational
