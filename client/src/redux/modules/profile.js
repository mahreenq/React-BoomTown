//ACTIONS

const GET_PROF_ITEMS = 'GET_ITEMS';
const GET_PROF_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_PROF_ITEMS_ERROR = 'GET_ITEMS_ERROR';


//ACTION CREATORS
export const getProfItems = (items) => ({ //ACTION OBJECT
    type: GET_PROF_ITEMS,
    payload: items    //payload is the 21 items
  });

  export const getProfItemsLoading= () => ({ //ACTION OBJECT
    type: GET_PROF_ITEMS_LOADING
  });

  export const getProfItemsError = (error) => ({ //ACTION OBJECT
    type: GET_PROF_ITEMS_ERROR,
    payload: error
  });



  export const fetchProfItemsAndUsers = () => dispatch => { //HELPER FN
    dispatch(getProfItemsLoading());

    let itemsjson = 'http://localhost:3001/items';
    let usersjson = 'http://localhost:3001/users';
    let urls = [itemsjson, usersjson];

Promise.all(
  urls.map(url =>fetch(url).then(resp => resp.json())
    )).then(data => {
            
            const [items,users] = data;

            let dataArray = items.map(item =>{
                const newitemowner = users.find( (user)=> item.itemowner === user.id)
                const lentToProfile = users.find( (user) => item.borrower === user.id)
            item.itemowner = newitemowner;
            item.borrower = lentToProfile
                
            return item;

         });
         dispatch(getProfItems(dataArray));
        // console.log(dataArray);
       
     
     })
    .catch(err => {
         dispatch(getProfItemsError(err));
     });
  }



  //REDUCERS


  export default (state = { isLoading : false, itemsData : [], itemsBorrowed : [],  error:''}, action) => {
      switch(action.type){

        case GET_PROF_ITEMS:
            return {...state, itemsData: action.payload, isLoading: false, itemsBorrowed: [], error:""};
         
        case GET_PROF_ITEMS_LOADING:
            return {...state, isLoading:true, itemsBorrowed: [], error:''};

        
        case GET_PROF_ITEMS_ERROR:
            return {...state, isLoading:false, itemsBorrowed: [], error:action.payload};

        default:
            return state;
            
      }
  };
  