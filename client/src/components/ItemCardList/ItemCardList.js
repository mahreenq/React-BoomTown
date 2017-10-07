//map
import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './styles.css';

import ItemCard from '../ItemCard';

var Masonry = require('react-masonry-component');


const ItemCardList = ({data}) => {
      return (
        <Masonry className="my-gallery">
              {data.map((item)=>{
                    return <ItemCard key={item.id} item={item}/>
                  })}
        </Masonry>
      )
}





export default ItemCardList;
