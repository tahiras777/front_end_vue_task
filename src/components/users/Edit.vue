<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import useUser from "@/composables/usersListApi";
const { 
  userData, 
  error, 
  statusCode, 
  getSingleUser, 
  updateUser
 } = useUser();
const { params } = useRoute();
onMounted(() => {
    getSingleUser(params.id);
});

function handleUpdateUserForm() {
  updateUser(params.id, userData.value);
}
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="heading_bg p-4">
      <h1 class="text-3xl font-bold text-center">Update User</h1>
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>
    <form
      @submit.prevent="handleUpdateUserForm"
      class="w-full"
      v-else-if="userData"
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="userid"> ID : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="userid"
            class="border-2 border-gray-200 w-full py-2 px-4"
            readonly
            disabled
            v-model.trim="userData.id"
          />
        </div>
      </div>
      <!-- first name -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="first_name"> First Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="first_name"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
            v-model.trim="userData.first_name"
          />
        </div>
      </div>
        <!-- last name -->
        <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="last_name"> Last Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="last_name"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
            v-model.trim="userData.last_name"
          />
        </div>
      </div>
      <!-- email -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="email"> Email : </label>
        </div>
        <div class="w-4/5">
          <input
            type="email"
            id="email"
            class="border-2 border-gray-200 w-full py-2 px-4"
            required
            v-model.trim="userData.email"
          />
        </div>
      </div>

      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-800 mr-5"
        >
          Save
        </button>
        <RouterLink :to="{ name: 'users' }">
          <button
            type="button"
            class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
          >
            Back to Home
          </button>
        </RouterLink>
      </div>
    </form>

    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="statusCode === 200"
    >
      User Updated Successfully
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/global.scss";
</style>