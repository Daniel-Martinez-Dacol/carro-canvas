//Indica ao navegador para trabalhar estritamente com
//dados já definidos
"use strict";
//Recupera a referência ao objeto do canvas HTML
var canvas = document.getElementById("tela");
//Recupera o contexto de desenho bidimensional do canvas
var ctx = canvas.getContext("2d"); //Não utilizado em WebGL
var x = 200, y = 100, larg = 10, alt = 10, ang = 0;
var x2 = 200, y2 = 200, ang2 = 0, larg2 = 200, alt2 = 100;

function desenharTriangulo() {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+50,y+50);
    ctx.lineTo(x-50,y+50);
    ctx.fill();
}

function desenharCirculo() {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill();
}

function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 3;

    //retângulo maior
    ctx.save();
    ctx.translate(x2,y2);
        ctx.rotate(ang2);
        
        // RODAS :
        //ctx.fillStyle = "rgb(120, 120, 120)";
        //ctx.fillRect(larg2-150, alt2-60,60, 35);
        //ctx.beginPath();
        //ctx.fillRect(larg2-150, alt2-180,60, 35);
        //ctx.beginPath();
        //ctx.fillRect(larg2-310, alt2-180,60, 35);
        //ctx.beginPath();
        //ctx.fillRect(larg2-310, alt2-60,60, 35);
        //ctx.beginPath();

        // Farol
        ctx.beginPath();
        ctx.moveTo(larg2-215,alt2-104);
        ctx.lineTo(250,120);
        ctx.lineTo(250,-120);
        ctx.fillStyle = "rgb(255, 128, 0)";
        ctx.fill();

        ctx.stroke();
        ctx.fillStyle = "rgb(176, 176, 176)";
        ctx.fillRect(-larg2/2,-alt2/2,larg2,alt2);


    ctx.restore();
    //rodas
    ctx.save();
    ctx.translate(x2,y2);
    ctx.rotate(ang);
        // RODAS :
        ctx.fillStyle = "rgb(120, 120, 120)";
        ctx.fillRect(larg2-150, alt2-60,60, 35);
        ctx.beginPath();
        ctx.fillRect(larg2-150, alt2-180,60, 35);
        ctx.beginPath();
        ctx.fillRect(larg2-310, alt2-180,60, 35);
        ctx.beginPath();
        ctx.fillRect(larg2-310, alt2-60,60, 35);
        ctx.beginPath();
    ctx.restore();    
    ctx.save();

       // ctx.translate(x, y);
        //ctx.rotate(ang2);
        //ctx.beginPath();
           // ctx.moveTo(0, 0);
            //ctx.lineTo(50, 0);
        //ctx.stroke();
      // ctx.fillStyle = "rgb(120, 0, 200)";
      //ctx.fillRect(0, 0,40, 40);
    //ctx.restore();
    requestAnimationFrame(desenhar);
}

/*function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ang += 0.1;
    ctx.save();
        ctx.translate(x,y);
        ctx.rotate(ang);
        ctx.fillStyle = "rgb(200, 200, 200)";
        ctx.fillRect(-larg/2,0, larg, alt);
        ctx.fillStyle = "rgb(255, 64, 0)";
        ctx.beginPath();
        ctx.moveTo(-larg/2, 0);
        ctx.lineTo(0, -alt);
        ctx.lineTo(larg/2, 0);
        ctx.fill();
    ctx.restore();
    
    //ctx.fillRect(x, y, larg, alt);
    //desenharTriangulo();
    //y += 1;
    //desenharCirculo();
    requestAnimationFrame(desenhar);

                //farol kkkkkkk
            ctx.moveTo(larg2/2,alt2/2);
            ctx.lineTo(larg2,alt2);
            ctx.lineTo(larg2,alt2-200);
            ctx.lineTo(larg2-100,alt2 - 150);
            ctx.lineTo(larg2/2,alt2/2);
            ctx.strokeStyle = "rgb(255, 128, 0)";
}*/

/*function desenhar() {
    var lado = 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
        ctx.translate(50, 50);
        ctx.fillStyle = "rgb(255, 128, 0)";
        ctx.fillRect(-lado/2, -lado/2, lado, lado);
        ctx.translate(100, 0);
        ctx.fillStyle = "rgb(255, 0, 0)";
        ctx.fillRect(-lado/2, -lado/2, lado, lado);
    ctx.restore();
    ctx.save();
        ctx.translate(10,10);
        ctx.fillStyle = "rgb(0, 0, 200)";
        ctx.fillRect(-lado/2, -lado/2, lado, lado);
    ctx.restore();
    requestAnimationFrame(desenhar);
}*/

//Indica ao navegador o que executar quando estiver pronto
//para realizar uma nova renderização
requestAnimationFrame(desenhar);

document.onkeydown = function  (evt) {
    console.log(evt.keyCode);
    switch(evt.keyCode) {
        case 37: //Esquerda
            x -= 5;
            break;
        case 39: //Direita
            x += 5;
            break;
        case 38: //Cima
            y -= 5;
            break;
        case 40: //Baixo
            y += 5;
            break;
        case 34: //Page Down
            ang += 0.1;
            break;
        case 33: //Page Up
            ang -= 0.1;
            break;
        case 65: //A
            x2 -= 5;
            break;
        case 68: //D
            x2 += 5;
            break;
        case 83: //S
            y2 += 5;
            break;
        case 87: //W
            y2 -= 5;
            break;
        case 81: //Q
            ang2 -= 0.1;
            ang -= 0.1;
            break;
        case 69: //E
            ang2 += 0.1;
            ang += 0.1;
            break;
    }
}
