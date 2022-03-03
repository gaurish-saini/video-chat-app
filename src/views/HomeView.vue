<template>
  <div>
    <h1>Home</h1>
    <p>Welcome {{ user }}</p>
  </div>
</template>

<script>
import db from '../db.js'

export default {
  name: 'homeView',
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
  }
}
</script>
