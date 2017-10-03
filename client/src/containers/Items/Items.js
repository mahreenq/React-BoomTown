import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const Items = () => {
  return (
    <Card>

    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="https://i.pinimg.com/736x/f4/30/48/f430483aa680e61f927e7f78cf158d6a--roller-quad-roller-disco.jpg" alt="" />



    </CardMedia>

    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg"
    />
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Borrow" />
    </CardActions>
  </Card>

  );
}

Items.propTypes = {

}

export default Items;
