<template>
  <NavigationBar :user="user" />
  <router-view :user="user" />
</template>

<script>
import db from './db.js'
import NavigationBar from '@/components/NavigationBar'
export default {
  name: 'AppView',
  data: function () {
    return {
      user: null
    }
  },
  mounted() {
    db.collection('users')
      .doc('atNe27NkX1Ij80jJAfzX')
      .get()
      .then(snapshot => {
        this.user = snapshot.data().name
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
