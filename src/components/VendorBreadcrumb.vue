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
                        <div class="h-32 w-32 -top-14 md:h-64 md:w-64  shadow-lg rounded-full absolute md:-top-32 left-0 bg-white flex items-center justify-center" >
                            <img src="@/assets/svg/logo.svg" class="md:h-36 md:w-36 " alt="">
                        </div>
                </div>
                <div class="hidden md:flex justify-end space-x-5">
                        <div class="mt-4 md:mt-0">
                            <!-- <DeliveryAddress/> -->
                            <div class="font-semibold">
                                    {{time}}
                            </div>
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
    props:['header','name','address','time']
}
</script>

<style>

</style>