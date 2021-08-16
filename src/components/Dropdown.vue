<template>
    <div class="absolute bg-white w-full z-30 shadow-lg rounded p-4 text-sm mt-2" >
        <div @click.self="closeDropdown" class="fixed top-0 left-0 h-full w-full -z-10" ></div>
        <ul>
            <li class="hover:text-brand transition ease-in-out duration-300 my-1" v-for="item in items" :key="item">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:['Dropdown'],
    props:['items'],
    methods:{
        closeDropdown(){
            this.$emit('closeDropdwn')
        }
    }
}
</script>

<style>

</style>