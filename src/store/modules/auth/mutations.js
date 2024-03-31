import { SET_USER_TOKEN_MUTATION } from "@/store/storeconstants";
export default {
    [SET_USER_TOKEN_MUTATION](state, payload){
        state.email = payload.email;
        state.token = payload.token;
        state.userName = payload.userName;
        state.userId = payload.userId;

          // Store the data into an object
          state.loggedUser = {
            email: payload.email,
            token: payload.token,
            userName: payload.userName,
            userId: payload.userId
        };
    }
};