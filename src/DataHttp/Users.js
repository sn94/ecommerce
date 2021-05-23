 



export const LISTAR_FAKE_USERS =  ( ) => { 
  
  //tarea iniciada
 
  
  return async (dispatch, getState) =>{
    console.log("Completado:", getState("users_fake_completed"));
    let req = await fetch("https://jsonplaceholder.typicode.com/users");
    let resp = await req.json(); 
    //finalizada
    dispatch({ type: "LISTAR_FAKE_USERS", data:  resp })  ;
    console.log("Completado:", getState("users_fake_completed"));
  }
};

