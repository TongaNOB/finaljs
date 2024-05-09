const productos = [
    {
        nombre: "Producto 1",
        descripcion: "Descripción del producto 1",
        precio: 10.99,
        imagen: "./rutadelaimagen.jpg",
        codigo: "ABC123",
    },
    {
        nombre: "Producto 2",
        descripcion: "Descripción del producto 2",
        precio: 15.99,
        imagen: "./rutadelaimagen.jpg",
        codigo: "DEF456",
    },
    {
        nombre: "Producto 3",
        descripcion: "Descripción del producto 3",
        precio: 20.49,
        imagen: "./rutadelaimagen.jpg",
        codigo: "GHI789",
    },
    {
        nombre: "Producto 4",
        descripcion: "Descripción del producto 4",
        precio: 8.79,
        imagen: "./rutadelaimagen.jpg",
        codigo: "JKL012",
    },
    {
        nombre: "Producto 5",
        descripcion: "Descripción del producto 5",
        precio: 12.99,
        imagen: "./rutadelaimagen.jpg",
        codigo: "MNO345",
    },
    {
        nombre: "Producto 6",
        descripcion: "Descripción del producto 6",
        precio: 18.59,
        imagen: "./rutadelaimagen.jpg",
        codigo: "PQR678",
    },
    {
        nombre: "Producto 7",
        descripcion: "Descripción del producto 7",
        precio: 9.99,
        imagen: "./rutadelaimagen.jpg",
        codigo: "STU901",
    },
    {
        nombre: "Producto 8",
        descripcion: "Descripción del producto 8",
        precio: 22.49,
        imagen: "./rutadelaimagen.jpg",
        codigo: "VWX234",
    },
    {
        nombre: "Producto 9",
        descripcion: "Descripción del producto 9",
        precio: 7.29,
        imagen: "./rutadelaimagen.jpg",
        codigo: "YZA567",
    },
    {
        nombre: "Producto 10",
        descripcion: "Descripción del producto 10",
        precio: 14.99,
        imagen: "./rutadelaimagen.jpg",
        codigo: "BCD890",
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



