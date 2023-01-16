var saida = document.getElementById("saida");
var imprimir = "";

var semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
alert(semana.push("Oitava", "Sabado 2","Domingo 2"));
alert(semana.pop());
semana.shift();

alert(semana.indexOf("Quinta"));

for(var i = 0; i < semana.length; i++){
    imprimir += semana[i] + "<br>";
}

saida.innerHTML = imprimir;