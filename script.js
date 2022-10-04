// Classes
class Retangulo {

  constructor(eixoX, eixoY, largura, altura, cor) {
    this.eixoX = eixoX;
    this.eixoY = eixoY;
    this.largura = largura;
    this.altura = altura;
    this.cor = cor;
  }

  desenhar() {
    ctx.beginPath();
    ctx.fillStyle = this.cor;
    ctx.fillRect(
      this.eixoX,
      this.eixoY,
      this.largura,
      this.altura
    )
    ctx.stroke();
  }
}

class Carro {
  vel = 0;
  angAtual = 0;
  componentes = [];
  direcao = 0.0001;
  status = {
    frente: false,
    direita: false,
    reh: false,
    esquerda: false,
    freiar: false,
    aumentarCarro: false,
    diminuirCarro: false,
  }

  constructor(eixoX, eixoY, aceleracao) {
    this.eixoX = eixoX;
    this.eixoY = eixoY;
    this.aceleracao = aceleracao;
  }

  desenhar() {
    ctx.rotate(carro.angAtual * (Math.PI * 180));

    if (carro.status.aumentarCarro) {
      ctx.scale(1.5,1.5);
    }
    if (carro.status.diminuirCarro) {
      ctx.scale(0.5, 0.5);
    }

    carro.componentes.forEach((componente) => {
      componente.desenhar();
    });
 }

}

var tela = document.getElementById("tela");
var ctx = tela.getContext("2d");

var carro = new Carro(15, 5, 0.002);

carro.componentes.push(new Retangulo(0, 0, 80, 40,"#fd0101a2"));
carro.componentes.push(new Retangulo(50, 6, 12, 28, "#e0f146"));  
var momento = 0.001;

function transladarX() {
  return Math.cos(carro.angAtual * (Math.PI * 180)) * carro.vel;
}

function transladarY() {
  return Math.sin(carro.angAtual * (Math.PI * 180)) * carro.vel;
}

function redenrizar() {
  atualizarCarro();
  exercerMomento();
  
  ctx.clearRect(0, 0, tela.width, tela.height);
  ctx.save();
  ctx.translate(
    (tela.width * carro.eixoX) / 100,
    (tela.height * carro.eixoY) / 100
  );
  carro.desenhar();
  ctx.restore();
  ctx.save();
  requestAnimationFrame(redenrizar);
}

function exercerMomento(){
  if (carro.vel > 0.001) {
    carro.vel = carro.vel - momento;
  }
  else if (carro.vel < -0.001){
    carro.vel = carro.vel + momento;
  }
}

function atualizarCarro(){
  if (carro.status.frente) {
    carro.vel = carro.vel + carro.aceleracao;
  }
  if (carro.status.reh) {
    carro.vel = carro.vel - carro.aceleracao;
  }
  if (carro.status.esquerda && carro.vel > 0) {
    carro.angAtual = carro.angAtual - carro.direcao * (carro.vel);
  }
  if (carro.status.direita && carro.vel > 0) {
    carro.angAtual = carro.angAtual + carro.direcao * carro.vel;
  }
  if (carro.status.esquerda && carro.vel < 0) {
    carro.angAtual = carro.angAtual + carro.direcao * carro.vel;
  }
  if (carro.status.direita && carro.vel < 0) {
    carro.angAtual = carro.angAtual - carro.direcao * carro.vel;
  }
  if(carro.status.freiar && carro.vel > 0){
    carro.vel =  carro.vel - (carro.vel/12);
  }
  carro.eixoX += transladarX();
  carro.eixoY += transladarY();
}

document.onkeydown = function (evt) {
  switch (evt.key) {
    case 'w':
      carro.status.frente = true;
      break;
    case 'd':
      carro.status.direita = true;
      break;
    case 's':
      carro.status.reh = true;
      break;
    case 'a':
      carro.status.esquerda = true;
      break;
    case ' ':
      carro.status.freiar = true;
      break;

    default:
      return console.log('Utilize as teclasa W, A, S, D para mover o Carro');
  }
}

document.onkeyup = function (evt) {
  switch (evt.key) {
    case 'w':
      carro.status.frente = false;
      break;
    case 'd':
      carro.status.direita = false;
      break;
    case 's':
      carro.status.reh = false;
      break;
    case 'a':
      carro.status.esquerda = false;
      break;
    case ' ':
      carro.status.freiar = false;
      break;
    default:
      return;
  }
}

requestAnimationFrame(redenrizar);
