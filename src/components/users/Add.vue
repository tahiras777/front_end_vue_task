<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";
import useUser from "@/composables/usersListApi";
const {userData, error, statusCode, createUser } = useUser();
const formData = reactive({
  first_name: "",
  last_name: "",
  email: "",
});
const handleAddUserForm = async () => {
  await createUser(formData);
  if (statusCode.value === 201) {
    document.getElementById("AddUserForm").reset();
  }
};
</script>

<template>
  <div class="shadow-md pb-6">
    <div class="heading_bg p-4">
      <h1 class="text-3xl font-bold text-center">Add User</h1>
    </div>

    <form
      @submit.prevent="handleAddUserForm"
      class="w-full"
      id="AddUserForm"
    >
    <!-- first name -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="first_name"> First Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="first_name"
            v-model.trim="formData.first_name"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="write your name"
            required
          />
        </div>
      </div>
      <!-- last name -->
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="first_name"> Last Name : </label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="last_name"
            v-model.trim="formData.last_name"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="write your name"
            required
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
            v-model.trim="formData.email"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="write your email"
            required
          />
        </div>
      </div>

      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium py-2 rounded-md px-6 hover:bg-purple-800 mr-6"
        >
          Add
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
      v-if="error"
    >
      Oops! Error encountered: {{ error.message }}
    </div>
    <div
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg font-medium"
      role="alert"
      v-if="statusCode === 201"
    >
      Student Added Successfully
    </div>
  </div>
</template>

<style scoped>
@import "@/assets/global.scss";

</style>