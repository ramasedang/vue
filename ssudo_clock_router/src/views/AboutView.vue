<template>
  <div class="about">
    <ClockTime msg="This time from local is: "/>
    <h1>This time from API is:</h1>
    <ClockTimeAPI/>
  </div>
</template>

<script>  
import ClockTime from '@/components/ClockTime.vue'
import ClockTimeAPI from '@/components/ClockTimeAPI.vue'

export default {
  name: 'AboutView',
  components: {
    ClockTime, ClockTimeAPI
}

}
</script>
