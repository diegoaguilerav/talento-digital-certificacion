<template>
  <div>
    <NavBar/>
    <Login/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBarPublico.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'HomePublico',
  components: {
    NavBar,
    Login
  }
}
</script>
