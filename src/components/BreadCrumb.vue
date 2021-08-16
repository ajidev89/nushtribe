<template>
<div class="mx-3 md:mx-16 mt-8">
  <div class=" flex space-x-3 text-sm">
      <div class="">
          <router-link to="/" >Home</router-link>
      </div>
      <div class="flex items-center" >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div v-if="name == 'Resturants' ">
            <router-link :to="{ name: name }" >{{name}}</router-link>
      </div>
       <div v-if="name == 'Checkout' ">
            <router-link :to="{ name: name }" >{{name}}</router-link>
      </div>
  </div>
</div>

</template>

<script>
export default {
props:[
    'name'
],
}
</script>

<style>

</style>