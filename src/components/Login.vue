<template>
    <div class="d-flex justify-content-center mt-5">
      <div class="col-12 col-md-3 border p-2">
        <form class="form-signin d-flex flex-column">
          <h1 class="h3 mb-3 font-weight-normal mx-auto">Ingreso Clientes</h1>
          <div class="col-11 py-2 mx-auto">
            <label for="inputEmail" class="sr-only">Rut</label>
            <input type="text" class="form-control" autofocus="">
          </div>
          <div class="col-11 py-2 mx-auto">
            <label for="inputPassword" class="sr-only">Contraseña</label>
            <input type="password" class="form-control">
          </div>
          <button class="btn btn-md btn-primary btn-block" type="submit">
          <router-link class="nav-item nav-link btn-primary" to="/homeprivado">Ingresar</router-link>
          </button>
        </form>
      </div>
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