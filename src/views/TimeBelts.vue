<template>
    <Header/>  
        <div class=" bg-gray-100 py-14">
            <DeliveryAddress/>
                <div class="mx-16 mt-4">
                    <h1 class="text-2xl text-left  font-semibold">Choose a time Belt</h1>
                    <div class="grid grid-cols-4 gap-8 mt-6">
                        <div class="flex justify-center">
                            <div class= "bg-indigo-600 text-gray-100 w-96 py-14 shadow-md rounded-lg px-6">
                                <h1 class="text-4xl ">Breakfast</h1>
                                <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque eveniet, nulla quam quo facilis?.</p>
                                <div class="flex justify-center mt-8">
                                    <button class="py-2 px-5 bg-black rounded-full">Book Order</button>
                                </div>
                            </div>
                        </div>
                         <div class="flex justify-center">
                            <div class= "bg-indigo-600 text-gray-100 w-96 py-14 rounded-lg px-6">
                                <h1 class="text-4xl ">Breakfast</h1>
                                <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque eveniet, nulla quam quo facilis?.</p>
                                <div class="flex justify-center mt-8">
                                    <button class="py-2 px-5 bg-black rounded-full">Book Order</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class= "bg-indigo-600 text-gray-100 w-96 py-14 shadow-md rounded-lg px-6">
                                <h1 class="text-4xl ">Breakfast</h1>
                                <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque eveniet, nulla quam quo facilis?.</p>
                                <div class="flex justify-center mt-8">
                                    <button class="py-2 px-5 bg-black rounded-full">Book Order</button>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <div class= "bg-indigo-600 text-gray-100 w-96 py-14 shadow-md rounded-lg px-6">
                                <h1 class="text-4xl ">Breakfast</h1>
                                <p class="mt-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque eveniet, nulla quam quo facilis?.</p>
                                <div class="flex justify-center mt-8">
                                    <button class="py-2 px-5 bg-black rounded-full">Book Order</button>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
    <Footer/>
</template>

<script> 
import Header from '@/components/Header.vue'
import Footer from "@/components/Footer.vue";
import DeliveryAddress from "@/components/DeliveryAddress.vue";

export default {
    name: 'TimeBelts',
    components: {
    Header,Footer,DeliveryAddress
    }
 

}
</script>

<style>

</style>