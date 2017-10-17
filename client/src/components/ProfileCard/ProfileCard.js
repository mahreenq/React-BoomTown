import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';
//import moment from 'moment';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import distanceInWords from 'date-fns/distance_in_words';
import startOfToday from 'date-fns/start_of_today';
import Gravatar from 'react-gravatar';
import Avatar from 'material-ui/Avatar';

import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

var Masonry = require('react-masonry-component');


const ProfileCard= ({data,  borrowed }) => {

  //console.log (data);
   let itemowner = data[0].itemowner;
  // console.log(itemowner);
  return (
 <div className ="profileCard ">

          <Card style ={{width: '85%', padding:'2rem'}}>

          <div className="flex">
              
              <div>
  <CardTitle title={ <span className ="cardName"> {itemowner.fullname} </span> } />
          <CardTitle subtitle={itemowner.bio}  />

          </div>
          <div className="gravItems">
              <div>
          <CardTitle title= {data.length} subtitle="Items shared" />
    
          {<CardTitle title={borrowed.length} subtitle="Items borrowed" />}
          </div>
            


             
          <Gravatar email={itemowner.email} size={170} />
              </div>
          </div>

      
          </Card>

    </div>

);
}






export default ProfileCard;