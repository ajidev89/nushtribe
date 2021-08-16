<template>
     <div class="bg-black rounded w-full overflow-hidden shadow-md text-gray-100" @click="pushResturant">
        <div>
            <img :src="PicUrl" class="md:h-300 object-cover w-full" alt="Resturant Name">
        </div>
        <div class="flex justify-end mt-3">
                <div class="bg-brand flex space-x-2 text-black rounded-l-full px-4 py-2 w-42 ">
                    <div class="flex items-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                    </div>
                    <p class="text-sm" >{{ time }}</p> 
                </div>
        </div>
        <div class="p-4">
                <router-link :to="{ name: 'ResturantsPage', params : { vendorName: url }}" class="text-xl font-semibold mt-2 transition duration-300 ease-in hover:text-brand">{{ name }}</router-link>
                <div class="flex space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <p class="text-sm">{{ rating }}</p>
                </div>
                <p class="text-sm mt-2" >Cuisine:
                    <span v-for="(item, index) in Cuisine" :key='item'>
                            <span v-if="index + 1 == Cuisine.length" >
                                {{item}}
                            </span>
                            <span v-else>
                                     {{item}},
                            </span>
                        </span>
                    </p>
        </div>
    </div>
</template>
<script>
export default {
    props:[ 'name','rating','Cuisine','time','logoUrl','PicUrl','url'],
    methods:{
        pushResturant(){
            this.$router.push({ name: 'ResturantsPage', params : { vendorName: this.url }})
        }
    }
}
</script>

<style>

</style>