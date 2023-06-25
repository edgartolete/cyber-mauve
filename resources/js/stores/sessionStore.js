import { defineStore } from "pinia";

export let useSessionStore = defineStore('session',
{
    state(){
        return{
            token: localStorage.getItem('sessionToken'),
            name: "Edgar Tolete",
            company: "Tolete Web Development Services",
            avatar: "https://randomuser.me/api/portraits/men/85.jpg",
        }
    },
    actions: {
        changeToken(){
            this.token = "changed"
        },
        logIn(){
            localStorage.setItem('sessionToken', '56a4sdf67432614as6df4a6s4a464a65df46');
        },
        logOut(){
            console.log('logout')
            this.token = "";
            localStorage.removeItem('sessionToken');
        }
    },
    getters:{
        isLoggedIn(){
            console.log(this.token === "" );
            console.log(this.token === null );
            console.log(this.token === 'null' );
            console.log((this.token === "" || this.token === 'null'));
            console.log((this.token === "" || this.token === null));
            const result = (this.token === "" || this.token === null);
            return !result;
            // return (localStorage.getItem('sessionToken') != null || localStorage.getItem('sessionToken') != "") ? true: false;
        }
    }
})