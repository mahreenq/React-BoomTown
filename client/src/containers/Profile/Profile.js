import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCardList from '../../components/ItemCardList'
import ProfileCard from '../../components/ProfileCard'

import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

const Profile = ({data ,  borrowed }) => {
    //console.log(data);
  return (
      <div className="profile"> 
      

         {<ProfileCard data = {data} borrowed = {borrowed}/>  }
         {<ItemCardList data = {data} />}


        
      </div>

    );
}

Profile.propTypes = {

}

export default Profile;
