

  export const addUser = (user) => {
    window.localStorage.setItem("user",JSON.stringify(user));
  }

  export const getUser = () => {
    return  window.localStorage.getItem("user");
  }


  export const clearUser = () =>{
    window.localStorage.removeItem("user");
  }