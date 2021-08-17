<template>
  <h1 class="text-sm text-gray-500 font-semibold" >Order From:</h1>
    <div class="flex justify-between font-semibold text-lg">
        <p>Bukka</p>
    </div> 
    <h1 class="text-sm text-gray-500 font-semibold mt-4" >Estimated Time:</h1>
    <div class="flex justify-between font-semibold text-lg">
        <p>40-60 mins</p>
    </div> 
    <div v-if="cart.length">
        <div class="h-400 overflow-y-auto mt-">
            <div class="grid grid-rows-2 mb-16">   
                <FoodCart/>
                <FoodCart/>
                <FoodCart/>
                <FoodCart/>
                <FoodCart/>
            </div>
        </div>
    </div>
    <div v-else class="flex justify-center items-center my-28  text-gray-400 ">
            <div class="block">
                <div class="flex justify-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <p class="text-black text-center mx-3 mt-3">
                     Your cart is empty.
                </p>
            </div>
           
    </div>
     <div class="absolute bottom-0 left-0 w-full px-4 mt-16">
        <button @click="Checkout()" class="bg-brand shadow-lg text-black font-semibold rounded w-full my-4 py-4" >
            Proceed to Checkout
        </button>
    </div>    
    
</template>

<script>
import FoodCart from "@/components/FoodCart.vue";
export default {
    name:['FoodCart'],
    components:{
        FoodCart
    },
    data(){
            return{
                Quantity: 1,
                cart : [ ]
            }
        },
    methods:{
        Checkout(){
            this.$router.push('/checkout')
        }
    },
    mounted(){
       this.cart = localStorage.getItem('nushtribe_cart') ? localStorage.getItem('nushtribe_cart') : [ ] ;
    }
}
</script>

<style>

</style>