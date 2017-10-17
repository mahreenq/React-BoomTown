//ACTIONS

const GET_ITEMS = 'GET_ITEMS';
const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';


//ACTION CREATORS
export const getItems = (items) => ({ //ACTION OBJECT
    type: GET_ITEMS,
    payload: items    //payload is the 21 items
  });

  export const getItemsLoading= () => ({ //ACTION OBJECT
    type: GET_ITEMS_LOADING
  });

  export const getItemsError = (error) => ({ //ACTION OBJECT
    type: GET_ITEMS_ERROR,
    payload: error
  });


  export const fetchItemsAndUsers = () => dispatch => { //HELPER FN
    dispatch(getItemsLoading());

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
         dispatch(getItems(dataArray));
     })
    .catch(err => {
         dispatch(getItemsError(err));
     });
  }
  //REDUCERS


  export default (state = { isLoading : false, itemsData : [], itemsBorrowed : [],  error:''}, action) => {
      switch(action.type){

        case GET_ITEMS:
            return {...state, itemsData: action.payload, isLoading: false, error:""};
         
        case GET_ITEMS_LOADING:
            return {...state, isLoading:true, error:''};

        
        case GET_ITEMS_ERROR:
            return {...state, isLoading:false, error:action.payload};

        default:
            return state;
            
      }
  };
  