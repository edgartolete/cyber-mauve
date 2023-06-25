<script setup>
import { useLayout } from 'vuetify'

</script>

<template>
      <v-layout class="rounded rounded-md">
        <v-app-bar title="Application bar"></v-app-bar>

        <v-navigation-drawer>
          <v-list>
            <v-list-item title="Navigation drawer"></v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
          Main Content
            <v-icon icon="mdi-home" />
        </v-main>
      </v-layout>
</template>