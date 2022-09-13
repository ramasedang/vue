<template>
    <div class="clockAPI">

        <h2>{{ test.formatted }}</h2>
        <select v-model="selected">
            <option v-for="product in products" v-bind:value="{id: product.id, text: product.name}" :key="product.id">
                {{ product.show }}
            </option>
        </select>
        <h3>{{ test.countryName }} {{ test.zoneName }}</h3>
        <button @click="changeMsg">Change</button>
    </div>
</template>


<script>

const controller = new AbortController();

import axios from 'axios'
export default {
    name: "ClockTimeAPI",

    data() {
        return {
            msg: "Asia/Jakarta",
            test: ["test"],
            sem : "",
            param: "",
            linkDefault:
                "https://api.timezonedb.com/v2.1/get-time-zone?key=E79K61AP9JL8&format=json&by=zone&zone=Asia/Jakarta",
            selected: "",
            products: [
                { id: 1, name: "Asia/Jakarta", show: "WIB" },
                { id: 2, name: "Asia/Jayapura", show: "WIT" },
                { id: 3, name: "Asia/Makassar", show: "WITA" },
            ],
        };
    },

    methods: {
        changeMsg() {

            this.msg = this.selected.text;
            this.linkDefault =
                "https://api.timezonedb.com/v2.1/get-time-zone?key=E79K61AP9JL8&format=json&by=zone&zone=" +
                this.selected.text;
        },

        async getTime() {
            await axios
                .get(this.linkDefault, {
                    signal: controller.signal
                })
                .then((response) => {
                    this.sem = response.data.formatted;
                    this.test = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        this.getTime();
        setInterval(() => {
            this.getTime();
        }, 1000);
    },
};
</script>

<style>

</style>