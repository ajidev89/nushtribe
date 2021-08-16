<template>
       <Header/>
         <HeaderCTA/>
              <div class="mt-16 md:mt-24 md:p-3 mx-3 md:mx-8">
                      <div class="flex justify-center" >
                          <div>
                              <h1 class="text-3xl md:text-5xl text-center  font-semibold">Just Relax at Home,<br>We will take care</h1>
                              <p class="text-sm text-center mt-3" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque praesentium at a architecto nihil<br> sunt dolorum suscipit, </p>
                          </div> 
                      </div>  
                      <div class="grid md:grid-cols-3 gap-4 mt-4" >
                              <div class="md:p-4"  >
                                  <div class="flex justify-center">
                                        <img src="@/assets/svg/Flat.svg" alt="Rider">
                                  </div>
                                  <div>
                                    <h1 class="text-base font-semibold text-center mt-4" >Fast Delivery in 1 Hour </h1>
                                    <p class="mt-4 p-0 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                               <div class="md:p-4"  >
                                  <div class="flex justify-center">
                                       <img src="@/assets/svg/Group_2186.svg" alt="Easy Order">
                                  </div>
                                  <div>
                                    <h1 class="text-base font-semibold mt-4 text-center">Easy to Order by Web</h1>
                                    <p class="mt-4 p-0 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                              <div class="md:p-4"  >
                                  <div class="flex justify-center">
                                        <img src="@/assets/svg/Group_2190.svg" alt="Quality service">
                                  </div>
                                  <div>
                                    <h1 class="text-base font-semibold text-center mt-4" >Best Quality</h1>
                                    <p class="mt-4 p-0 text-center" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                  </div>
                              </div>
                        </div>                     
              </div>
              <div class="mt-8 bg-gray-100 py-14">
                  <div class="grid md:grid-cols-2 mx-3 md:mx-16">
                        <div class="flex justify-center py-6">
                              <img src="@/assets/svg/Group_2205.svg" alt="Logo">
                        </div>
                        <div class="py-6 mt-6 md:mr-9 md:-ml-16">
                              <h1 class="md:text-5xl text-4xl text-left  font-semibold">About Us</h1>
                              <p class="text-base mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                              <button class="rounded-full px-4 py-2 bg-brand mt-4" >Learn more</button>
                        </div>
                  </div>
              </div>
                   <div class="mt-8 bg-white py-14 mx-3 md:mx-16">
                  <div class="grid md:grid-cols-2">
                        <div class="py-6 mt-6 flex justify-center items-center">
                          <div class="">
                            <h1 class="md:text-5xl text-4xl font-semibold">Living well begins<br>with eating well.</h1>
                              <p class="text-sm text-center mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                          </div>      
                        </div>
                         <div class="flex justify-center py-6">
                              <img src="@/assets/img/home-food-2.png" class="object-fit" alt="taste the meal">
                        </div>
                  </div>
              </div>
            <Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HeaderCTA from "@/components/HeaderCTA.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'Home',
  components: {
    Header,HeaderCTA,Footer
  }
}
</script>
