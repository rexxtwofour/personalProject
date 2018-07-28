//set intial state for props 
//set action types
//set action creators



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
    likes: ''
    

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