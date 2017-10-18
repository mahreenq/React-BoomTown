import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import {BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';



import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import logo from '../../images/boomtown-logo.svg';
import * as actions from '../../redux/modules/items';



export const Dropdown = () => {

   // handleChange = (event, index, values) => this.setState({values});

    let tags = ["Household Items","Recreational Equipment","Musical Instruments", "Tools", "Physical Media" , "Sporting Goods" , "Electronics"   ]

    let tagsArray = tags.map(tag =>{
    return <MenuItem 
                    value={tag} 
                    key={tag} 
                    primaryText={tag}           
                    insetChildren={true} />;
                    {/* checked={values && values.indexOf(tag) > -1} */}
    // />;
         });

    return(
                                         
             <SelectField style={{marginLeft:`1.5rem`}} floatingLabelText="Filter by Tag" onChange={this.handleChange} multiple={true} >

             {tagsArray}

             </SelectField >

    );
}



     {/* <SelectField style={{marginLeft:`1.5rem`}} floatingLabelText="Filter by Tag" value={this.state.value} onChange={this.handleChange}> */}