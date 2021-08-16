<template>
    <div class=" bg-gray-100 relative">
        <img :src="header" class="w-full h-300 -z-10 object-cover" alt="">
        <div class="absolute top-0 w-full h-full bg-overlay flex justify-center items-center">
            <div class="text-gray-100">
                <h2 class="text-5xl font-semibold text-center">{{name}}</h2>
                <p class="text-sm text-center ">{{address }}</p>
            </div>
        </div>
    </div>
    <div class="bg-brand p-4 md:p-0">
        <div class="grid md:grid-cols-2 gap-4 p-2 mx-0 md:mx-16">
                <div class="relative">
                        <div class="h-32 w-32 -top-14 md:h-64 md:w-64  shadow-lg rounded-full absolute md:-top-24 left-0 bg-white flex items-center justify-center" >
                            <img src="@/assets/svg/logo.svg" class="md:h-36 md:w-36 " alt="">
                        </div>
                </div>
                <div class="hidden md:flex justify-end space-x-5">
                      <!-- <div class="bg-white shadow-lg text-black p-2 rounded flex space-x-2" >
                               <input type="text" class="focus:outline-none" placeholder="Search food">
                                <div class="flex items-center margin-24">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                        </div> -->
                        <div class="mt-4 md:mt-0">
                            <DeliveryAddress/>
                    </div>
                </div>
            </div>

        </div>

    
</template>

<script>
import DeliveryAddress from "@/components/DeliveryAddress.vue";
export default {
    name:"VendorBreadcrumb",
    components:{
        DeliveryAddress
    },
    props:['header','name','address']
}
</script>

<style>

</style>