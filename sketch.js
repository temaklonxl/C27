//Declaramos variáveis constantes para armazenar os módulos da física (motor, mundo, corpos, corpo)
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Declaramos duas variáveis tipo bloco
let engine;
let world;

//Declaramos variáveis para a torre
var tower, towerImage;

//Fução que carrega os ativos
function preload() {
  //Carregando a imagem de bacground
  backgroundImg = loadImage("./assets/background.gif");
  //Carregando a imagem de torre
  towerImage = loadImage("./assets/tower.png");
}

//Fução que carrega os paramêtros
function setup() {
  //Definis o tamanho da tela
  canvas = createCanvas(1200, 600);

  //Criamos o motor
  engine = Engine.create();

  //Adicionamos o motor ao mundo
  world = engine.world;

  //Os retângulos desenhados terão suas coordenadas x e y a partir do centro. Na cnguração padrã temos ocanto superior esquerdo como referência
  rectMode(CENTER);

  //As circuferências desenhadas terão suas coordenadas x e y a partir do centro
  ellipseMode(RADIUS);

  //Use a palavra-chave new para criar um objeto torre. (Desafio 4)
  tower = newTower(150, 350, 160, 310);
}

//Fução que carrega continuamente as regras do projeto
function draw() {
  //Definmos a cor de fundo da ela
  background(189);

  //Imprimimos o fundo na tela
  image(backgroundImg, 0, 0, width, height);

  //Caregamd o motor
  Engine.update(engine);

  //exibir a torre (Desafio 4)
  tower.display();
}
