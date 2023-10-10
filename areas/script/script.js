function area() {
    let figuras = document.getElementById("figuras").value;
    
    let lado = document.getElementById("lado").value;

    let altura = document.getElementById("altura").value;

    let resArea;

    if(figuras == "cuadrado"){
        resArea = lado * altura;
        alert("El area del cuadrado es: " + resArea);
    }else if (figuras == "rectangulo"){
        resArea = lado * altura;
        alert("El area del rectangulo es: " + resArea);
    }else if (figuras == "triangulo"){
        resArea= (lado * altura) / 2;
        alert("El area del triangulo es: " + resArea);
    }

        
}

const button = document.getElementById('button')
button.addEventListener("click", function() {
    area();

});