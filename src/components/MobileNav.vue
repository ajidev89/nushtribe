<template>
  <div ref="overlay" class="fixed z-50 h-full w-full  top-0 left-0 bg-overlay" @click.self="closeNav">
    <div ref="menu" class=" h-screen md:w-96 w-10/12 bg-white transition duration-500 ease-in-out transform -translate-x-full">
        <div class="pt-3">
            <div class="mx-3">
                 <div class="flex-grow justify-end flex items-center"   @click="closeNav">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                    </div>
                <div class="flex">
                    <img src="@/assets/svg/logo.svg" alt="">
                </div>
                <ul class="mt-8" >
                    <li class="text-xl mt-4 font-semibold"><router-link :to="{ name: 'Home' }" >Home</router-link></li>
                    <li class="text-xl mt-4 font-semibold"><router-link :to="{ name: 'Resturants' }" >Find food</router-link></li>
                    <li class="text-xl mt-4 font-semibold">Tracking</li>
                    <li class="text-xl mt-4 font-semibold">About us</li>
                </ul>
                
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
    name:['MobileNav'],
    methods:{
        closeNav(){   
             this.$refs.menu.classList.add('-translate-x-full')              
            setTimeout(() => {
                    this.$emit('closeNav');    
            }, 500);
        }
    },
    mounted(){
        setTimeout(() => {
            this.$refs.menu.classList.remove('-translate-x-full') 
        }, 100);  
    },
}
</script>

<style>

</style>