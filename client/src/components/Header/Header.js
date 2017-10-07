import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

import SvgIcon from 'material-ui/SvgIcon';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import logo from '../../images/boomtown-logo.svg';


const Dropdown = (
  <div className="LeftNav">
    <img className="boomlogo" src="../../images/boomtown-logo.svg" />
      <DropDownMenu >
        <MenuItem value={1} primaryText="Filter by Tag " />
      </DropDownMenu >

  </div>
)


const RightButtons = (
  <div className="navButtons">
    <RaisedButton label="MY PROFILE" primary={true} style={{margin:12,}} />
    <RaisedButton label="LOGOUT" secondary={true} style={{margin:12,}} />
  </div>
)


const Header= () => {

  return (
    <div>
       <AppBar
       title=""
       style = {{
         backgroundColor:'#FAFAFA',
       }}
       iconClassNameRight="muidocs-icon-navigation-expand-more"
       iconElementRight = {RightButtons}
       iconElementLeft = {Dropdown}

       />



      </div>

);
}



export default Header;
