<script setup>
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/solid";
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import useUser from "../../composables/usersListApi";
// import { mapState } from "vuex";
import { useStore } from 'vuex';
import { ref } from "vue";
import { computed } from 'vue';



const {
  userData,
  error,
  statusCode,
  delError,
  getAllUser,
  destroyUser,
} = useUser();
onMounted(getAllUser);

const deleteUser = async (id) => {
  if (!window.confirm("Are you sure ?")) {
    return;
  }
  await destroyUser(id);
  await getAllUser();

};
const store = useStore();
 // Access userData from the store state
const loggedUser = computed(() => store.state.auth.loggedUser);
    // const UserName = ref(store.state.userName);
</script>

<template>
  <div class="">
    <div class="heading_bg  p-3 grid grid-cols-9">
      
      <div class="col-span-6 md:col-span-8">
        <h1 class="text-3xl font-bold text-center">
          Users List
        </h1>
      </div>
      <div class="text-right">
        <RouterLink :to="{ name: 'add' }">
          <button
            class="text-white text-md bg-green-700 hover:bg-green-800 font-medium rounded-lg p-2 px-3"
          >
            <UserPlusIcon class="h-6 w-6 inline"/>
             Add User
          </button>
        </RouterLink>
      </div>
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>
    <div class="pb-4 table_bg" v-else-if="userData">
        <table class="table-auto w-full" >
      <thead class="bg-slate-600 text-white py-1 ">
        <tr>
          <th class="py-2 px-4">ID</th>
          <th class="py-2 px-4">Name</th>
          <th class="py-2 px-4">Email</th>
          <th class="py-2 px-4">Actions</th>
        </tr>
      </thead>
      <tbody class="">
        <tr v-for="({ id, first_name, last_name, email, }, i) in userData" :key="id">
          <td class="py-2 px-4">{{ ++i }}</td>
          <td class="py-2 px-4 flex items-center">
            <img :src="i?.avatar ? i?.avatar : 'https://invisiblechildren.com/wp-content/uploads/2012/07/facebook-profile-picture-no-pic-avatar.jpg'" :alt="first_name + ' ' + last_name" class="h-8 w-8 rounded-full mr-2">
            {{ first_name +' '+ last_name }}
          </td>
          <td class="py-2 px-4">{{ email }}</td>
          <td class="py-2 px-4">
            <RouterLink :to="{ name: 'view', params: { id: id } }">
              <EyeIcon class="text-blue-500 h-6 w-6 inline" />
            </RouterLink>
            <RouterLink :to="{ name: 'edit', params: { id: id } }">
              <PencilIcon class="text-emerald-500 h-6 w-6 inline mx-6" />
            </RouterLink>
            <TrashIcon
              class="text-red-500 h-6 w-6 inline cursor-pointer"
              @click="deleteUser(id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="delError"
    >
      Unable to Delete Student: {{ delError.message }}
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="statusCode === 200"
    >
      Student Deleted Successfully
    </div>
  </div>
</template>

<style scoped>
 .List_wrapper {
          background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
             no-repeat center center;
          background-size: cover;
          height: 100%;
          position: absolute;
          width: 100%;

        
       }
       .heading_bg{
        background: #e8e8e8 !important;
       }
       .table_bg{
        background: #d9eafd !important;
       }
</style>