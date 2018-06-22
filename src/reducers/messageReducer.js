import { ADD_MESSAGE, GET_MESSAGES  } from '../actions/messageActions';


export const messagesState = {
    messages: []
}


export default (state = messagesState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                {
                  message: {
                  id: action.id,
                  text: action.text,
                  userId: action.userId,
                  updatedAt: action.updatedAt,
                  createdAt: action.createdAt
                  }
                }
              ]
        case GET_MESSAGES:
            return { ...state, messages: action.messages };
        default:
            return state;
    }

}