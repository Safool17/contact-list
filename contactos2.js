let listaContactos = [
  {
    id: 1,
    nombres: "Luz Marina",
    apellidos: "Olarte Zuluaga",
    telefono: "3224132845",
    ubicaciones: [{ ciudad: "Bogota", direccion: "Cra 7" }],
  },
  {
    id: 2,
    nombres: "Oswaldo",
    apellidos: "Forero Tarquino",
    telefono: "3102765619",
    ubicaciones: [{ ciudad: "Bogota", direccion: "Cra 7" }],
  },
  {
    id: 3,
    nombres: "Vanessa",
    apellidos: "Forero Olarte",
    telefono: "3144546805",
    ubicaciones: [{ ciudad: "Cota", direccion: "Vereda" }],
  },
  {
    id: 4,
    nombres: "Luis",
    apellidos: "Garcia",
    telefono: "3205210235",
    ubicaciones: [{ ciudad: "Bogota", direccion: "Calle 1 sur" }],
  },
];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(contacto) {
  listaContactos.push(contacto);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(id) {
  listaContactos = listaContactos.filter((contacto) => contacto.id !== id);
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach((contacto, indice) => {
    console.log(
      `${indice + 1}. ${contacto.nombres} ${contacto.apellidos}, Teléfono: ${
        contacto.telefono
      }`
    );
    contacto.ubicaciones.forEach((ubicacion, indiceUbicacion) => {
      console.log(
        `   Ubicación ${indiceUbicacion + 1}: ${ubicacion.ciudad}, ${
          ubicacion.direccion
        }`
      );
    });
  });
}

agregarContacto({
  id: 5,
  nombres: "Juan Carlos",
  apellidos: "García",
  telefono: "3005456985",
  ubicaciones: [{ ciudad: "Cota", direccion: "Vereda" }],
});
imprimirContactos();

borrarContacto(4);
imprimirContactos();
