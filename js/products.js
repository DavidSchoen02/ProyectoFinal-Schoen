const productos = [
    { id: 1, nombre: "Plato Dragon", precio: 5500, cantidad: 1, img: "img/Platos/drag.jpg" },
    { id: 2, nombre: "Plato Dragon X2", precio: 8000, cantidad: 1, img: "img/Platos/dragone.jpg" },
    { id: 3, nombre: "Plato Guys", precio: 5500, cantidad: 1, img: "img/Platos/guys.jpg" },
    { id: 4, nombre: "Plato Onepi", precio: 5500, cantidad: 1, img: "img/Platos/onepi.jpg" },
    { id: 5, nombre: "Set Onepi", precio: 10000, cantidad: 1, img: "img/SetAnime/onepis.jpg" },
    { id: 6, nombre: "Set Osito", precio: 12000, cantidad: 1, img: "img/SetAnime/osito.jpg" },
    { id: 7, nombre: "Set Anime", precio: 15000, cantidad: 1, img: "img/SetAnime/setanime.jpg" },
    { id: 8, nombre: "Taza Cuerno", precio: 6000, cantidad: 1, img: "img/Tazas/taza.jpg" },
    { id: 9, nombre: "Taza Two", precio: 6200, cantidad: 1, img: "img/Tazas/tazatwo.jpg" },
    { id: 10, nombre: "Taza Three", precio: 6500, cantidad: 1, img: "img/Tazas/tazathree.jpg" },
    { id: 11, nombre: "Taza Four", precio: 7000, cantidad: 1, img: "img/Tazas/tazafour.jpg" },
    { id: 12, nombre: "Taza Five", precio: 5800, cantidad: 1, img: "img/Tazas/tazafive.jpg" },
    { id: 13, nombre: "Taza Six", precio: 5000, cantidad: 1, img: "img/Tazas/tazasix.jpg" }
];

const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultsList");
const noResults = document.getElementById("noResults");

const handleSearch = () => {
    const searchIterm = searchInput.value.toLowerCase();
    const filteredProductos = productos.filter((producto) =>
        producto.nombre.toLowerCase().startsWith(searchIterm)
    );

    resultList.innerHTML = "";

    if (filteredProductos.length === 0) {
        noResults.style.display = "block";
    } else {
        filteredProductos.forEach((producto) => {
            const card = document.createElement("div");

            const li = document.createElement("li");
            li.textContent = producto.nombre;
            card.appendChild(li);

            const imagen = document.createElement("img");
            imagen.src = producto.img;
            imagen.classList.add("card");
            card.appendChild(imagen);

            resultList.appendChild(card);
        });
        noResults.style.display = "none";
    }
    if (searchInput.value === "") {
        resultList.innerHTML = "";
    }
};

searchInput.addEventListener("input", handleSearch);



