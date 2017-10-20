//ACTIONS

const GET_ITEMS = 'GET_ITEMS';
const GET_ITEMS_LOADING = 'GET_ITEMS_LOADING';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
const HANDLE_DROP_DOWN = 'HANDLE_DROP_DOWN';


//ACTION CREATORS
const getItems = (items) => ({ //ACTION OBJECT
    type: GET_ITEMS,
    payload: items    //payload is the 21 items
  });

const getItemsLoading= () => ({ //ACTION OBJECT
    type: GET_ITEMS_LOADING
  });

const getItemsError = (error) => ({ //ACTION OBJECT
    type: GET_ITEMS_ERROR,
    payload: error
  });


  export const handleDropDown = (tagData) => {
    return function(dispatch) {
        dispatch({type: HANDLE_DROP_DOWN, payload:tagData});
    }
 }

  export const fetchItemsAndUsers = () => dispatch => { //HELPER FN (IMPLICIT)
    dispatch(getItemsLoading());

    let itemsjson = 'http://localhost:3001/items';
    let usersjson = 'http://localhost:3001/users';
    let urls = [itemsjson, usersjson];

Promise.all(
  urls.map(url =>fetch(url).then(resp => resp.json())
    )).then(data => {

            const [items,users] = data;
            // let tags = [];
            // console.log(tags);

            let dataArray = items.map(item =>{
                const newitemowner = users.find( (user)=> item.itemowner === user.id)
                const lentToProfile = users.find( (user) => item.borrower === user.id)
            item.itemowner = newitemowner;
            item.borrower = lentToProfile

            // item.tags.map((tag) => {
            //     if (tags.indexOf(tag) === -1) {
            //         tags.push(tag)
            //     }
            //     //console.log(tag);
            //     return tag;

            //     var tagArr = tag.map(function(item){ return item.name });
            //     var isDuplicate = tagArr.some(function(item, idx){ 
            //         return tagArr.indexOf(item) != idx 

                    
            //     });
            //     console.log(isDuplicate);
            // });


                
            return item;
         });
         dispatch(getItems(dataArray ));
         

         
     })
    .catch(err => {
         dispatch(getItemsError(err));
     });
  }
  //REDUCERS


  export default (state = 
                        {   isLoading : false, 
                            itemsData : [],  
                            tagValue:[],  
                            error:''}, 
                    action) => {
      switch(action.type){

        case GET_ITEMS:
            return {...state, itemsData: action.payload, isLoading: false, error:''};
         
        case GET_ITEMS_LOADING:
            return {...state, isLoading:true, error:''};
        
        case HANDLE_DROP_DOWN: 
            return {...state , tagValue: action.payload, error: '' };
        
        case GET_ITEMS_ERROR:
            return {...state, isLoading:false, error:action.payload};

        default:
            return state;
            
      }
  };
  