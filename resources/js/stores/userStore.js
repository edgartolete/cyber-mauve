import { defineStore } from "pinia";

export let useUserStore = defineStore('user',
{
    state(){
        return{
            name: "Edgar Tolete",
            company: "Tolete Web Development Services"
        }
    }
})