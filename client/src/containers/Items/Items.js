import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCardList from '../../components/ItemCardList'
import ItemCard from '../../components/ItemCard'


const Items = ({data, users }) => {

  return (
      <div className="allItems">
        <ItemCardList data={data} users={users} />
         {/* <ItemCard users={users} />  */}
      </div>

    );
}

Items.propTypes = {

}

export default Items;

//presentational
