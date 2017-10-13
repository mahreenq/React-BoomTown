import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';





class ProfileContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
            isLoading : false,
            itemsData : [],
            itemsBorrowed: [],

      };
      let USERID = this.props.match.params.USERID;
      //console.log(USERID);
  }
 
  componentDidMount(){

        let itemsjson = 'http://localhost:3001/items';
        let usersjson = 'http://localhost:3001/users';
        let urls = [itemsjson, usersjson];

    this.setState({isLoading:true});

    Promise.all(
      urls.map(url =>fetch(url).then(resp => resp.json())
        )).then(data => {
                let USERID = this.props.match.params.USERID;
                const [items,users] = data;

                let dataArray = items.map(item =>{
                  const newitemowner = users.find( (user)=> item.itemowner === user.id)
                  const lentToProfile = users.find( (user) => item.borrower === user.id)
                  item.itemowner = newitemowner;
                  item.borrower = lentToProfile
  
                  return item;

              })
              
              let itemsBorrowedFilter = items.filter((item) => {

                   return ( 
                    item.borrower == undefined ? null : item.borrower.id === USERID               
                   );
              })

              
              let filteredDataArray = dataArray.filter((item) => {
                return (
                  USERID === item.itemowner.id
                );
              })


    
                this.setState({itemsData:filteredDataArray, isLoading: true, itemsBorrowed:itemsBorrowedFilter});

          }).catch(function(err){
            console.log('error');
          })
    }

      render(){
        const itemTitles = this.state.itemsData;
        const dataLength = this.state.itemsData.length;
        const itemsBorrowed = this.state.itemsBorrowed;



          return (

            itemTitles.length > 0   ? <Profile  data={itemTitles} profileItemsLength= {dataLength} 
            itemsBorrowed =  {itemsBorrowed}  /> : null  

            
            
          );
        }

    }



ProfileContainer.propTypes = {

};

export default ProfileContainer;
//container
