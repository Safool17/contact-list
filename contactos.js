let listaContactos = ["Luz Olarte", "Oswaldo Forero", "Lampara Forero"];

function agregarContacto(nombreCompleto) {
  listaContactos.push(nombreCompleto);
}

function borrarContacto(nombreCompleto) {
  let indice = listaContactos.indexOf(nombreCompleto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
  }
}

function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach((contacto, indice) => {
    console.log(`${indice + 1}. ${contacto}`);
  });
}

agregarContacto("Juan Garcia");
imprimirContactos();

borrarContacto("Lampara Forero");
imprimirContactos();
