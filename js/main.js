let api_url = "https://jsonplaceholder.typicode.com/users";

async function post(api) {
  let obtenerpost = await fetch(api);
  let dato = await obtenerpost.json();
  buscar_dato(dato);
}

function buscar_dato(dato) {
  let caja = document.querySelector(".caja");
  caja.innerHTML = `
  <h1 class="titulo">Usuarios Disponibles</h1>
`;


  dato.forEach(element => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="caja_individual">
    <div class="foto"></div>
    <h1 class="username">${element.username}</h1>
    <div class="Info">
    <h2 class="correo">Email: ${element.email}</h2>
    <h2 class="telefono">Phone: ${element.phone}</h2>
    <h2 class="compañia">Company: ${element.company.name}</h2>
    </div>
    </div>
`;
   /* console.log("------------------------------------------------------------");
    console.log(element.username);
    console.log('Email:', element.email);
    console.log('Phone:', element.phone);
    console.log('Company:', element.company.name);
    console.log("------------------------------------------------------------"); */
    caja.appendChild(div);
  });
}

post(api_url);
