<template>
     <div class="grid md:grid-cols-2 gap-2 mx-3 md:mx-16" >
              <div class="flex h-96  items-center">
                  <div class="mt-8">
                        <h1 class="md:text-5xl text-4xl  font-semibold" >Hungry? You're<br>in the right place.</h1>
                        <p class="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi odit soluta mollitia, tempore cumque!</p>               
                        <div class="flex relative justify-around space-x-2 mt-4 bg-gray-200 h-14 px-2 rounded-full w-full md:w-10/12">
                             <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                             </div>
                             <input type="text" ref="completeAddress" name="delivery" @keyup.enter="SortAddress" class="bg-gray-200 w-full focus:outline-none rounded-r-full" id="delivery" v-model="deliveryAddress" placeholder="Enter delivery Address .." autocomplete="">
                             <div class="absolute right-0 md:-right-4 h-14">
                                <button class="bg-brand border-4 shadow-md border-white h-full w-14 flex justify-center items-center rounded-full" @click="SortAddress">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                  </svg>
                                </button>
                            </div>
                          </div>
                          <div class="text-xs text-gray-500 mt-4 flex space-x-2">
                            <div class="flex items-center">
                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                 </svg>
                            </div>
                          <p class="font-semibold">
                              Only Available to customers in Ikeja and Magodo axis
                          </p>
                          </div>
                    </div>   
              </div>
              <div>
                    <div class="flex justify-center relative" >
                        <div class=" md:h-768 md:w-768 bg-brand rounded-full absolute -top-52 -z-10 -right-48 hidden md:block " ></div>
                            <img class="mt-10"  src="@/assets/img/header-img.png" alt="Noshtribe">
                        </div>   
             </div>    
      </div>      
</template>

<script>
export default {
  data(){
     return{
        deliveryAddress : ""
     }
  },
  methods:{
     SortAddress(){
      if (this.deliveryAddress) {
        localStorage.setItem('Address',this.deliveryAddress);
        this.$router.push({ name: 'Resturants' });
      }
    }
  },
  mounted(){
        this.deliveryAddress = localStorage.getItem('Address') ? localStorage.getItem('Address') : '' ;
  },
  beforeUnmount(){
    if (! this.deliveryAddress) {
        alert("Alaye fill your address")
    }
  }

}
</script>

<style>

</style>