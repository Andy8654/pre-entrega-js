//Sinulador de tienda sumando productos con Impuestos y descuentos
let total = 0
let carrito = "Carrito: \n"
let rta = ""

//Impuestos de peru

function iva(precio){
    return precio * 0.18
}
do{
    let producto = prompt("Ingrese los componentes de pc que desea llevar:").toLowerCase()
    let precio = Number(prompt("Ingrese el valor del producto"))

    total = total + precio + iva(precio)
    carrito = carrito + "\n" + producto + "\t$" + (precio + iva(precio))
    rta = prompt("¿Desea salir?(Escriba 'salir' para salir).").toLowerCase()

}while(rta != "salir")

if(total >= 1000){
//descuento del 20%
    let resultadoTotal = total * 0.80
    alert(carrito + "\n\nTotal: $" + total + "\nCon descuento: $" + resultadoTotal)
}else{
    alert(carrito + "\n\nTotal: $" + Total)
}

if(total >= 6000){
    //descuento del 40%
        let resultadoTotal = Total * 0.60
        alert(carrito + "\n\nTotal: $" + Total + "\nCon descuento: $" + resultadoTotal)
    }else{
        alert(carrito + "\n\nTotal: $" + Total)
    }
    
