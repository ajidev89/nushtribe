<template>
    <h1 class="text-2xl font-semibold" >Order Summary</h1>
      <div class="flex justify-between font-semibold text-sm">
        <p class="text-base text-gray-500">Products</p>
    </div> 
    <div class="grid grid-rows-2  py-4">
          
             <FoodCart/>
             <FoodCart/>
                <!-- <div class=" text-sm border-white py-2 border-b-2">
                    <div class="flex justify-between text-base font-semibold" >
                        <div class="flex space-x-4">
                            <p class="">Chicken stew</p> 
                            <p>X</p>
                            <p>2</p>
                        </div>
                        <button class="text-red-500 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        </button>
                </div>
            </div> -->
            <div class="absolute bottom-0 left-0 w-full px-4">
                <div class="my-4">
                    <div class="grid grid-cols-2 border-b-2 pb-2">
                        <div>Subtotal</div>
                        <div class="text-right font-semibold">N12,000.00</div>
                        <div class="mt-2">Shipping Cost</div>
                        <div class="text-right font-semibold mt-2">N400.00</div>
                        <div class="mt-2">Discount</div>
                        <div class="text-right font-semibold mt-2">-N600.00</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="mt-4">Total</div>
                        <div class="text-right font-semibold mt-4">N11,400.00</div>
                    </div>
            </div>
                    <button @click="pay" class="bg-brand shadow-lg flex justify-center text-black font-semibold rounded w-full mb-4 py-4" >
                            Pay Now
                    </button>
            </div>
       
    </div>
</template>

<script>
import FoodCart from "@/components/FoodCart.vue";
export default {
    name:['OrderSummary'],
    props:['email','name','phone'],
    components:{
        FoodCart
    },
    methods:{
        pay(){
            if (! uithis.email && ! this.name && ! this.phone) {
                this.$emit('errorForm');   
            }else{
                 this.$router.push('/payment-information')   
            }
        }
    }
}
</script>

<style>

</style>