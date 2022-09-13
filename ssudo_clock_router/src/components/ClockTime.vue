<template>
  <div class="clock">
    <h1>{{msg}}</h1>
    <h2>{{ fixTime}}</h2>
    <select v-model="selected">
      <option v-for="product in products" v-bind:value="{id: product.id, text: product.name}" :key="product.id">
        {{ product.show }}
      </option>
    </select>
    <button @click="convert">UBAH</button>

  </div>
</template>

<script>
export default {
  name: 'ClockTime',
  props: {
    msg: String,
  },
  data() {
    return {
      region: "WIB",
      time: "",
      time2: "",
      time3: "",
      fixTime: "",
      products: [
        { id: 1, name: "Asia/Jakarta", show: "WIB" },
        { id: 2, name: "Asia/Jayapura", show: "WIT" },
        { id: 3, name: "Asia/Makassar", show: "WITA" },
      ],
      selected: ""
    }
  },
  mounted() {
    this.time = new Date().toLocaleTimeString();

  },
  methods: {
    updateTime() {
      if (this.selected == "Asia/Jakarta") {
        this.time2 = parseInt(this.time);
        this.time3 = this.time2.toString();
        this.fixTime = this.time3 + new Date().toLocaleTimeString().slice(2, 8);
      } else if (this.selected == "Asia/Jayapura") {
        this.time2 = parseInt(this.time) + 2;
        this.time3 = this.time2.toString();
        this.fixTime = this.time3 + new Date().toLocaleTimeString().slice(2, 8);
      } else if (this.selected == "Asia/Makassar") {
        this.time2 = parseInt(this.time) + 1;
        this.time3 = this.time2.toString();
        this.fixTime = this.time3 + new Date().toLocaleTimeString().slice(2, 8);
      } else {
        this.time = new Date().toLocaleTimeString().slice(0, 2);
        this.time2 = new Date().toLocaleTimeString().slice(3, 5);
        this.time3 = new Date().toLocaleTimeString().slice(6, 8);
        this.fixTime = this.time + ":" + this.time2 + ":" + this.time3;
      }

      // this.time2 = new Date().toLocaleTimeString().slice(3, 5);
      // this.time3 = new Date().toLocaleTimeString().slice(6, 8);
      // this.fixTime = this.time + ":" + this.time2 + ":" + this.time3;

    },
    convert() {
      this.selected = this.selected.text;
    },
  },

  created() {
    setInterval(this.updateTime, 1000);

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
