<template>
  <div class="fixed flex justify-center items-center bg-overlay z-30 top-0 left-0 w-full h-full" @click.self="close()">
            <div class="relative bg-white rounded px-4 pb-8 w-768 h-500 overflow-y-auto">
                <div class="flex sticky top-0 bg-white py-2">
                    <p class="text-2xl font-semibold">{{ name }}</p>
                           <div class="flex justify-end items-center flex-grow" @click="close()">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                    </div>
                </div> 
                <div v-for="extra in extras" :key="extra" class=" border-b-2">
                    <div class="flex mt-3">
                            <p class="text-base font-semibold flex items-center"> {{ extra.name }}</p>
                                <div class="flex justify-end items-center flex-grow">
                                    <div class="bg-brand flex space-x-2 text-black rounded-l-full px-4 py-2 w-42 ">
                                            <p class="text-base font-semibold">Maximum of {{ extra.selectno }}</p> 
                                    </div>
                            </div>
                        </div>
                    <div v-for="item in extra.items" :key="item" class="mb-1">
                            <input type="checkbox" v-model="extrasInfo.index" :value="item">
                            {{ item }}
                    </div>
                    {{ extrasInfo }}
                </div>
                <div class="absolute bottom-0 mb-4">
                    <div class="flex space-x-3">
                            <div class="flex space-x-2 mt-4">
                                <button class="bg-brand text-black px-3 text-2xl" @click="minusQty" >-</button>
                                <p class="border py-1 px-3 flex items-center">{{ Quantity}} </p>
                                <button class="bg-brand text-black px-3 text-2xl" @click="addQty">+</button>
                            </div>
                            <div class="flex-grow w-full flex justify-end">
                                    <button @click="close" class="bg-brand shadow-lg text-black font-semibold rounded  mt-4 p-2 " >
                                            Add to cart
                                    </button>
                            </div> 
                    </div>
                </div>
            </div>
  </div>
</template>

<script>
export default {
        name:"Modal",
        props:[ 'name','extras'],
        data(){
            return{
                Quantity: 1,
                extrasInfo :[

                ]
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
        },
    mounted(){
        console.log(this.extras)
        for (let i = 0; i < this.extras.length; i++) {
            var obj = {};
            obj['extra'+i] = [ ];
            this.extrasInfo.push(obj)
        }
        console.log( this.extrasInfo);
    }
}
</script>

<style>

</style>