const localidadesPartida = document.querySelector("#localidadesA");
const localidadesLlegada = document.querySelector("#localidadesB");
const cantPasajes = document.querySelector("#cantPasajes");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const submitBtn = document.querySelector("#submitBtn");
const labelA = document.querySelector("#labelA");
datos = [];

const elegirDestino = (event) => {
  event.preventDefault();

  if (
    localidadesPartida.value === "Carhué" &&
    localidadesLlegada.value === "Bahia Blanca"
  ) {
    time.innerHTML = `<option>15:00 </option>
    <option>20:55</option>
    <option>22:00 </option>
    `;
  } else if (
    localidadesPartida.value === "Carhué" &&
    localidadesLlegada.value === "La Plata"
  ) {
    time.innerHTML = `<option>14:00 </option>
    <option>20:30</option>
    <option>23:00 </option>
    `;
  } else if (
    localidadesPartida.value === "Carhué" &&
    localidadesLlegada.value === "Buenos Aires"
  ) {
    time.innerHTML = `<option>13:00 </option>
    <option>16:45</option>
    <option>19:30 </option>
    `;
  } else if (
    localidadesPartida.value === "Bahia Blanca" &&
    localidadesLlegada.value === "Carhué"
  ) {
    time.innerHTML = `<option>13:00 </option>
    <option>16:45</option>
    <option>19:30 </option>
    `;
  } else if (
    localidadesPartida.value === "Bahia Blanca" &&
    localidadesLlegada.value === "La Plata"
  ) {
    time.innerHTML = `<option>12:00 </option>
    <option>13:45</option>
    <option>22:30 </option>
    `;
  } else if (
    localidadesPartida.value === "Bahia Blanca" &&
    localidadesLlegada.value === "Buenos Aires"
  ) {
    time.innerHTML = `<option>9:00 </option>
    <option11:45</option>
    <option>19:50 </option>
    `;
  } else if (
    localidadesPartida.value === "La Plata" &&
    localidadesLlegada.value === "Carhué"
  ) {
    time.innerHTML = `
    <option>19:30 </option>
    `;
  } else if (
    localidadesPartida.value === "La Plata" &&
    localidadesLlegada.value === "Bahia Blanca"
  ) {
    time.innerHTML = `
    <option>22:10 </option>
    `;
  } else if (
    localidadesPartida.value === "La Plata" &&
    localidadesLlegada.value === "Buenos Aires"
  ) {
    time.innerHTML = `
    <option>18:35</option>
    `;
  } else if (
    localidadesPartida.value === "Buenos Aires" &&
    localidadesLlegada.value === "Carhué"
  ) {
    time.innerHTML = `
    <option> 01:00 </option>
    `;
  } else if (
    localidadesPartida.value === "Buenos Aires" &&
    localidadesLlegada.value === "Bahia Blanca"
  ) {
    time.innerHTML = `
    <option>21:00 </option>
    `;
  } else if (
    localidadesPartida.value === "Buenos Aires" &&
    localidadesLlegada.value === "La Plata"
  ) {
    time.innerHTML = `
    <option> 18:00 </option>
    `;
  } else if (localidadesPartida.value === localidadesLlegada.value) {
    localidadesLlegada.value = "";
  }
};

const submitInfo = (event) => {
  event.preventDefault();

  if (time.value && date.value && cantPasajes.value) {
    let newWindow = window.open("");
    newWindow.document.write(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Venta Pasajes</title>
        <link rel="stylesheet" href="/Pagina compra/styles.css" />
      </head>
      <body>
      <div id="wrapperTitulo">
        <div id="wrapperImg">
          <img src="./img/Newlogo.png" alt="logo con autobus" />
        </div>
        <h1>Pasajes Online</h1>
      </div>
        <div id="wrapperBoletoTitulo">
          <h1>Verifique los datos antes de proceder</h1>
          <div id="boletoWrapper">
            <h2>Su boleto</h2>
            <p>Origen : ${localidadesPartida.value}</p>
            <p>Destino: ${localidadesLlegada.value}</p>
            <p>Horario de partida: ${time.value}</p>
            <p>Fecha de Partida: ${date.value}</p>
            <p>Pasajes : ${cantPasajes.value}</p>
          </div>
        </div>
        <form onsubmit="infoSubmit()">
          <div id="datosWrapper">
            <h2>Complete sus datos para la compra</h2>
            <label for="nombre">Nombre y Apellido</label>
            <input
              type="text"
              id="nombre"
              placeholder="Como figura en su tarjeta"
            />
            <label for="direccion">Direccion</label>
            <input type="text" id="direccion" placeholder="Ingrese su direccion" />
            <label for="numTarjeta">Numero de tarjeta</label>
            <input
              id="numTarjeta"
              type="tel"
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              autocomplete="cc-number"
              maxlength="16"
              placeholder="xxxx-xxxx-xxxx-xxxx"
            />
            <label for="numSeguridad">Ingrese el codigo de seguridad</label>
            <input
              type="password"
              
              id="numSeguridad"
              maxlength="3"
              placeholder="codigo 3 digitos"
            />
            <button type="submit" id="btnPago">Finalizar Compra</button>
          </div>
        </form>
        <script src="/Pagina compra/pago.js"></script>
      </body>
    </html>
    `);
  } else {
    alert("Faltan ingresar datos");
  }
};
