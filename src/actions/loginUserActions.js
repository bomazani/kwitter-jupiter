// Action Types
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';

// Action Creators
export const loginUser  = (credentials) => {
  
    return function(dispatch){
        console.log("credentials: ", credentials);

        const url = "https://kwitter-api.herokuapp.com/auth/login";

        const postRequestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials),
        }

        fetch(url, postRequestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("data: ", data);
            if (data.success) {
                dispatch({ type: AUTH_USER,
                        username: credentials.username,
                        token: data.token  });
            } else {
                dispatch({ type: UNAUTH_USER,
                    message: "Login Unsuccessful" });
            }
        }).catch(error => {
            return error;
        });
    }
  }

  export const logoutUser = () => {  
    return function (dispatch) {
      dispatch({ type: UNAUTH_USER });
    }
  }