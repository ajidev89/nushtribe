<template>
    <div ref="modal" class="h-screen flex items-center transition duration-500 ease-in-out bg-white absolute transform inset-0 " >
              <div class=" container pl-3 grid place-content-center">
                  <h4 class=" text-2xl md:text-4xl font-semibold">{{ msg }}</h4>
                  <div class="mt-3 w-full">
                       <input type="text"  class="border-2 py-3 px-5 md:w-768 focus:outline-none" v-model="input" placeholder="Enter Delievry Address">
                       <button @click="submit()" class="bg-black text-gray-100  py-3 px-5 border-2 border-black">Next</button>                    
                   </div>
                    <div  v-if="error" class="text-red-400 mt-2 "  >{{ error }}</div> 
              </div>
    </div>
</template>

<script>
export default {
    props:['msg'],
    data(){
          return{
            input: "",
            error: ''
          }
    },
    methods:{
              submit(){
                  if (this.input) {
                    localStorage.setItem('happies_address',this.input);
                     this.$refs.modal.classList.add('-translate-y-full'); 
                  }else{
                    this.error = 'Please enter delievery address'
                   this.timer(2000);
                  }            
              },
              timer(time){
                      setTimeout(() => {
                        this.error = ""
                      }, time);
              }
    }
}
</script>

<style>

</style>