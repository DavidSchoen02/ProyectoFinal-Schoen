const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

const searchInput = document.getElementById("searchInput");
const resultList = document.getElementById("resultsList");
const noResults = document.getElementById("noResults");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
  const response = await fetch("data.json");
  const data = await response.json();

  function renderAllProducts() {
  data.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
  <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <p class="price">${product.precio} $ </p>
  `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
      const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

      if (repeat) {
        carrito.map((prod) => {
          if (prod.id === product.id) {
            prod.cantidad++;
          }
          Swal.fire({
            icon: 'success',
            title: 'Producto Adherido al carrito',
            text:  'Gracias por tu compra!'
          });
        });
      } else {
        carrito.push({
          id: product.id,
          img: product.img,
          nombre: product.nombre,
          precio: product.precio,
          cantidad: product.cantidad,
        });
        carritoCounter();
        saveLocal();
      }
    });
  });
}
//set item
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};

const handleSearch = () => {
  const shopContent = document.getElementById("shopContent");
  const searchIterm = searchInput.value.toLowerCase();
  const filteredProductos = data.filter((data) =>
    data.nombre.toLowerCase().startsWith(searchIterm)
  );

  shopContent.innerHTML = "";
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

      const precio = document.createElement("precio");
      precio.textContent = producto.precio;
      card.appendChild(precio);
    });
    noResults.style.display = "none";
  }
  if (searchInput.value === "") {
    resultList.innerHTML = "";
    renderAllProducts()
  }
};

searchInput.addEventListener("input", handleSearch);
renderAllProducts()
};



getProducts();

