<template>
<Header/>
    <VendorBreadcrumb :time="storeDetails. estimatedTime" :header="storeDetails.header" :name="storeDetails.name" :address="storeDetails.address"/>
    <div class="bg-gray-50">        
        <div class="grid md:grid-cols-2 md:gap-6 md:pt-36 pt-16 mx-3 md:mx-16">
            <div>
                <h1 class="font-semibold">Delivering to</h1>
                <DeliveryAddress name="ResturantPage" />
            </div>
            <div class="flex justify-end">
                <div class="mt-4">
                      <div class="bg-white shadow-md text-black pl-4 rounded flex space-x-2" >
                        <input type="text" class="focus:outline-none w-4/5" placeholder="Search food">
                        <div class="flex items-center bg-brand p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex space-x-3 mx-3 md:mx-16">
            <h1 class="text-sm font-semibold  text-black bg-white p-3 rounded-full mt-4 shadow-md">Breakfast</h1>
           <h1 class="text-sm font-semibold  text-black bg-white p-3 rounded-full mt-4 shadow-md">Brunch</h1>
            <h1 class="text-sm font-semibold  text-black bg-white p-3 rounded-full mt-4 shadow-md">Lunch</h1>
            <h1 class="text-sm font-semibold  text-black bg-white p-3 rounded-full mt-4 shadow-md">Dinner</h1>
        </div>
        <div class="mx-3 md:mx-0 md:ml-16">
            <div class="grid md:grid-cols-3 my-6 md:gap-4">
                <!-- List of meals -->
                <div class="md:col-span-2 mb-14 md:mr-16" >
                    <div class=" border-b mt-3 md:mt-3">
                        <Food v-for="meal in meals" :key="meal" :data="meal" />
                    </div>
                </div>
                <!-- Cart -->
                <div class="relative p-4 border mb-14 h-screen md:mt-3 bg-white shadow-lg">
                    <Cart/>
                </div>
        </div>
        </div>
    </div>  
    <Footer/>  
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import VendorBreadcrumb from "@/components/VendorBreadcrumb.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import Cart from "@/components/Cart.vue";
import Food from "@/components/FoodCard.vue";
import DeliveryAddress from "@/components/DeliveryAddress.vue";

export default {
    name: 'ResturantPage',
    components:{
        Header,Footer,VendorBreadcrumb,Cart,Food,DeliveryAddress,BreadCrumb
    },
    data(){
        return{
            name: this.$route.params.vendorName,
            storeDetails: {
                name: "Bukka",
                header: "/resturants/Headers/resturant-header-img.jpg ",
                address: "78b CMD Road, Behind Mobile Filling Station",
                estimatedTime: "20-30mins"
            },
            meals: [
                {
                    name: "Chicken Laps",
                    description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus fugit distinctio, corporis labore autem perferendis error quis sed harum est fuga veniam aliquid! Porro maiores vero est voluptates exercitationem voluptatibus.',
                    extras:[
                        {
                            name:"Choose drinks",
                            items: ['Pepsi','Coke','Bigi Apple'],
                            selectno: 1
                        },
                         {
                            name:"Choose sauce",
                            items: ['Pepper','Ketcup','Black pepper'],
                            selectno: 1
                        }

                    ],
                    type : "schedule",
                    time: "Brunch",
                    price: 5000
                },
                {
                    name: "Bread and Egg",
                    description:' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus fugit distinctio, corporis labore autem perferendis error quis sed harum est fuga veniam aliquid! Porro maiores vero est voluptates exercitationem voluptatibus.',
                    extras:[
                           {
                            name:"Choose drinks",
                            items: ['Tea','Coffee','Water'],
                            selectno: 1
                        },
                         {
                            name:"Choose Egg",
                            items: ['Boiled Egg','Fried Egg'],
                            selectno: 1
                        }
                    ],
                    type : "schedule",
                    time: "Breakfast",
                    price: 2000
                    
                }
            ]
        }
    },
    methods:{
        getResturantsDetails(){
            //Get Resurants Details from the store
        },
        getAllmeals(){
            //GEt meals from particular Store
        }
    },
    mounted(){
        this.getResturantsDetails();
        this.getAllmeals();
    }
}
</script>

<style>

</style>