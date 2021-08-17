<template>
       <div @dblclick="changeAdress" v-if="changeDelivery" :class="{'md:py-4': name}" class=" flex space-x-2 bg-white shadow-md rounded py-4 md:py-2 px-4 ">
            <p class="text-sm">{{ Address }} </p>
            <div class="flex-grow flex justify-end" @click="changeAdress">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
        <div v-else :class="{'md:py-4': name}" class=" flex space-x-2 bg-white shadow-md rounded py-4 md:py-2 px-4 ">
            <div class="flex z-30 w-4/5">
                <input type="text" v-model="newAddress" @focus="showCancel" @keyup.enter="FilterAddress" class="focus:outline-none w-full" placeholder="Enter Delivery Address">
                <div v-if="cancel" @click="Unchange" class="text-gray-400 flex-grow flex justify-end items-center font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                    </svg>
                </div>
                 <div @click="Unchange" class="fixed top-0 left-0 h-full w-full -z-10" ></div>
            </div>
            <div @click="FilterAddress" class="flex items-center font-semibold rounded flex-grow justify-center z-30 bg-brand text-sm py-0.5 px-2">
                Change
            </div>
        </div>
</template>

<script>
export default {
    name:['DeliveryAddress'],
    props:['name'],
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