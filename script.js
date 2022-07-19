class producto {
    constructor(marca, precio){
        this.marca = marca
        this.precio = precio
    }
}

function crearProductos(marca, precio){
    const nuevoProducto = new producto(marca, precio)
    productos.push(nuevoProducto)
}

let marca, precio, sigue
const productos = []
do{
    marca = prompt("Cual es la marca que quiere agregar?").toLowerCase()
    do{
        precio = parseInt(prompt("precio"))
    }while(isNaN(precio))
    crearProductos(marca, precio)
    sigue = prompt("Escriba 'no' o 'si', para continuar agregando productos").toLowerCase()
    if (sigue != "si"){
    }

    }
while(sigue == "si")

let opciones;
do{
    opciones = parseInt(prompt("Presione:1- Ordenar de mayor a menor segun su precio.2- Filtrar por marcas"))
}while(isNaN(opciones) && (opciones < 1, opciones > 2))
if (opciones == 1){
    console.log(productos.sort((a, b) => b.precio - a.precio))
}else if(opciones == 2){
    let prueba = prompt("escriba una marca").toLowerCase()
    console.log(productos.filter(productos => productos.marca == prueba))
}else{
    alert("no existe esa opcion")
}