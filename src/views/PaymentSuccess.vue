<template>
        <Header/>
                <Title name="Payment Information"/>
                <div class="bg-gray-100">
                    <div class="mx-16 flex justify-center py-8" >
                            <div class="bg-white shadow-md p-4 w-96 rounded ">
                                    <h1 class="text-3xl">Account Information</h1>
                                    <div class="grid grid-cols-2  mt-4">
                                        <div>
                                            <h5 class="font-semibold" >Bank Name</h5>
                                        </div>
                                        <div>
                                            <h5 class="" >Zenith Bank</h5>
                                        </div>
                                        <div>
                                            <h5 class="font-semibold" >Account Name</h5>
                                        </div>
                                        <div>
                                            <h5 class="" >NushTribe</h5>
                                        </div>
                                        <div>
                                          <h5 class="font-semibold" >Account Number</h5>
                                        </div>
                                        <div>
                                            <h5 class="" >09558163998</h5>
                                        </div>
                                    </div>
                         
                                        <div class="mt-8 flex space-x-3">
                                                <div class="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <span>
                                                    Order will be processed when your payment has been received
                                                </span>
                                        </div>
                               </div>
                    </div>  
                   </div> 
        <Footer/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Title from "@/components/Title.vue";
export default {
    name:['PaymentSuccess'],
    components:{
        Header,Footer,Title
    }
}
</script>

<style>

</style>