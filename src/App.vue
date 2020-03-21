<template>
  <v-app>
    <div fill-height>
      <v-card tile height="90vh" class="overflow-hidden">
        <v-navigation-drawer
          v-model="drawer"
          :color="color"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          :left="left"
          absolute
          dark
          class="pt-4"
        >
          <v-list dense nav class="py-0">
            <v-list-item two-line :class="miniVariant && 'px-0'">
              <v-list-item-avatar>
                <img src="https://randomuser.me/api/portraits/women/29.jpg" />
              </v-list-item-avatar>

              <v-list-item-content class="login">
                <router-link v-if="!isLogin" to="/">
                  <v-list-item-title>
                    Please Login
                  </v-list-item-title></router-link
                >
                <v-list-item-subtitle>Ecommerce CMS</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <v-list-item
              v-show="isLogin"
              v-for="item in items"
              :key="item.title"
              link
              class="admin-menu"
            >
              <v-list-item-icon>
                <router-link :to="item.path">
                  <v-icon>{{ item.icon }}</v-icon>
                </router-link>
              </v-list-item-icon>
              <v-list-item-content>
                <router-link :to="item.path">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </router-link>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-content>
          <v-container class="ma-6">
            <router-view />
          </v-container>
        </v-content>
      </v-card>
      <Footer />
    </div>
  </v-app>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'App',
  data() {
    return {
      drawer: true,
      items: [
        {
          title: 'All Products',
          icon: 'mdi-view-dashboard',
          path: '/products'
        },
        { title: 'Create Product', icon: 'mdi-image', path: '/createProduct' }
      ],
      color: 'blue',
      left: false,
      miniVariant: true,
      expandOnHover: true,
      background: false,
      isLogin: false
    };
  },
  components: {
    Footer
  },
  computed: {
    load() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    }
  }
};
</script>

<style scoped>
.admin-menu a,
.login a {
  text-decoration: none;
}
.admin-menu div,
.login div {
  color: #ffffff;
}
</style>
