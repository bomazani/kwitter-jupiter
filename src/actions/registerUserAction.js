// Action Types
export const REGISTER_USER = 'REGISTER_USER';

// Action Creators
export const registerUser  = (userDetails) => {
  
    return function(dispatch){
        console.log("userDetails", userDetails);

        const registerUrl = "https://kwitter-api.herokuapp.com/auth/register";

        const postRequestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userDetails),
        }

        fetch(registerUrl, postRequestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("data: ", data);
           return { userDetails: {username: data.username,displayName: data.displayName}}
        }).catch(error => {
            return error;
        });
    }
  }

 