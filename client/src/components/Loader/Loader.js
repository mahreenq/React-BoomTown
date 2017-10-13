import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import CircularProgress from 'material-ui/CircularProgress';



const Loader= () => {

  return (
    <div className = "loader">
    <CircularProgress size={80} thickness={5} />
    </div>

);
}



export default Loader;
