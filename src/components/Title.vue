<template>
  <div class=" bg-gray-100 relative">
        <img src="/resturants/Headers/resturant-header-img.jpg" class="w-full h-300 -z-10 object-cover" alt="">
        <div class="absolute top-0 w-full h-full bg-overlay flex justify-center items-center">
            <div class="text-gray-100">
                <h2 class="text-5xl font-semibold text-center">{{name}}</h2>
                <div v-if="address">
                     <p class="text-sm text-center ">{{ address }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 name:"Title",
 props:['name','address']
}
</script>

<style>

</style>