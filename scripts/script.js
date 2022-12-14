let opcion = 0;

const listaProductos = [];





let Productos = [
    {
      "nombre": "Silla Simple",
      "categoria": "Sillas",
      "descripcion": "Silla de plastico",
      "foto": "",
      "stock": 100,
      "valor": 5000
    },
    {
        "nombre": "Silla con funda",
        "categoria": "Sillas",
        "descripcion": "Silla de madera con funda color a elección",
        "foto": "",
        "stock": 75,
        "valor": 7500
    },
    {
        "nombre": "Sofa un cuerpo",
        "categoria": "Sofas",
        "descripcion": "Sofa de ratán Largo:80cm Ancho:80cm",
        "foto": "",
        "stock": 20,
        "valor": 10000
    }
];

let Carrito = [];

class Carro{
    constructor(nombre, cantidad, dias, valor){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.dias = dias;
        this.valor = valor;
    }
}

function agregarAlCarrito(){
    let nombreCapturado = Productos[0].nombre;
    let cantidadCapturada = parseInt(prompt("Cuantas unidades quiere arrendar:"));
    let diasCapturados = parseInt(prompt("Cuantos días quiere arrendar:"));
    let valorCapturado = Productos[0].valor * cantidadCapturada * diasCapturados
    let nuevoAlCarrito = new Carro(nombreCapturado, cantidadCapturada, diasCapturados, valorCapturado)

    Carrito.push(nuevoAlCarrito);

    return Carrito
}


class Producto{
    constructor(nombre, categoria, descripcion, foto, stock, valor){
    this.nombre=nombre;
    this.categoria=categoria;
    this.descripcion=descripcion;
    this.foto=foto;
    this.stock=stock;
    this.valor=valor;   
}
}

function agregarProductos(){

        let nombreCapturado = prompt("Ingrese nombre del Producto: ")
        let categoriaCapturada = prompt("Ingrese categoría del Producto: ")
        let descripcionCapturada = prompt("Ingrese descripcion del Producto: ")
        let fotocapturada = prompt("Ingrese foto del Producto: ")
        let stockCapturado = parseInt(prompt("Ingrese stock de "+ nombreCapturado + ":"));
        let valorCapturado = parseFloat(prompt("Ingrese valor diario de "+ nombreCapturado + ":"));
        let nuevoProducto = new Producto(nombreCapturado, categoriaCapturada,  descripcionCapturada, fotocapturada, stockCapturado, valorCapturado);

        Productos.push(nuevoProducto); 
    
    return Productos
}

function main(){
    menu();   
    agregarElementos();
 }


 
// --Mostramos el arreglo completo en consola --
function mostrar(){
    console.log("-La cantidad de productos ingresados son: " + Productos.length)
    Productos.forEach(i => console.log(i))  
}



// -- Menu de opciones --
function menu(){
    while (opcion <= 5) {
        // Menu //
        console.log("Menu");
        console.log("----");
        console.log("1. Ingresar productos");
        console.log("2. Mostrar productos ingresados");
        console.log("3. Agregar al arriendo");
        console.log("4. Buscar según categoría ingresada")
        console.log("5. Salir");
        opcion = parseInt(prompt("Ingrese Opción: "));
        console.log("Usted ingreso la opcion " + opcion +"...")  
    
        if (opcion == 1){
          let productos = agregarProductos()
          console.log(productos)  
          console.clear;
        }
    
        if (opcion == 2){
            mostrar();
        }
    
          
         if (opcion == 3){
            let producotAAgregar = prompt("Que Producto desea agregar? ")
            agregarAlCarrito();
            console.log(Carrito);
        }

        if (opcion == 4){
           let categoriaABuscar = prompt("Que categoria desea? ")
           let resultado = Productos.filter((elemento) => elemento.categoria == categoriaABuscar);
           console.log(resultado)
          }

          if (opcion == 5){
            break
          }
    
        if (opcion < 1 || opcion > 5){
          alert("Ingrese opción correcta (1..5)...");
    
       } 
    
      }
}

//Esta funcion nos permite agregar los elementos en modo lista.
function agregarElementos(){ 
    var lista=document.getElementById("contenedor-productos"); 
    Productos.forEach(function(data,index){
    var linew= document.createElement("li");    
    var contenido = document.createTextNode(data.nombre + " " + data.categoria);
    lista.appendChild(linew);
    linew.appendChild(contenido);
    
    })
    }
 //Fin funcion agregaElementos()





main();

