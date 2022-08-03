//// variavel posição carro
let xCarro = [600, 600, 600, 600, 600, 600];
let yCarro = [40, 95, 150, 210, 270, 318];
let velocidadeCarro = [2, 2.5 ,3.2 ,5 ,3.3 ,2.3];
let comprimento_carro = 50;
let altura_carro = 40;

//let xCarro1 = 420;
//let yCarro1 = 40
//let velocidadeCarro1 = 2;

//let xCarro2 = 420;
//let yCarro2 = 95;
//let velocidadeCarro2 = 2.5;

//let xCarro3 = 420;
//let yCarro3 = 150;
//let velocidadeCarro3 = 3.0;

function mostraCarro(){
  for ( let i = 0; i < imgCarros.length; i++){
    image(imgCarros[i], xCarro[i], yCarro[i], comprimento_carro ,altura_carro);
    };
  //image(imgCarros[0], xCarro[0], yCarro[0], 50 ,40);
  //image(imgCarros[1], xCarro[1], yCarro[1], 50, 40);
  //image(imgCarros[2], xCarro[2], yCarro[2], 50, 40);
}

function movimentaCarro(){
  for (let i = 0; i < xCarro.length; i++ ){
    xCarro[i] -= velocidadeCarro[i];
  }
  //xCarro[0] -= velocidadeCarro[0];
  //xCarro[1] -= velocidadeCarro[1];
  //xCarro[2] -= velocidadeCarro[2];
}

function resetaCarro(){
  for (let i = 0; i < xCarro.length; i++){
   if (passou_a_tela(xCarro[i])){
    xCarro[i] = 600;
   }
  }
  /*  if (xCarro[0] <= -50 ){
    xCarro[0] = 500;
  }
  if (xCarro[1] <= -50){
    xCarro[1] = 500;
  }
  if ( xCarro[2] <= -50){
    xCarro[2] = 500;
  } */
}

function passou_a_tela (xCarro){
 return xCarro <= -50;
}
