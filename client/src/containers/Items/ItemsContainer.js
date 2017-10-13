import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {connect} from 'react-redux';
import {fetchItemsAndUsers} from '../../redux/modules/items'
//import Loader from '../../components/Loader';

class ItemsContainer extends Component {

  componentDidMount(){

    this.props.dispatch(fetchItemsAndUsers());
  }

      render() {
       const loading = this.props.isLoading;
        //console.log(this.state.itemsData);
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

export default connect(mapStateToProps)(ItemsContainer);
//container
