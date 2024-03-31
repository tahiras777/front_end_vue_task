<template>
    <div id="app" class="wallpaper-login">
    <div class="login-page">
       <div class="container-fluid">
          <div class="row">
             <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
                <div class="card login">
                    <div class="top_header">
                        <h1>Sign In</h1>
                        <span>login with valid email please</span>
                    </div>
                   
                   <form @submit.prevent="onLogin()">
                    <div class="form-group">
                        <label for="username">email</label>
                        <input type="text" class="form-control" id="email" v-model="email">
                        <div class="text-danger" v-if="errors.email" >{{ errors?.email }}</div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password">
                        <div class="text-danger" v-if="errors.password" >{{ errors?.password }}</div>
    
                    </div>
                    <div class="my-3">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
                </div>
             </div>
          </div>
    
       </div>
    </div>
    </div>
</template>
    <script>
    import loginValidations from '@/services/LoginValidations';
    import router from '@/router'
    import { mapActions } from 'vuex';
    import {SIGNUP_ACTION} from '../store/storeconstants'
    export default {
        data() {
            return {
                email: '',
                password: '',
                errors: [],
            }
        },
        methods: {
            ...mapActions( 'auth', {
                signup: SIGNUP_ACTION
            }),
            onLogin(){
                // check validation
                let validations = new loginValidations(
                    this.email, 
                    this.password );
                this.errors = validations.checkValidations();
                if ('email' in this.errors || 'password' in this.errors) {
                    return false
                }
                // Login with Endpoint 
                this.signup({email: this.email, password: this.password});
                // router.push('/users');
            }
        },
    }
    </script>
    <style lang="scss">
     .wallpaper-login {
          background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
             no-repeat center center;
          background-size: cover;
          height: 100%;
          position: absolute;
          width: 100%;
       }
    p {
       line-height: 1rem;
    }
    
    .card {
       padding: 20px;
    }
    
    
    
    .login-page {
       align-items: center;
       display: flex;
       height: 100vh;
    
      
    
       h1 {
          margin-bottom: 1.5rem;
       }
    }
    .top_header{
        display: flex;
        justify-content: space-between;
        span{
            font-size: 8px !important;
            color: coral !important;
        }
    }
    </style>
    