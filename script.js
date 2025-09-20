
// Definição de Variáveis e Tipos
let nome = "João";          // string
let idade = 30;             // number
let ativo = true;           // boolean

console.log("nome:", nome, "| tipo:", typeof nome);
console.log("idade:", idade, "| tipo:", typeof idade);
console.log("ativo:", ativo, "| tipo:", typeof ativo);



// Objeto Básico
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);

// Atributos de Objeto
carro.cor = "Preto"; // adicionando nova propriedade
console.log("Cor:", carro.cor);


// Atualizando Valores de Atributos
carro.ano = 2022; // atualizando valor
console.log("Ano atualizado:", carro.ano);



// Tipos de Dados e Operações
function operacoes(a, b) {
  console.log("Soma:", a + b);
  console.log("Subtração:", a - b);
  console.log("Multiplicação:", a * b);
  console.log("Divisão:", a / b);
}

// chamando a função
operacoes(10, 5);
