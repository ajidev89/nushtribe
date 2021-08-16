<template>
   <div class=" flex items-center justify-between mx-3 md:mx-16 py-4">
            <div class="font-semibold text-base" ><router-link to="/">Happies</router-link></div>
            <div class="flex space-x-6 justify-end">
                <ul class=" hidden md:flex  items-center  space-x-6 font-semibold text-base" >
                    <li class="mx-4"><router-link :to="{ name: 'Resturants' }" >Find food</router-link></li>
                    <li class="mx-4">Tracking</li>
                    <li class="mx-4"><router-link :to="{ name: 'About' }" >About us</router-link></li>
                </ul>
               <button class="hidden md:block mx-8 relative bg-black rounded text-gray-100 p-2" >
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                   <div class="h-5 w-5 bg-red-500 rounded-full absolute -top-2 -right-2 text-gray-100" >1</div>
               </button>
               <button class=" mx-8 md:hidden text-black p-2" @click="toogleNav" >
                   <svg xmlns="http://www.w3.org/2000/svg" class="h- w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
               </button>
            </div>
        </div>
        <div v-if="showNav">
             <MobileNav @closeNav="toogleNav" :showNav="showNav" />
        </div>
  
</template>

<script>
import MobileNav from "@/components/MobileNav.vue";
export default {
 components:{
     MobileNav
 },
 data(){
     return{
         showNav: false
     }
 },
 methods:{
     toogleNav(){
         this.showNav = ! this.showNav    
     }
 }

}
</script>

<style>
.router-link-active ,.router-link-exact-active{
    color:#c0d800
}
button{
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
</style>