<template>
  <NavigationBar />
  <router-view />
</template>

<script>
import NavigationBar from '@/components/NavigationBar'

export default {
  components: {
    NavigationBar
  }
}
</script>

<style lang="scss">
$primary: #5f2882;
@import 'node_modules/bootstrap/scss/bootstrap';
</style>
