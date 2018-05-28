/*web para determinar en que etapa de la vida esta la edad ingresada*/
const age = parseFloat(prompt("Hola! ¿que edad tienes?"));

/* para clasificar en rango de edad*/
if(age<1){
    alert ("Creo que tenemos un error, ingresa edad mayor que 0");
    } else if (age>1 && age<=3) {
    alert ("awww, estas en la categoria de Toddler");
    } else if (age>3 && age<=5){
    alert ("toda una Preschooler");
    } else if (age>5 && age<=12){
    alert ("Cuanto has crecido!! ya eres una gradeschooler");
    } else if (age>12 && age>=18){
    alert ("comienza a ponerse interesante verdad? Teenagers rocks!!");
    } else if (age>18 && age <=21){
    alert ("Cuanta energia!! estás en la categoria de young adult");
    } else if(age>21){
    alert ("Que bien te sientan los años! Categoria Adulto");
} 
else (age !=0)
    alert ("ERROR")
/*lanza error si se entrega una letra*/


       