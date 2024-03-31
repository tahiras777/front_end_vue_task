import { ref } from "vue";
import  axios  from "axios";

export default function useUser() {
   const url = 'https://66045afb2ca9478ea17dda4f.mockapi.io/api/v1/users/';
   const userData = ref([]);
   const error = ref(null);
   const dellError = ref(null);
   const statusCode = ref(null);
//    get all user
const getAllUser = async () => {
    userData.value = [];
    error.value = null;

    try{
        const res = await axios(url);
        userData.value  = res?.data;
    } catch (err){
        error.value = err;
    }
    statusCode.value = null;

};

// get single user data on id 
const getSingleUser = async (id) => {
    userData.value = [];
    error.value = null;
    try {
        const res = await axios(url + id);
        userData.value  = res?.data;
    } catch (err) {
        error.value = err;
    }
};

// Add new user
const createUser = async (formData) => {
    userData.value = [];
    error.value = null;
    statusCode.value = null;
    try {
        const config = {
            method: 'POST',
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(formData)
        }
        const res = await axios(config);
        userData.value - res?.data;
        statusCode.value = res?.status
        
    } catch (err) {
        error.value = err;
        
    }
}
// update user 
const updateUser = async (id, data) => {
    userData.value = [];
    error.value = null;
    statusCode.value = null;
    
    try {
        const config = {
            method: 'PUT',  //we can also add patch for update data 
            url: url + id,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        }
        const res = await axios(config);
        userData.value = res?.data;
        statusCode.value = res?.status;
    } catch (err) {
        error.value = err
    }
}
// delete user 
const destroyUser = async (id) => {
    userData.value = [];
    error.value = null;
    statusCode.value = null;
    try {
        const config = {
            method: 'DELETE',  //we can also add patch for update data 
            url: url + id,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        const res = await axios(config);
        statusCode.value = res?.status
    } catch (err) {
        dellError.value = err
    }
}
return {
    userData,
    error,
    dellError,
    statusCode,
    getAllUser,
    getSingleUser,
    createUser,
    updateUser,
    destroyUser
    
}
}