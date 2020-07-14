<template>
  <footer class="container py-5">
    <div class="row">
      <div class="col-md-6">
        <nav class="nav justify-content-center justify-content-md-start">
          <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
          <router-link class="nav-link" to="/viajes">Viajes</router-link>
          <router-link class="nav-link" to="/testimonios">Testimoniales</router-link>
        </nav>
      </div>
      <div class="col-md-6">
        <p class="copyright text-center text-md-right">Todos los Derechos Reservados {{year}}</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>