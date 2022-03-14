<template>
  <NavigationBar :user="user" @logout="logout" />
  <router-view :user="user" @logout="logout" />
</template>

<script>
import db from './db.js'
import Firebase from 'firebase/compat/app'
import NavigationBar from '@/components/NavigationBar'
export default {
  name: 'AppView',
  data: function () {
    return {
      user: null
    }
  },
  methods: {
    logout: function () {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.user = null
          this.$router.push('login')
        })
    }
  },
  mounted() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user
      }
    })
  },
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
$primary: #5f2882;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
