<template>
    <div>
        <router-link class="nav-item nav-link border text-dark" to="">Cuenta Corriente</router-link>
        <router-link class="nav-item nav-link border text-dark" to="">Tarjeta de Crédito</router-link>
        <router-link class="nav-item nav-link border text-dark" to="">Línea de Crédito</router-link>
        <router-link class="nav-item nav-link border text-dark" to="/transferencias">Transferencias</router-link>
        <router-link class="nav-item nav-link border text-dark" to="">Pago de Servicios</router-link>
    </div>
</template>
<script>
export default {
  name: "AsideBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
