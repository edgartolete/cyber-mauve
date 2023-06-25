<script setup>
import { onMounted } from 'vue';
import { useSessionStore } from '../stores/sessionStore.js'

let session = useSessionStore()


onMounted(()=>{
    session.logOut()
})

</script>

<template>
    <h1> LoginPage </h1>
    
</template>
