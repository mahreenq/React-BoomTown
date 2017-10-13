//map
import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

import ItemCard from '../ItemCard';
import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';
var Masonry = require('react-masonry-component');


const ItemCardList = ({data }) => {


      return (
         
        <Masonry className="itemCardList">
              
              {data.map((item)=>{
                    return <ItemCard key={item.id} item={item}  />
                  })}
            
               
        </Masonry>
        
       
      )
}





export default ItemCardList;
