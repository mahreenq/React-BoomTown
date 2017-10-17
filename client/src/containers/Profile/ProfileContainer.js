import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';


import Header from '../../components/Header';
import Loader from '../../components/Loader';
import {connect} from 'react-redux';
import {fetchProfItemsAndUsers} from '../../redux/modules/profile'

class ProfileContainer extends Component {

  
    componentDidMount(){
  
      this.props.dispatch(fetchProfItemsAndUsers());

    }
  
        render() {
         const loading = this.props.isLoading;
         let data =  this.props.itemsData;
          let USERID = this.props.match.params.USERID;
          //console.log(USERID);

         let filteredDataArray = data.filter((item) => {
           return (
            USERID === item.itemowner.id
           )
         })

         let itemsBorrowedFilter = data.filter((item) => {
          return ( 
                    item.borrower === undefined ? null : item.borrower.id === USERID               
                   );
         })



            return ( 

               loading ? <Loader/> : 
                                      this.props.itemsData.length > 0 ? <Profile   data={filteredDataArray} borrowed = {itemsBorrowedFilter} /> : null 
              
            );
    
          }
      
    }
  
  
    
  ProfileContainer.propTypes = {
  
  };
  
  const mapStateToProps = state => ({
    isLoading: state.items.isLoading,
    itemsData: state.items.itemsData,
    itemFilters: state.items.itemFilters
  })
  
  export default connect(mapStateToProps)(ProfileContainer);
  //container