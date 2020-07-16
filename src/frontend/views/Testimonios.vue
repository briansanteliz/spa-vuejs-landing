<template>
  <div>
    <main class="container mt-5">
      <h1 class="mb-5 text-center">Testimonios</h1>
      <div class="row">
        <div class="col-md-12">
          <blockquote class="text-center text-capitalize">Lo que nuestros clientes dicen:</blockquote>
          <div class="row testimoniales">
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
            <div class="col-md-6 col-lg-4 mb-4">
              <div class="card">
                <div class="card-body">
                  <blockquote class="blockquote">
                    <p
                      class="mb-0"
                    >El viaje a Londres fue espectacular excelente servicios de la agencia y el ambiente fantastico</p>
                    <footer class="blockquote-footer">Antonella Petrucci</footer>
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
                    >Montrial es genial! la agencia me ofrecio una gran oferta para conocer Canada, estoy muy agradecidos con ustedes!</p>
                    <footer class="blockquote-footer">Ricardo Hamilton</footer>
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
                    >Las playas de Rio son lo mejor, me encanta el clima tropical,muy buena seguridad</p>
                    <footer class="blockquote-footer">Giovanna Victoria</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <h2 class="text-center">Dejanos Un Mensaje:</h2>
          <div class="row justify-content-center">
            <div class="col-md-8">
              <form @submit.prevent="enviarDatos">
                <div class="form-group">
                  <label for="nombre">Nombre:</label>
                  <input
                    type="text"
                    id="nombre"
                    class="form-control"
                    placeholder="Escribe tu nombre"
                    v-model="testimonio.nombre"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Escribe tu correo"
                    v-model="testimonio.correo"
                  />
                </div>
                <div class="form-group">
                  <label for="mensaje">Mensaje:</label>
                  <textarea
                    id="mensaje"
                    rows="3"
                    class="form-control"
                    placeholder="Dejanos tu mensaje!"
                    v-model="testimonio.mensaje"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-block btn-success">ENVIAR</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
class Testimonio {
  constructor(nombre, correo, mensaje) {
    this.nombre = nombre;
    this.correo = correo;
    this.mensaje = mensaje;
  }
}
export default {
  data() {
    return {
      testimonio: new Testimonio()
    };
  },
  methods: {
    enviarDatos() {
      fetch("/testimonios", {
        method: "POST",
        body: JSON.stringify(this.testimonio),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(console.log("Mensaje Enviado"));
      this.testimonio = new Testimonio();
      Swal.fire("Guardado!", "Muchas gracias por tu mensaje!", "success");
    }
  }
};
</script>
