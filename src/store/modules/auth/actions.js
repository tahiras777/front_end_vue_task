import { SIGNUP_ACTION } from "@/store/storeconstants";
import { SET_USER_TOKEN_MUTATION } from "@/store/storeconstants";
import router from '@/router'
import axios from "axios";

export default {
   async [SIGNUP_ACTION](context, payload) {

            fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                username: 'kminchelle', // here we can add our payload with real api like payload.email
                password: '0lelplR',
                expiresInMins: 30, // optional, defaults to 60
            })
            })
            .then(res => {
                if (res?.status === 200) {
                    router.push('/users');
                }
                // Return the JSON response to the next 'then' block
                return res.json();
              })
              .then(data => {
                context.commit(SET_USER_TOKEN_MUTATION, {
                    email:data.email,
                    token: data?.token,
                    userId: data?.id,
                    userName: data?.username
                });
               
              })
              .catch(error => {
                // Log any errors to the console
                console.error('Error:', error);
              });
    }
};