const verduleria = [
  {
    nombre: "acelga",
    precio: 90,
    descripcion: "rica fuente de fibra soluble.",
  },
  {
    nombre: "banana",
    precio: 220,
    descripcion: "proteger el corazón debido a su contenido de potasio",
  },
  {
    nombre: "manzana",
    precio: 280,
    descripcion: "mejora el sistema inmune.",
  },
  {
    nombre: "naranja",
    precio: 110,
    descripcion: "aliado cardiovascular",
  },
  {
    nombre: "espinaca",
    precio: 100,
    descripcion: "rica en manganeso, magnesio, hierro y vitamina B2.",
  },
  {
    nombre: "jengibre",
    precio: 550,
    descripcion:
      " ayudar a combatir la gripe y el resfriado común, por nombrar algunos de sus propósitos",
  },
];

// let producto;
// let busqueda;
// let nuevoProducto;

// function busquedaProducto() {
//   producto = prompt("Ingrese el producto que desea buscar: ");
//   busqueda = verduras.find((elemento) => elemento.nombre == producto);
// }
// do {
//   busquedaProducto();
//   console.log(busqueda);

//   if (!busqueda) alert("Producto no encontrado");
//   else alert("Producto buscado:" + JSON.stringify(busqueda, null, 2));

//   nuevoProducto = prompt("Desea realizar una nueva búsqueda? (s/n)");
// } while (nuevoProducto == "s");
// alert("Muchas Gracias por su visita");

//INTERACTUAR CON HTML

let divVerduras = document.getElementById(`div-verduras`);
divVerduras.innerHTML += "<h1>Frutas y Verduras</h1>";
const divVerdura = document.createElement(`ul`);
divVerduras.append(divVerdura);

verduleria.forEach((verdura) => {
  const li = document.createElement(`li`);
  li.innerText = `Nombre: ${verdura.nombre} - 
          Precio: ${verdura.precio} - 
          Descripción: ${verdura.descripcion}`;

          divVerdura.append(li);
});


let verdu = document.getElementById(`verdu`);
verduleria.forEach((verdura,iVerdura)=>{
const productos = document.createElement(`option`);
productos.innerText = verdura.nombre;
productos.value = iVerdura;
verdu.append(productos);
});