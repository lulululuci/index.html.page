const productos = [
    {
        nombre: "Cadena Shimano",
        precio: 2500,
        imagen: "imagen.tienda/CadenaShimano.jpg"
    },
    {
        nombre: "Cámara 29'",
        precio: 5000,
        imagen: "imagen.tienda/camara29.jpg"
    },
    {
        nombre: "Cubierta MTB 29''",
        precio: 10000,
        imagen: "imagen.tienda/cubierta29.jpg"
    }
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>Precio: $${p.precio}</p>
        <button>Comprar</button>
    `;

    contenedor.appendChild(card);
});

#usuario, #carrito {
    background: white;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
}

#usuario form, #carrito {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

#usuario input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

#usuario button, #carrito button {
    padding: 10px;
    border: none;
    background: #03105c;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

#carrito ul {
    list-style: none;
    padding: 0;
}





