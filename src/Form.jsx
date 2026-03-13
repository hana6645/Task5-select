import React,{useReducer} from "react";
 const initialState ={
    name :"",
    email:""
 };
 function reducer(state,action){
    switch(action.type){
        case"SET FIELD":
        return{
            ...state,
             [action.field]:action.value
        };
        case "RESET":
             return initialState;
           
             default:
             return state;
    }
}
function Form(){
    const [state,dispatch]=useReducer(reducer,initialState)
    const handleChange =(e)=>{
        dispatch({
            type:"SET FIELD",
            field:e.target.name,
            value:e.target.value
           });
    }
    const handleSubmite = (e)=>{
        e.preventDefult();
        console.log(state);
    }
    return(
    <form onSubmit={handleSubmite}>
        <input type="text"
               name="name"
               value={state.name}
               onChange={handleChange}
               placeholder="ENTER NAME"
                        />
                        <input
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                        placeholder="ENTER EMAIL"
                    />
                    <button type="submit">submit  </button>
                
                  <button 
                      type="button"
                      onClick={()=>dispatch({type:"RESET"})}
                    >
                        Reset
                    </button>
    </form>
    );
  }
    export default Form;