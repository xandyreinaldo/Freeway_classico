/// variavel personagem
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meus_pontos = 0;

function mostra_ator(){
  image(personagem, xAtor, yAtor, 30, 30);
  print(yAtor)
}
function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(pode_se_movimentar()){
      yAtor += 3;
    }
    
  }
}

function verifica_colisao(){
//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
for ( let i = 0; i < imgCarros.length; i ++){
  colisao = collideRectCircle(xCarro[i], yCarro[i], comprimento_carro, altura_carro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
    }
  }
}
function colidiu (){
  yAtor = 366;
  som_colisao.play();
}

function marcador_placar(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,240,60))
  text(meus_pontos, width/ 4, 27 );
}

function marca_ponto(){
if (yAtor < 15){
  meus_pontos ++
  som_ponto.play();
  passou();
  }
}

function pode_se_movimentar(){
  return yAtor < 366;
}
function passou (){
  if(yAtor < 15 ){
    yAtor = 366;
  }
  
}