import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCardList from '../../components/ItemCardList'


const Share = ({data }) => {

  return (
      <div class="allItems">
        <ItemCardList data={data}/>
      </div>

    );
}

Share.propTypes = {

}

export default Share;

//presentational
