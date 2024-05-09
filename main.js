const productos = [
    {
        nombre: "Birome NOB",
        descripcion: "Birome trazo fino, tinta negra",
        precio: 1700,
        imagen: "img/birome.jpg",
        codigo: "BINOB74",
    },
    {
        nombre: "Lapicera NOB",
        descripcion: "Lapicera trazo gruezo, tinta negra",
        precio: 2300,
        imagen: "img/lapicera.jpg",
        codigo: "LANOB74",
    },
    {
        nombre: "ETIQUETAS NOB",
        descripcion: "Etiquetas autoadhesivas NOB",
        precio: 1500,
        imagen: "img/etiquetas.jpg",
        codigo: "ETNOB74",
    },
    {
        nombre: "CARTUCHERA DOBLE NOB",
        descripcion: "Cartuchera NOB 2 pisos",
        precio: 10500,
        imagen: "img/cartuchera-newells.jpg",
        codigo: "CA2NOB74",
    },
    {
        nombre: "CARTUCHERA SIMPLE NOB",
        descripcion: "Cartuchera NOB 1 compartimento",
        precio: 5800,
        imagen: "img/cartuchera-newells-2.jpg",
        codigo: "CA1NOB74",
    },
    {
        nombre: "CARPETA NOB",
        descripcion: "Carpeta con elastico NOB ",
        precio: 3900,
        imagen: "img/carpeta-newells.jpg",
        codigo: "CPNOB74",
    },
    {
        nombre: "CARPETA ANILLOS NOB",
        descripcion: "Carpeta con anillos metalicos NOB",
        precio: 6500,
        imagen: "img/carpeta-newells-2.jpg",
        codigo: "CP1NOB74",
    },
    {
        nombre: "CUADERNO NOB",
        descripcion: "Cuaderno espiralado NOB 100 hojas",
        precio: 3200,
        imagen: "img/cuaderno.jpg",
        codigo: "CUNOB74",
    },
    {
        nombre: "MOCHILA NOB",
        descripcion: "Mochila escolar NOB",
        precio: 25000,
        imagen: "img/mochila-colegio.jpg",
        codigo: "MONOB74",
    },
    {
        nombre: "MOCHILA UMBRO NOB",
        descripcion: "Mochila deportiva UMBRO de NOB",
        precio: 36000,
        imagen: "img/mochila-umbro.jpg",
        codigo: "MOUMB74",
    },
];

const cardsContainer = document.getElementById("products-container");

for (const producto of productos) {
    const card = document.createElement("div");
    card.innerHTML = `
        <figure>
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </figure>
        <div>
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>${producto.precio}</p>
        </div>
        <button id="btn${producto.codigo}">Agregar al carrito</button>
    `

    cardsContainer.appendChild(card);
    
    const boton = document.getElementById(`btn${producto.codigo}`);
    boton.addEventListener("click", () => agregarAlCarrito(producto));
}



