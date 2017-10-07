import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ItemCardList from '../../components/ItemCardList'


const Profile = ({data }) => {

  return (
      <div class="allItems">
        <ItemCardList data={data}/>
      </div>

    );
}

Profile.propTypes = {

}

export default Profile;

//presentational
