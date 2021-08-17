<template>
  <div class="bg-white shadow-md overflow-hidden rounded mt-4" >
      <div class="flex space-x-3">
          <div class="flex-shrink-0 w-32 h-32 md:w-52 md:h-52 ">
                <img src="/food/food-img-bukka.jpg" class="object-contain" alt="" @click.self="toggleModal()">
          </div>
          <div class="mt-4 flex-grow h:32">
              <h1 class="font-semibold transition duration-200 ease-in hover:text-brand" @click="toggleModal()" >{{ data.name }}</h1>
              <p class="hidden md:flex text-sm overflow-ellipsis overflow-hidden whitespace-wrap   mt-3">
                  {{ data.description }}
              </p>
            <div class="flex justify-end my-3">
                <div class="bg-brand flex space-x-2 text-black rounded-l-full px-4 py-2 w-42 ">
                    <p class="text-base font-semibold">&#8358;{{ formatNumber(data.price) }}</p> 
                </div>
            </div>

          </div>
 
      </div>

  </div>
  <div v-if=" showModal">
                <Modal @close="toggleModal" :name="data.name" :extras="data.extras" />
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
    name:"FoodCard",
    props:['data'],
    components:{
        Modal
    },
    data(){
        return{
            showModal : 0
        }
    },
    methods:{
        toggleModal(){
            this.showModal = ! this.showModal
        },
        formatNumber(num) {
            return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        }
    }
}
</script>

<style>

</style>