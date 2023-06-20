const cart = []
let total = 0
let pregunta = true
const products = [
  {
    id: 0,
    nombre: "Tv",
    precio: 100000
  },
  {
    id: 1,
    nombre: "Heladera",
    precio: 500000
  },
  {
    id: 2,
    nombre: "Cafetera",
    precio: 10000
  },
]

function addProduct() {
  const id = prompt("Ingresa el id del producto a agregar")
  const product = products.find(product => product.id === parseInt(id))
  if (!product) {
    alert("No se encontro producto con el id indicado")
    return
  }

  total = 0
  cart.push(product)
  alert(`Se ha agregado el producto ${product.nombre}`)

  cart.forEach(product => total += product.precio)

  alert(`El total del carrito es $${total}`)

}

function deleteProduct() {
  const id = prompt("Ingresa el id del producto a eliminar")
  const deletedProduct = cart.find(product => product.id === parseInt(id))

  if (deletedProduct) {
    cart.splice(cart.indexOf(deletedProduct), 1)
    total -= deletedProduct.precio
    alert(`Se borro el producto ${deletedProduct.nombre}`)
  } else {
    alert("No se encontro producto con ese id")
  }



}

function showProducts() {
  let listaProductos = "Productos:"

  products.forEach(product => {
    listaProductos += `
  ${product.nombre}
   id: ${product.id}
   precio: $${product.precio}`
  })

  alert(listaProductos)

}

function showCart() { 
  let listaCarrito = "Productos:"

  cart.forEach(product => {
    listaCarrito += `
  ${product.nombre}
   id: ${product.id}
   precio: $${product.precio}`
  })

  listaCarrito += ` 
  Total carrito: $${total}`

  alert(listaCarrito)
}

function deleteCart() {
cart.splice(0, cart.length)
alert("Se vacio el carrito")
total = 0;
showCart()
}

function endProgram() {
  pregunta = false;
}


do {
  const opcion = prompt(`
Menu:

  1)Mostrar productos
  2)Agregar Producto
  3)Ver Carrito
  4)Eliminar Producto
  5)Vaciar Carrito
  6)Salir`)


  switch (opcion) {
    case ("1"):
      showProducts()
      break;

    case ("2"):
      addProduct()
      break;

    case ("3"):
      showCart()
      break;

    case ("4"):
      deleteProduct()
      break;

    case ("5"):
      deleteCart()
      break;

    case ("6"):
      endProgram()
      break;

  }

} while (pregunta)
