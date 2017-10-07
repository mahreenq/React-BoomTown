import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

import Gravatar from 'react-gravatar'









const ItemCard= ({item }) => {

  return (
 <div class ="singleItem">

    <Card>

    <CardMedia
      overlay={<CardTitle title= "" subtitle={item.available ? null : `Lent to ${item.borrower} `}/>}
    >
      <img src={item.imageurl} alt="" />
    </CardMedia>

         <CardHeader
           title={item.itemowner.fullname}
           subtitle={item.created}
           avatar= {<Gravatar email={item.itemowner.email} />}
         />


         <CardTitle title={item.title} subtitle={item.tags} />


         <CardText>
           {item.description}
         </CardText>


         <CardActions>
          {item.available ? <FlatButton label="Borrow" /> : null }

         </CardActions>
    </Card>




</div>

);
}






export default ItemCard;
