const nombre = document.querySelector("#nombre");
const direccion = document.querySelector("#direccion");
const numTarjeta = document.querySelector("#numTarjeta");
const numSeguridad = document.querySelector("#numSeguridad");
const datos = [];

const infoSubmit = () => {
  if (
    nombre.value &&
    direccion.value &&
    numTarjeta.value &&
    numSeguridad.value
  ) {
    datos.push({
      Nombre: nombre.value,
      Direccion: direccion.value,
      NumeroTarjeta: numTarjeta.value,
      NumeroSeguridad: numSeguridad.value,
    });
    alert(`Gracias sr. ${nombre.value} por su compra`);
    window.close();
  } else {
    alert("Quedan campos sin completar");
  }
};
