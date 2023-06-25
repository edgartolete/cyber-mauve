<script setup>
import { ref } from 'vue';
import MyAccount from '../pages/MyAccount.vue';
import ManageAccounts from '../pages/ManageAccounts.vue';
import Billings from '../pages/Billings.vue';
import Clients from '../pages/Clients.vue';
import Dashboard from '../pages/Dashboard.vue';
import Employees from '../pages/Employees.vue';
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue'
import { useSessionStore } from '../stores/sessionStore.js'

let session = useSessionStore()

const drawer = ref(true);
const rail = ref(false)

let currentPage = ref('dashboard');


function changeContent(value){
    currentPage.value = value;
    session.changeToken();
}

</script>

<template>
    <v-card>
        <v-layout>
            <v-app-bar :title="session.company"></v-app-bar>
            <v-navigation-drawer
                v-model="drawer"
                :rail="rail"
                permanent
                
                class="pt-2"
                >
                <v-list-item
                :prepend-avatar="session.avatar"
                :title="session.name"
                @click="rail = false"
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
                <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard" @click="changeContent('dashboard')"></v-list-item>
                <v-list-item prepend-icon="mdi-account-tie" title="Clients" value="clients" @click="changeContent('clients')"></v-list-item>
                <v-list-item prepend-icon="mdi-account-star-outline" title="Employees" value="employees" @click="changeContent('employees')"></v-list-item>
                <v-list-item prepend-icon="mdi-receipt" title="Billings" value="billings" @click="changeContent('billings')"></v-list-item>
                <v-list-item prepend-icon="mdi-cog-outline" title="Manage Accounts" value="accounts" @click="changeContent('accounts')"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="My Account" value="account" @click="changeContent('account')"></v-list-item>
                <RouterLink to="/login"  style="text-decoration: none; color: inherit;" > 
                    <v-list-item prepend-icon="mdi-logout" title="Logout" value="logout" @click="session.logOut()"></v-list-item>
                </RouterLink>
                </v-list>
            </v-navigation-drawer>
            <v-main style="min-height: 100vh">
                <Dashboard v-if="currentPage == 'dashboard'"/>
                <Clients v-if="currentPage == 'clients'"/>
                <Employees v-if="currentPage == 'employees'"/>
                <Billings v-if="currentPage == 'billings'" />
                <ManageAccounts v-if="currentPage == 'accounts'"/>
                <MyAccount v-if="currentPage == 'account'"/>
                {{ session.token }}
            </v-main>
        </v-layout>
      </v-card>
</template>