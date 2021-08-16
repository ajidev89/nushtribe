<template>
       <div @dblclick="changeAdress" v-if="changeDelivery" class=" flex space-x-2 bg-white shadow-md rounded py-4 md:py-2 px-4 ">
            <p class="text-sm">{{ Address }}</p>
            <div class="flex-grow flex justify-end" @click="changeAdress">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        <div v-else class=" flex space-x-2 bg-white shadow-md rounded py-4 md:py-2 px-4 ">
            <div class="flex z-30">
                <input type="text" v-model="newAddress" @focus="showCancel" @keyup.enter="FilterAddress" class="focus:outline-none w-64" placeholder="Enter Delivery Address">
                <div v-if="cancel" @click="Unchange" class="flex-grow flex justify-end items-center font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                </div>
                 <div @click="Unchange" class="fixed top-0 left-0 h-full w-full -z-10" ></div>
            </div>
                
                <div @click="FilterAddress" class="flex items-center flex-grow justify-end z-30">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </div>
        </div>

            <!-- <div class="flex justify-center mx-3 md:mx-16">
                <div class="bg-white shadow-lg rounded-md w-full p-4 " >
                        <div class="flex justify-center">
                            <h1 class="text-gray-500 font-semibold" >Delivery Location</h1>
                        </div>
                         <div class="h-0.5 bg-gray-200 w-full mt-4" ></div>
                         <div class="flex justify-center space-x-3 mt-4">
                             <p class="font-semibold">{{ Address }}</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                         </div> 
                </div>
             </div> -->
</template>

<script>
export default {
    name:['DeliveryAddress'],
    mounted() {
         this.Address = localStorage.getItem('Address') ? localStorage.getItem('Address') : '' ;
    },
    data(){
        return{
            Address:"",
            changeDelivery:true,
            newAddress:"",
            cancel:false
        }
    },
    methods:{
        changeAdress(){
                this. changeDelivery = false;
        },
        FilterAddress(){
            if (this.newAddress) {
                localStorage.setItem('Address',this.newAddress);
                this.Address = this.newAddress
                this. changeDelivery = true;
                // Emit changes
            }
        },
        showCancel(){
            this.cancel = true
        },
        Unchange(){
            this. changeDelivery = true;
        }
    }
}
</script>

<style>

</style>