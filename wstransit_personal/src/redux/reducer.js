//set intial state for props 
//set action types
//set action creators
// put user info into redux after log in 
import axios from 'axios';


const intialState = {
    fullName:'',
    email: '',
    password: '',
    street: '',
    zip:'',
    phone: '',
    eventcomments:'',
    eventname: '',
    posttitle: '',
    eventreviewcomment: '',
    likes: '',
    cart: [],
    eventbooked: [],
    total: 0
    
}


//sessions

const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const GET_USER = "GET_USER";
const SIGN_OUT = "SIGN_OUT";




export default function( state = initialState, action ) {
    let { payload } = action;
    switch( action.type ) {
      case LOGIN + '_FULFILLED':
        return Object.assign({}, state, { user: payload.username, cart: payload.cart, total: payload.total });
  
      case REGISTER + '_FULFILLED':
        return Object.assign({}, state, { user: payload.username, cart: payload.cart, total: payload.total });
  
      case GET_USER + '_FULFILLED':
        return Object.assign({}, state, { user: payload.username, cart: payload.cart, total: payload.total });
      
      case SIGN_OUT + '_FULFILLED':
      return {
        user: '',
        eventsbooked: [],
        cart: [],
        total: 0
      };


        default: return state;
    }
  }

  export function login( obj, history ) {
    return {
      type: LOGIN,
      payload: axios.post( URL.login, obj ).then( response => {
        history.push('/');
        return response.data;
      })
    };
  }
  
  export function register( obj, history ) {
    return {
      type: REGISTER,
      payload: axios.post( URL.register, obj ).then( response => {
        history.push('/');
        return response.data;
      })
    };
  }
  
  export function getUser() {
    return {
      type: GET_USER,
      payload: axios.get( URL.user ).then( response => response.data )
    };
  }

  export function signout( history ) {
    return {
      type: SIGN_OUT,
      payload: axios.post( URL.signout ).then( () => history.push('/') )
    };
  }



















const  UPDATE_NAME = "UPDATE_NAME";




function reducer( state = intialState, action ){
    console.log('REDUCER HIT: Action ->', action)



switch( action.type ) {
        
    case UPDATE_NAME:
        return Object.assign( {}, state , { fullName: action.payload } );


        default: return state;
    } 
}



export function updateName ( fullname ) {
    return {
        type: UPDATE_NAME,
        payload: fullname
    }
}







export default reducer; 