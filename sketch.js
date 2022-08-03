function setup() {
  createCanvas(500, 400);
  trilha_sonora.loop();
  }

function draw() {
  background(imagemDaEstrada);
  mostra_ator();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  resetaCarro();
  verifica_colisao();
  marcador_placar();
  marca_ponto();
}

