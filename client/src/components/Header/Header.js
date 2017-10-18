import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';

import RaisedButton from 'material-ui/RaisedButton';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import logo from '../../images/boomtown-logo.svg';
import * as actions from '../../redux/modules/items';

import {Dropdown} from './Dropdown';


//console.log(actions);

const Header =() => {


  // handleChange = (event, index, value) => this.setState({value});


    return (
                <Toolbar title="" style = {{  backgroundColor:'#FAFAFA',  }}>
              
                    <div className="LeftNav">
                          <img className="boomlogo" src={logo} /> 
                          <Dropdown />
                    </div>
                      
                    <div className="navButtons">
                        <RaisedButton label="MY PROFILE" primary={true} style={{margin:12,}} />
                        <RaisedButton label="LOGOUT" secondary={true} style={{margin:12,}} />
                    </div>

                </Toolbar>

          );

    }










// const Header= () => {

//   return (
//       <Toolbar title=""
//       style = {{
//         backgroundColor:'#FAFAFA',
    
//       }}>
 


//  <div className="LeftNav">
//     {/* <Link to = '/' >  <img className="boomlogo" src={logo} /> </Link> */}
    
//      <img className="boomlogo" src={logo} /> 
//       <SelectField style={{marginLeft:`1.5rem`}}
//           floatingLabelText="Filter by Tag"
         
//           /* value={this.state.value}
//           onChange={this.handleChange} */
//           >
//         <MenuItem value={1} primaryText="Household Items" />
//         <MenuItem value={2} primaryText="Recreational Equipment" />
//         <MenuItem value={3} primaryText="Musical Instruments" />
//         <MenuItem value={4} primaryText="Tools" />
//         <MenuItem value={5} primaryText="Physical Media" />
//         <MenuItem value={6} primaryText="Sporting Goods" />
//         <MenuItem value={7} primaryText="Electronics" />
//       </SelectField >

//   </div>
//  <div className="navButtons">
//     <RaisedButton label="MY PROFILE" primary={true} style={{margin:12,}} />
//     <RaisedButton label="LOGOUT" secondary={true} style={{margin:12,}} />
//   </div>

//     </Toolbar>



// );
// }



export default Header;