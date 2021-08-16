<template>
<Header/>
    <VendorBreadcrumb :header="storeDetails.header" :name="storeDetails.name" :address="storeDetails.address"/>
    <div class="bg-gray-50">
        <div class="pt-24">
            <BreadCrumb/>
        </div>
        
        <div class="mx-3 md:mx-0 md:ml-16 pt-16">
            
            <div class="grid md:grid-cols-3 my-6 md:gap-4">
                <!-- List of meals -->
                <div class="md:col-span-2 mb-14 md:mr-16" >
                    <!-- Instant -->
                    
                    <div class=" border-b mt-3 md:mt-16">
                         <!-- <div class="flex">
                                <h1 class="text-sm font-semibold  text-white bg-red-500 p-3 rounded-r-full mt-4">Scheduled meals</h1>
                        </div> -->
                        <Food/>
                        <Food/>
                    </div>
                </div>
                <!-- Cart -->
                <div class="relative p-4 border mb-14 h-screen md:mt-16 bg-white shadow-lg">
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
                address: "78b CMD Road, Behind Mobile Filling Station"
            },
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