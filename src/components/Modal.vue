<template>
  <div class="fixed flex justify-center items-center bg-overlay z-30 top-0 left-0 w-full h-full" @click.self="close()">
            <div class="bg-white rounded px-4 pb-8 w-768 h-500 overflow-y-auto">
                <div class="flex sticky top-0 bg-white py-2">
                    <p class="text-2xl font-semibold">Chicken Grill</p>
                           <div class="flex justify-end items-center flex-grow" @click="close()">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                    </div>
                </div>
                <div class="flex ">
                        <!-- image -->
                        <div class="w-full mt-4">
                                <img src="/food/food-img-bukka.jpg" class="w-52 rounded" alt="">
                        </div>
                        <!-- Description -->
                        <div class="mt-4">
                            <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum porro iusto officiis! Recusandae totam voluptas, atque aperiam quam magni sed blanditiis quos tenetur rem. Corrupti necessitatibus odio optio voluptatibus?</p>
                            <div class="mt-4">
                                <p class="text-base font-semibold">&#8358; 8,000</p> 
                            </div>  
                        </div>
                </div>
                <div class=" border-b-2">
                    <div class="flex mt-3">
                            <p class="text-base font-semibold flex items-center">Meal Choice (Two meat special )</p>
                                <div class="flex justify-end items-center flex-grow">
                                    <div class="bg-brand flex space-x-2 text-black rounded-l-full px-4 py-2 w-42 ">
                                            <p class="text-base font-semibold">Maximum of 2</p> 
                                    </div>
                            </div>
                        </div>
                    <div class="mb-1">
                            <input type="checkbox" name="toppings[]">
                            Rice and Beans
                    </div>
                    <div class="mb-1">
                            <input type="checkbox" name="toppings[]">
                            Rice and Beans
                    </div>
                    <div class="mb-1">
                            <input type="checkbox" name="toppings[]">
                            Rice and Beans
                    </div>
                </div>
                 <div class=" border-b-2">
                    <div class="flex mt-3">
                            <p class="text-base font-semibold flex items-center">Select Beverage</p>
                                <div class="flex justify-end items-center flex-grow">
                                    <div class="bg-brand flex space-x-2 text-black rounded-l-full px-4 py-2 w-42 ">
                                            <p class="text-base font-semibold">Maximum of 1</p> 
                                    </div>
                            </div>
                        </div>
                    <div class="mb-1">
                            <input type="checkbox" name="toppings[]">
                            Coca-cola
                    </div>
                    <div class="mb-1">
                            <input type="checkbox" name="toppings[]">
                            Bigi Apple
                    </div>
                    <div class="mb-1">
                            <input type="checkbox" name="toppings[]">
                            Sprite
                    </div>
                </div>
                <div class="flex">
                      <div class="flex space-x-2 mt-4">
                            <button class="bg-brand text-black px-3 text-2xl" @click="minusQty" >-</button>
                            <p class="border py-1 px-3 flex items-center">{{ Quantity}} </p>
                            <button class="bg-brand text-black px-3 text-2xl" @click="addQty">+</button>
                        </div>
                        <div class="flex-grow flex justify-end">
                                <button @click="close" class="bg-brand shadow-lg text-black font-semibold rounded  mt-4 p-2 " >
                                        Add to cart
                                </button>
                        </div> 
                </div>
            </div>
  </div>
</template>

<script>
export default {
        name:"Modal",
        data(){
            return{
                Quantity: 1
            }
        },
        methods:{
            close(){
                this.$emit('close');
            },
            addQty(){
                 this.Quantity++
            },
            minusQty(){
                if (this.Quantity > 1) {
                    this.Quantity--
                }
            }
        }
}
</script>

<style>

</style>