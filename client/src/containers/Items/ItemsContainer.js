import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {connect} from 'react-redux';
import {fetchItemsAndUsers} from '../../redux/modules/items'

import * as actions from '../../redux/modules/items';


class ItemsContainer extends Component {

  componentDidMount(){
    this.props.fetchItemsAndUsers();
    //this.props.handleDropDown(tagData);
}
      render() {
       const loading = this.props.isLoading;
      
          return ( 
          
             loading ? <Loader/> : <Items  data={this.props.itemsData}  />
            //this.state.itemsData.length > 0 ?<Items  data={this.state.itemsData} /> : null
          );
       }
  }


ItemsContainer.propTypes = {

};

const mapStateToProps = state => ({
  isLoading: state.items.isLoading,
  itemsData: state.items.itemsData,
  itemFilters: state.items.itemFilters
})

export default connect(mapStateToProps , actions)(ItemsContainer);
//container
//allows us to take all actions and bind to the container