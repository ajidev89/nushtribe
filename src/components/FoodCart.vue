<template>
  <div class=" text-sm border-white py-2 border-b-2">
            <div class="flex justify-between" >
                <div class="flex space-x-4">
                    <div class="">
                        <img src="/food/food-img-bukka.jpg" class="h-24 rounded" alt="">
                    </div> 
                    <div class="flex grow">
                        <div>
                                <div class="flex">
                                    <p class="text-base font-semibold">Chicken Grill</p>
                                    <div class="flex-grow">
                                        <div class="flex justify-end items-center">
                                            <button class="text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                    <p class="text-xs">Extra : Tomatoes,Pepsi</p>
                                    <div class="grid grid-cols-2 mt-2">
                                        <div class="flex space-x-2">
                                            <button class="bg-brand text-black px-3" @click="minusQty" >-</button>
                                            <p class="border py-1 px-3 flex items-center">{{ Quantity}} </p>
                                            <button class="bg-brand text-black px-3 " @click="addQty">+</button>
                                        </div>
                                        <div class="w-full">
                                            <div v-if="QuantityPrice" class="flex justify-end flex-grow">
                                                <p class="flex items-center text-base  text-right font-semibold">N{{formatNumber(QuantityPrice)}}</p>
                                            </div>  
                                            <div v-else class="flex justify-end flex-grow">
                                            <p class="flex items-center text-base  text-right font-semibold">N{{formatNumber(Amount)}}</p>
                                        </div> 
                                        </div>
                                    </div> 
                        </div>    
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:['FoodCart'],
    data(){
        return{
            Quantity: 1,
            Amount:8000,
            QuantityPrice:0
        }
    },
    methods:{
            addQty(){
                this.Quantity++
                this.QuantityPrice = this.Quantity * this.Amount
        },
        minusQty(){
            if (this.Quantity > 1) {
                this.Quantity--
                 this.QuantityPrice = this.Quantity * this.Amount
            }
        },
         formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
    }
}
</script>

<style>

</style>