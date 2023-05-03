let placa, Numpasajero, Vpasaje, placa2, Npasajero2 , Vpasaje2, total, total2

placa = prompt("Ingrese su placa")
Numpasajero = Number(prompt("Ingrese el numero de pasajeros"))
Vpasaje = Number(prompt("Ingrese el valor del pasaje"))
placa2 = prompt("Ingrese su placa")
Npasajero2 = Number(prompt("Ingrese el numero de pasajeros"))
Vpasaje2 = Number(prompt("Ingrese el valor del pasaje"))


total = Vpasaje*Numpasajero
total2 = Vpasaje2*Npasajero2

if(total<total2){
    alert("El que más dinero recogió fue " + placa2 )
} else if(total>total2){
    alert("El que más dinero recogió fue " + placa )
}