<script setup>
import { ref } from 'vue';
import MyAccount from '../pages/MyAccount.vue';
import ManageAccounts from '../pages/ManageAccounts.vue';
import Billing from '../pages/Billing.vue';
import Clients from '../pages/Clients.vue';
import Home from '../pages/Home.vue';
import Employees from '../pages/Employees.vue';


const drawer = ref(true);
const rail = ref(false)
let currentPage = ref('home');


function changeContent(value){
    currentPage.value = value;
    console.log(currentPage)
}
</script>

<template>
    <v-card>
        <v-layout>

            <v-app-bar title="Cyber Mauve"></v-app-bar>
            <v-navigation-drawer
                v-model="drawer"
                :rail="rail"
                permanent
                @click="rail = false"
                class="pt-2"
                >
                <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
                title="John Heather"
                nav>
                <template v-slot:append>
                    <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                    ></v-btn>
                </template>
                </v-list-item>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" @click="changeContent('home')"></v-list-item>
                <v-list-item prepend-icon="mdi-account-tie" title="Clients" value="clients" @click="changeContent('clients')"></v-list-item>
                <v-list-item prepend-icon="mdi-account-star-outline" title="Employees" value="employees" @click="changeContent('employees')"></v-list-item>
                <v-list-item prepend-icon="mdi-receipt" title="Billing" value="billing" @click="changeContent('billing')"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="Manage Accounts" value="accounts" @click="changeContent('accounts')"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="My Account" value="account" @click="changeContent('account')"></v-list-item>
                <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" @click="changeContent('logout')"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="min-height: 100vh">
                <Home v-if="currentPage == 'home'"/>
                <Clients v-if="currentPage == 'clients'"/>
                <Employees v-if="currentPage == 'employees'"/>
                <Billing v-if="currentPage == 'billing'" />
                <ManageAccounts v-if="currentPage == 'accounts'"/>
                <MyAccount v-if="currentPage == 'account'"/>
            </v-main>
        </v-layout>
      </v-card>
</template>