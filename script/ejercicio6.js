let tipotrabajador, nombre, salarioneto, hdt, slb, dcn, bnf, h;
h = 6000;
nombre = prompt("Ingrese nombre del trabajador");
tipotrabajador = Number(prompt("ingrese el tipo de empleado (fijo=1 o temporal=2)"))
hdt = Number(prompt("Ingrese horas de trabajo"));
if (tipotrabajador == 1) 
    dcn = Number(prompt("Ingrese deducciones"));
    bnf = Number(prompt("Ingrese bonificaciones"));
    slb = (hdt * h) - dcn;
    salarioneto = slb + bnf;
    alert("el nombre del empleado es:" + nombre);
    alert("sus deducciones son:" + dcn);
    alert("sus bonificaciones son:" + bnf);
    alert("su salario total es:" + salarioneto);