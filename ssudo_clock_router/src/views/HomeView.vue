<template>
  <div class="home">
   <span>Test Data Binding</span>
   <div>
    <CountDownVue/>
   </div>
    

  </div>
</template>

<script>
// @ is an alias to /src

import CountDownVue from '@/components/CountDown.vue';

export default {
  name: 'HomeView',
  components: {

    CountDownVue
  }
}
</script>
