var contagem = 0;
var saida = document.getElementById("saida");
var imprimir = "";

do{
    // alert(contagem);
    imprimir += contagem + "<br>";
    contagem += 1;
}while(contagem < -10);
saida.innerHTML = imprimir;
