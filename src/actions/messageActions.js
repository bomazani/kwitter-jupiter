// Action Types
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const GET_A_MESSAGE = 'GET_A_MESSAGE';
export const GET_MESSAGES = 'GET_MESSAGES';


// Action Creators
export const addNewMessage  = (text) => {
    console.log("JSON.stringify({text}): ", JSON.stringify({text}))
    return function(dispatch){
        const url = "https://kwitter-api.herokuapp.com/messages";

        const postRequestOptions = {
            method: "POST",
            headers: {
                //"Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTI5NTkwNTc2fQ.mkjAhZhfaxCpUSfoGXq9Yw2xBJBP8xA2WGseI7Yp9Pc",
                "Authorization": "Bearer " + this.props.token,
                "Content-Type": "application/json"
                 
            },
            body: JSON.stringify({text}),
        }
    console.log("about to fetch");
        fetch(url, postRequestOptions)
        .then(response => response.json())
        .then(data => {
            console.log("data: ", data);
            dispatch({ type: ADD_MESSAGE,
                        id: data.id, 
                        text: data.text, 
                        userId: data.userId,  
                        updatedAt: data.updatedAt,
                        createdAt: data.createdAt
                     });
        }).catch(error => {
            return error;
        });
    }
}

export const getOneMessage  = (message) => {

    return function(dispatch){

    }
}