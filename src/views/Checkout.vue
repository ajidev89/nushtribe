<template>
        <Header/>
         <div class="bg-gray-100">
            <Title name="Checkout"/>
            <BreadCrumb name="Checkout"/>
            <div class=" mx-3 md:mx-0 md:ml-16 pt-16">
                <div class="grid md:grid-cols-3 md:gap-4">
                        <div class="col-span-2 mb-14 md:mr-16">
                            <div class="bg-white p-5 rounded shadow-md pb-6 ">
                                <h1 class="text-2xl font-semibold" >Enter your billing details</h1>
                                <div class="mt-3">
                                    <label for="email" class="text-sm block" >Name</label>
                                    <input type="text" name="email" v-model="name" class="input">
                                </div>
                                <div class="mt-3">
                                    <label for="email" class="text-sm block" >E-mail Address</label>
                                    <input type="email" name="email" v-model="email" class="input">
                                </div>
                                <div class="mt-3">
                                    <label for="email" class="text-sm block" >Phone Number</label>
                                    <input type="text" name="phone" v-model="phone" class="input">
                                </div>
                                 <div class="mt-3">
                                    <label for="email" class="text-sm block" >Additional Information</label>
                                    <textarea name="" class="input" id="" cols="30" rows="10" v-model="additionInfo"></textarea>
                                </div>
                                <div class="mt-4">
                                        <span class="font-semibold">Delivering to</span> {{ Address}}  
                                </div>
                            </div>
                            
                        </div>
                        <div class="bg-white rounded p-4 shadow-md mb-5 relative h-screen">
                            <OrderSurmmary :email="email" :phone="phone" :name="name" />
                        </div>
                </div>
            </div>
        </div>
    <Footer/>

</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer";
import Title from "@/components/Title.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import OrderSurmmary from "@/components/OrderSurmmary.vue";
export default {
        name: "Checkout",
        components:{
            Header,Footer,Title,OrderSurmmary,BreadCrumb
        },
        data(){
            return{
                email: "",
                name: "",
                phone: "",
                Address:""
            }
        },
        methods:{
             CheckForm(){
                alert("Error  in form")
             }
        },
        mounted(){
            this.Address = localStorage.getItem('Address') ? localStorage.getItem('Address') : '';
        }
}
</script>

<style>

</style>