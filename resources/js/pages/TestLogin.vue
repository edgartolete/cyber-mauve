<script setup>
import { onMounted } from 'vue';
import { useSessionStore } from '../stores/sessionStore.js'

let session = useSessionStore()


onMounted(()=>{
    session.logIn()
})
</script>

<template>
    User
</template>