import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

class ItemsContainer extends Component {
  constructor(props){
    super(props);
      this.state = {
            isLoading : false,
            itemsData : [],
            lala: "lala"
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

      let dataArray = items.map(item =>{
        const newitemowner = users.find( (user)=> item.itemowner === user.id)
        item.itemowner = newitemowner;

        return item;

      })
      this.setState({itemsData:dataArray, isLoading: true});


  }).catch(function(err){
    console.log('error');
  })
}
  render(){
  
    const itemTitles = this.state.itemsData;

      return (


        <Items  name="mahreen" data={this.state.itemsData} />

      );
  }
}






ItemsContainer.propTypes = {

};



export default ItemsContainer;
//container
