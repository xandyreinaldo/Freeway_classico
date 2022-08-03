// variaveis imagens do jogo 
let imagemDaEstrada;
let personagem;
let trilha_sonora;
let som_colisao;
let marcando_ponto;
//let carro_1;
//let carro_2;
//let carro_3;

function preload(){
  imagemDaEstrada = loadImage("image/estrada.png");
  personagem = loadImage("image/ator-1.png");
  carro_1 = loadImage("image/carro-1.png");
  carro_2 = loadImage("image/carro-2.png");
  carro_3 = loadImage("image/carro-3.png");
  imgCarros = [carro_1, carro_2, carro_3,carro_1, carro_2, carro_3]
  trilha_sonora = loadSound("sons/trilha.mp3");
  som_colisao = loadSound("sons/colidiu.mp3");
  som_ponto = loadSound("sons/pontos.wav")
}



