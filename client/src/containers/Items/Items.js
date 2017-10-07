import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCardList from '../../components/ItemCardList'


const Items = ({data }) => {


console.log(data);
  return (
 <div class="allItems">
    <ItemCardList data={data}/>

</div>

);
}

Items.propTypes = {

}

export default Items;

//presentational
