<template>
  <div class="font-mont">
          <router-view/>
  </div>

</template>
<script>
// @ is an alias to /src
import FullOffcanvas from '@/components/FullOffcanvas.vue'

export default {
  components: {
        FullOffcanvas
  },
  data(){
    return {
          address :'',
          askDelievery: false,
    }
  },
  methods:{

  }
}
</script>

<style>
#nav a.router-link-exact-active {
  color: #42b983;
}
.bg-overlay{
    background: rgba(0, 0, 0, 0.267);
}
</style>
