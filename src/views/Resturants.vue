<template>
  <Header/>
    <div class="bg-gray-100 pb-14">
            <!--  -->
            <div class="bg-brand ">
                <div class="py-4 mx-3 md:mx-16 block md:flex md:justify-between">
                     <div class="md:hidden">
                        <h1 class="font-semibold text-white" >Delivering to</h1>
                    </div>
                    <div class="mt-4 md:mt-0">
                        <DeliveryAddress/>
                    </div>
                    <div class="space-x-4 hidden md:flex" >
                            <div class=" flex space-x-5 bg-white shadow-md rounded py-2 px-4">
                                <input type="text" class="focus:outline-none" placeholder="Search">
                                <div class="flex-grow flex justify-end">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                </div>
                            </div>
                        <div class="relative z-30">
                            <div @click="showFilterDropdown" class=" flex space-x-5 bg-white shadow-md rounded py-2 px-4 w-64">
                                    <p class="text-sm">Filter</p>
                                    <div class="flex-grow flex justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                             </div>
                             <Dropdown @closeDropdwn="showFilterDropdown" :items="filterlist" v-show="FilterDropdown"/>
                        </div>
                        <div class="relative z-30">
                            <div @click="showRatingDropdown" class=" flex space-x-2 bg-white shadow-md rounded py-2 px-4 ">
                                    <p class="text-sm">Sort By</p>
                                    <div class="flex-grow flex justify-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                             </div>
                              <Dropdown @closeDropdwn="showRatingDropdown" :items="ratinglist" v-show="RatingDropdown"/>
                        </div>
                    </div>
                </div>
            </div>
         <BreadCrumb name="Resturants"/>
        <!-- Instant Delivery -->
        <div class=" mx-3 md:mx-16 mt-8">
            <div class="flex">
                <h1 class="text-3xl md:text-3xl font-semibold" >Instant</h1>
                <div class="flex-grow flex justify-end">
                    <button class="text-sm font-medium">View all >>></button>
                </div>
            </div>
            <div class="mt-4">
                <div class="grid  md:grid-cols-4 gap-4">
                      <ResturantsCards v-for="Resturant in ResturantsList" :key="Resturant" :url="Resturant.url" :name='Resturant.name' :rating='Resturant.rating' :Cuisine='Resturant.Cuisine' :time='Resturant.time' :PicUrl='Resturant.PicUrl' />
                </div>
            </div>
        </div>
        <!-- Scheduled -->
        <div class="mx-3 md:mx-16 mt-8">
            <div class="flex">
                <h1 class="text-3xl md:text-3xl font-semibold" >Scheduled</h1>
                <div class="flex-grow flex justify-end">
                    <button class="text-sm font-medium">View all >>></button>
                </div>
            </div>
            <div class="mt-4">
                <div class="grid  md:grid-cols-4 gap-4">
                      <ResturantsCards v-for="Resturant in ResturantsList" :key="Resturant" :url="Resturant.url" :name='Resturant.name' :rating='Resturant.rating' :Cuisine='Resturant.Cuisine' :time='Resturant.time' :PicUrl='Resturant.PicUrl' />
                </div>
            </div>
        </div>
        
    </div>
   <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import DeliveryAddress from "@/components/DeliveryAddress.vue";
import ResturantsCards from "@/components/ResturantsCard.vue";
import Dropdown from "@/components/Dropdown.vue";
export default {
    components:{
        Header,Footer,DeliveryAddress,ResturantsCards,BreadCrumb,Dropdown
    },
    data(){
        return {
            FilterDropdown: false,
            filterlist:['Food','Cakes & pastries','Drinks'],
            ratinglist:['2.5 - 3.5','3.5 - 4.5','4.5 - 5.0'],
            RatingDropdown: false,
            ResturantsList : [
                {
                    name: 'Bukka',
                    rating: '4.6',
                    Cuisine: ['Chicken','Salads','Africa Dishes'],
                    time: '50-60mins',
                    logoUrl: '',
                    PicUrl: '/resturants/food-img-1.jpg',
                    url:'bukka',
                },
                  {
                    name: 'Happies Recreation',
                    rating: '4.8',
                    Cuisine: ['Lemon','Chicken Stick','Tomato'],
                    time: '20-30mins',
                    logoUrl: '',
                    PicUrl: '/resturants/food-img-2.jpg',
                    url:'happies-recreation',
                } ,   
                 {
                    name: 'Bukka',
                    rating: '4.6',
                    Cuisine: ['Chicken','Salads','Africa Dishes'],
                    time: '50-60mins',
                    logoUrl: '',
                    PicUrl: '/resturants/food-img-1.jpg',
                    url:'bukka',
                },
                  {
                    name: 'Happies Recreation',
                    rating: '4.8',
                    Cuisine: ['Lemon','Chicken Stick','Tomato'],
                    time: '20-30mins',
                    logoUrl: '',
                    PicUrl: '/resturants/food-img-2.jpg',
                     url:'happies-recreation',
                }         
            ]
        }
    },
    methods:{
            getResturants(){
                    //Get  Resturants
            },
            showFilterDropdown(){
                this.FilterDropdown = ! this.FilterDropdown
            },
            showRatingDropdown(){
                this.RatingDropdown= ! this.RatingDropdown
            }
    },
    mounted(){
        this.getResturants();
    }
}
</script>

<style>

</style>