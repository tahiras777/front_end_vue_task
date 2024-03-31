<script setup>
import useUser from "../../composables/usersListApi";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const { userData, error, getSingleUser} = useUser();
const route = useRoute();
onMounted(() => {
    getSingleUser(route.params.id);
});
</script>

<template>
    <div class="heading_bg p-3 grid grid-cols-9">
      <div class="col-span-6 md:col-span-8">
        <h1 class="text-3xl font-bold text-center">
          View user
        </h1>
      </div>
    </div>
  <div class="shadow-md pb-6">
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>
    <table class="table-auto w-full" v-else-if="userData">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-2 px-4">ID</th>
          <th class="py-2 px-4">Name</th>
          <th class="py-2 px-4">Email</th>
        </tr>
      </thead>
      <tbody class="">
        <tr>
          <td class="py-2 px-4">{{ userData.id }}</td>
         
          <td class="py-2 px-4 flex items-center">
            <img  :src="userData?.avatar ? userData?.avatar : 'https://invisiblechildren.com/wp-content/uploads/2012/07/facebook-profile-picture-no-pic-avatar.jpg'" :alt="userData.first_name + ' ' + userData.last_name" class="h-8 w-8 rounded-full mr-2">
            
            {{ userData?.first_name+ ' ' +userData?.last_name }}</td>
          <td class="py-2 px-42">{{ userData.email }}</td>
        </tr>
      </tbody>
    </table>
    <div class="m-8 flex justify-center">
      <RouterLink :to="{ name: 'users' }">
        <button
          type="button"
          class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
        >
          Back to Home
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/global.scss";
</style>