import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

class ItemsContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
            isLoading : false,
            itemsData : [],
            users : [],
      };
  }

  componentDidMount(){

        let itemsjson = 'http://localhost:3001/items';
        let usersjson = 'http://localhost:3001/users';
        let urls = [itemsjson, usersjson];

    this.setState({isLoading:true});

    Promise.all(
      urls.map(url =>fetch(url).then(resp => resp.json())
        )).then(data => {

                const [items,users] = data;
                
                // console.log(users);
                // console.log(items);

                let dataArray = items.map(item =>{
                const newitemowner = users.find( (user)=> item.itemowner === user.id)
                const lentToProfile = users.find( (user) => item.borrower === user.id)
                item.itemowner = newitemowner;
                item.borrower = lentToProfile

                return item;
              })



                this.setState({itemsData:dataArray, isLoading: true, users:users});

          }).catch(function(err){
            console.log('error');
          })
    }

      render(){
        const itemTitles = this.state.itemsData;
          return (

            <Items  data={this.state.itemsData} users={this.state.users} />

          );
        }

    }



ItemsContainer.propTypes = {

};

export default ItemsContainer;
//container
