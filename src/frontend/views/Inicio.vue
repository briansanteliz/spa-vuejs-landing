<template >
  <div>
    <div class="slider">
      <h1>Rio de Janeiro</h1>
      <em>Aventura</em>
    </div>
    <main class="container mt-5">
      <h2 class="text-center mb-5">Sobre Nosotros</h2>
      <div class="row mb-5">
        <div class="col-md-6">
          <p
            class="text-center"
          >Encuentra las mejores ofertas y los mejores destinos en nuestra agencia de viajes, grantizamos la seguridad y una experiencias increible para nuestros clientes ya sea que tu proposito de viaje sea una boda, luna de miel, viaje o simplemente pasar unos dias inolvidables tienes que contactarnos!</p>
          <p
            class="text-center"
          >Más de 11 años nos respaldan selecionamos los mejores destinos, transporte comida y atención no te arrepentiras!</p>
        </div>
        <div class="col-md-6">
          <img src="../public/static/img/inicio_nosotros.jpg" alt="img home" class="img-fluid" />
        </div>
      </div>
      <h2 class="text-center mb-5">Proximos Viajes!</h2>
      <div class="row proximos-viajes">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img src="../public/static/img/destinos_canada.jpg" class="img-fluid" alt="viajes" />
            <div class="card-body">
              <h2>Viaje a Canada</h2>
              <p>
                <i class="fas fa-calendar-alt"></i>
                05/06/2020 - 10/06/2020
              </p>
              <p>
                <i class="fas fa-dollar-sign"></i> 100$ USD
              </p>
              <p>Explora con nosotros la gastronomia y cultura de cada lugar al que te llevaremos en este genial país.</p>
              <router-link to="/viajes" class="btn btn-success btn-block">Más Información</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img src="../public/static/img/destinos_grecia.jpg" class="img-fluid" alt="viajes" />
            <div class="card-body">
              <h2>Excelente Vacaciones a Grecia</h2>
              <p>
                <i class="fas fa-calendar-alt"></i>
                10/06/2020 - 15/06/2020
              </p>
              <p>
                <i class="fas fa-dollar-sign"></i> 5600$ USD
              </p>
              <p>En este viaje conoceras Grecia y sus alrededores.</p>
              <router-link to="/viajes" class="btn btn-success btn-block">Más Información</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <img src="../public/static/img/destinos_paris.jpg" class="img-fluid" alt="viajes" />
            <div class="card-body">
              <h2>Luna de miel en Paris</h2>
              <p>
                <i class="fas fa-calendar-alt"></i>
                18/06/2020 - 25/06/2020
              </p>
              <p>
                <i class="fas fa-dollar-sign"></i> 2500$ USD
              </p>
              <p>¡Aprovecha nuestra promoción para recien casados! 
                Conoceras junto a tu pareja la romantica ciudad de Paris.</p>
              <router-link to="/viajes" class="btn btn-success btn-block">Más Información</router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
    <div class="descuento">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="contenido">
              <p class="titulo">Viaje a canada</p>
              <p class="fecha">20 de Marzo 2020 - 29 de Marzo de 2020</p>
              <p class="precio">$2,500 USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="text-center my-5">Testimoniales</h2>
      <div class="row proximos-viajes">
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <div class="card-body">
              <blockquote class="blockquote">
                <p class="mb-0">Excelentes Vacaciones!</p>
                <footer class="blockquote-footer">Owen Smith</footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <div class="card-body">
              <blockquote class="blockquote">
                <p
                  class="mb-0"
                >Muy buena pagina excelentes destinos y muy buenos precios 100% recomendados, Saludos!!</p>
                <footer class="blockquote-footer">Joe Patterson</footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4">
          <div class="card">
            <div class="card-body">
              <blockquote class="blockquote">
                <p class="mb-0">Me encanto la luna de miel fue increible</p>
                <footer class="blockquote-footer">Nicole Bonett</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
