import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

import Gravatar from 'react-gravatar'

import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';



const ItemCard= ({item }) => {
  console.log(item);
  return (
 <div class ="singleItem">

    <Card>
      <CardMedia
        overlay= {item.available  ? null : <CardTitle title= "" subtitle= {`Lent to ${item.borrower}`} />}
      >
        <img src={item.imageurl} alt="" />
      </CardMedia>

          <Link to = {`/profile/${item.itemowner.id}`} >
          <CardHeader
             title={item.itemowner.fullname}
             subtitle={item.created}
             avatar= {<Gravatar email={item.itemowner.email} />}
           />
           </Link>

           <CardTitle title={item.title}
           subtitle={item.tags.map((tag)=> {
             return `${tag}, `
           })
         } />

           <CardText>
             {item.description}
           </CardText>

           <CardActions>
            {item.available   ? <FlatButton label="Borrow" style={{backgroundColor:'#212121', color:'#FAFAFA'}} /> : null }

           </CardActions>
      </Card>
    </div>

);
}






export default ItemCard;
