<template>
    <h1 class="text-base text-gray-500 font-semibold" >Order From:</h1>
    <div class="flex justify-between font-semibold text-xl">
        <p>Bukka</p>
    </div> 
    <h1 class="text-base text-gray-500 font-semibold mt-4" >Estimated Time:</h1>
    <div class="flex justify-between font-semibold text-xl">
        <p>40-60mins</p>
    </div> 
    <div class="h-400 overflow-y-auto mt-">
    <div class="grid grid-rows-2 mb-16">   
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
        <FoodCart/>
  
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
                Quantity: 1
            }
        },
        methods:{
      
            Checkout(){
                this.$router.push('/checkout')
            }
        }
}
</script>

<style>

</style>