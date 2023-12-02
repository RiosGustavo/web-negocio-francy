const productos = [
  {
    id: "gorro-satin-1",
    titulo: "gorro-satin-1",
    imagen: "../img/gorro-satin-2.png",
    categoria: {
      nombre: "Gorros",
      id: "gorros",
    },
    precio: 38500,
  },
  {
    id: "gorro-satin-2",
    titulo: "gorro-satin-2",
    imagen: "../img/gorro-satin-3.png",
    categoria: {
      nombre: "Gorros",
      id: "gorros",
    },
    precio: 38500,
  },
  {
    id: "gorro-satin-3",
    titulo: "gorro-satin-3",
    imagen: "../img/gorro-satin-4.png",
    categoria: {
      nombre: "Gorros",
      id: "gorros",
    },
    precio: 38500,
  },
  {
    id: "gorro-satin-2",
    titulo: "gorro-satin-2",
    imagen: "../img/gorro-satin-3.png",
    categoria: {
      nombre: "Gorros",
      id: "gorros",
    },
    precio: 38500,
  },
  {
    id: "funda-satin-1",
    titulo: "funda-satin-1",
    imagen: "../img/funda-satin-1.png",
    categoria: {
      nombre: "Fundas",
      id: "fundas",
    },
    precio: 38500,
  },
  {
    id: "funda-satin-2",
    titulo: "funda-satin-2",
    imagen: "../img/funda-satin-2.png",
    categoria: {
      nombre: "Fundas",
      id: "fundas",
    },
    precio: 38500,
  },
  {
    id: "funda-satin-3",
    titulo: "funda-satin-3",
    imagen: "../img/funda-satin-3.png",
    categoria: {
      nombre: "Fundas",
      id: "fundas",
    },
    precio: 38500,
  },
  {
    id: "funda-satin-4",
    titulo: "funda-satin-4",
    imagen: "../img/funda-satin-4.png",
    categoria: {
      nombre: "Fundas",
      id: "fundas",
    },
    precio: 38500,
  },
  {
    id: "bamba-satin-1",
    titulo: "bamba-satin-1",
    imagen: "../img/bamba-satin-1.png",
    categoria: {
      nombre: "Bambas",
      id: "bambas",
    },
    precio: 38500,
  },
  {
    id: "bamba-satin-2",
    titulo: "bamba-satin-2",
    imagen: "../img/bamba-satin-2.png",
    categoria: {
      nombre: "Bambas",
      id: "bambas",
    },
    precio: 38500,
  },
  {
    id: "bamba-satin-3",
    titulo: "bamba-satin-3",
    imagen: "../img/bamba-satin-3.png",
    categoria: {
      nombre: "Bambas",
      id: "bambas",
    },
    precio: 38500,
  },
  {
    id: "bamba-satin-4",
    titulo: "bamba-satin-4",
    imagen: "../img/bamba-satin-4.png",
    categoria: {
      nombre: "Bambas",
      id: "bambas",
    },
    precio: 38500,
  },
  {
    id: "cojin-semillas-1",
    titulo: "cojin-semillas-1",
    imagen: "../img/cojin-semilla-1.png",
    categoria: {
      nombre: "Cojines",
      id: "cojines",
    },
    precio: 38500,
  },

  {
    id: "cojin-semillas-1",
    titulo: "cojin-semillas-1",
    imagen: "../img/cojin-semilla-2.png",
    categoria: {
      nombre: "Cojines",
      id: "cojines",
    },
    precio: 38500,
  },
];

///ELEMENTOS DEL DOM

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar"); /// utilizamos la variabvle let para poderlo modificar posteriormente
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {
  contenedorProductos.innerHTML = ""; /// VACIAMOS EL  ARRAY PARA QUE SOLO NOS MUESTRE LOS PRODUCTOS DE CADA ID EN ESPECIAL Y NO TODOS

  productosElegidos.forEach((producto) => {
    const div = document.createElement("div");

    div.classList.add("producto");
    div.innerHTML = `
     <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
      <div class="producto-detalles">
         <h3 class="producto-titulo">${producto.titulo}</h3>
         <p class="producto-precio">$ ${producto.precio}</p>
         <button class="producto-agregar" id="${producto.id}">Agregar</button>
     </div>

    `;

    contenedorProductos.append(div);
  });

  actualizarBotonesAgregar();
}

cargarProductos(productos);

/* comentamos esto y lo traemos del HTML para saber que tenermos que ir haciendo en el js
<div class="producto">
<img class="producto-imagen" src="./img/gorro-satin-4.png" alt="">
<div class="producto-detalles">
    <h3 class="producto-titulo">Gorro Satin</h3>
    <p class="producto-precio">$ precio</p>
    <button class="producto-agregar">Agregar</button>
</div>
</div>
*/

botonesCategorias.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));

    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      const productosCategoria = productos.find(
        (producto) => producto.categoria.id === e.currentTarget.id
      );

      tituloPrincipal.innerText = productosCategoria.categoria.nombre;

      const productosBoton = productos.filter(
        (producto) => producto.categoria.id === e.currentTarget.id
      );

      cargarProductos(productosBoton);
    } else {
      tituloPrincipal.innerText = "todos los productos";
      cargarProductos(productos);
    }
  });
});

function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito")



if(productosEnCarritoLS){
  productosEnCarrito = JSON.parse(productosEnCarritoLS);
  actualizarNumerito();

} else{
  productosEnCarrito = []; /// cramos un arreglo con los productos agregados al carrito incialmente vacio
}



function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(
    (producto) => producto.id === idBoton
  );

  /// con este some se comprubea si el producto esta agregado varias veces en el carrito
  if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
    const index = productosEnCarrito.findIndex(
      (producto) => producto.id === idBoton
    );
    productosEnCarrito[index].cantidad++;
  } else {
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)) /// con esto guardamos la informacion agragaday la podemos recuperar en el carrito

}

function actualizarNumerito (){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0) /// con el reduce se le pasa un acumulador acc  el producto  con una funcion y que empiece en 0
    numerito.innerText = nuevoNumerito;

}
