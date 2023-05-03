let placa,rpa,ruta
placa=prompt("ingrese su placa")
rpa=Number(prompt("numero de pasajeros"))
ruta=prompt("ingrese la ruta a o b")
if (ruta=="a"){
    alert("recolecto"+(rpa*1200))
}else if(ruta=="b"){
    alert("recolecto"+(rpa*1000))
}