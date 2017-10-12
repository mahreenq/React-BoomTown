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

import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';




const ItemCard= ({item }) => {

  return (
 <div className ="singleItem">
   

    <Card>
      <CardMedia
        overlay= {item.available  ? null : <CardTitle title= "" subtitle= {`Lent to ${item.borrower.fullname} `} />}
      >
        <img src={item.imageurl} alt="" />
      </CardMedia>

          <Link to = {`/profile/${item.itemowner.id}`} >
          
          <CardHeader
             title={item.itemowner.fullname}
             subtitle= {`${distanceInWords(item.created, startOfToday())} ago `}
             avatar= {<Gravatar email={item.itemowner.email} />}
           />
           </Link>


          <CardTitle title={item.title}
           subtitle={ item.tags.map((tag,i) => { return  `${tag}${ item.tags.length - 1 === i ? '' : ', '}` } ) }
          />

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
