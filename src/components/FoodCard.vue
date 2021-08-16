<template>
  <div class="bg-white shadow-md overflow-hidden rounded mt-4" >
      <div class="flex space-x-3">
          <div class="flex-shrink-0 w-32 h-32 md:w-52 md:h-52 ">
                <img src="/food/food-img-bukka.jpg" class="object-contain" alt="" @click.self="toggleModal()">
          </div>
          <div class="mt-4 flex-shrink h:32">
              <h1 class="font-semibold transition duration-200 ease-in hover:text-brand" @click="toggleModal()" >Chicken Laps</h1>
              <p class="text-sm overflow-ellipsis overflow-hidden whitespace-wrap   mt-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus fugit distinctio, corporis labore autem perferendis error quis sed harum est fuga veniam aliquid! Porro maiores vero est voluptates exercitationem voluptatibus.
              </p>
            <div class="flex justify-end my-3">
                <div class="bg-brand flex space-x-2 text-black rounded-l-full px-4 py-2 w-42 ">
                    <p class="text-base font-semibold">&#8358; 8,000</p> 
                </div>
            </div>

          </div>
 
      </div>

  </div>
  <div v-if=" showModal">
                <Modal @close="toggleModal" />
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
    name:"FoodCard",
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
        }
    }
}
</script>

<style>

</style>