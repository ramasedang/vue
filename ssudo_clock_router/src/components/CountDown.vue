<template>
   <input type="text" v-model="testInput" @input="updateTime">
   
   <h3>{{test}}</h3>
   <h1>Masukkan angka</h1>
   <input type="number" v-model="timeInput">
   <h1>{{time}}</h1>
   <button @click="countStart" >start</button>
    <button @click="countStop" >stop</button>
    <button @click="countReset" >reset</button>

</template>

<script>
// const detik = 60;
// const menit = 60;
// const jam = 24;
export default {
    name: 'CountDown',
    props: {
        msg: String,
    },
    data() {
        return {
            time :"",
            test:"",
            interval : null,
        }
},
methods: {
    updateTime() {
        this.test = this.testInput;
    },
    countStart() {
        this.time = this.timeInput; 
        this.interval = setInterval(() => {
            if(this.time !=0){
                
            this.time--;
            }else{
                clearInterval(this.interval);
            }
        }, 1000);
    },
    countStop() {
        clearInterval(this.interval);
    },
    countReset() {
        this.time = 0;
    },
    lap() {
        
    }

}
}
</script>

<style>

</style>