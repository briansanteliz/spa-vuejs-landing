<template>
  <header>
    <div class="navegacion">
      <div class="container">
        <div class="row justify-content-center justify-content-md-between align-items-center p-4">
          <div class="col-6 col-md-4">
            <router-link to="/">
              <img class="img-fluid" src="../public/static/img/logo.svg" alt="logo" />
            </router-link>
          </div>
          <div class="col-6 col-md-8">
            <nav class="nav justify-content-center justify-content-md-end">
              <router-link class="nav-link" to="/nosotros">Nosotros</router-link>
              <router-link class="nav-link" to="/viajes">Viajes</router-link>
              <router-link class="nav-link" to="/testimonios">Testimoniales</router-link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {};
</script>