let custoPrato;
let custoBebida;
let custoSobremesa;
let custoTotal;

function toggleBotao(element) {
  console.log(element);
  let selecionarComida = document.querySelector(".comida .selecionado");

  let selecionarBebida = document.querySelector(".bebida .selecionado");

  let selecionarSobremesa = document.querySelector(".sobremesa .selecionado");

  let botao = document.querySelector(".aceso");

  if (
    selecionarComida !== null &&
    selecionarBebida !== null &&
    selecionarSobremesa !== null
  ) {
    botao.classList.remove("escondido");
  }
}

//funçao que seleciona uma comida e adiciona a classe selecionado quando clica
//e desmarca os já clicados

function toggleComida(element) {
  console.log(element);
  const selecionar = document.querySelector(".selecionado");
  if (selecionar !== null) {
    selecionar.classList.remove("selecionado");
  }
  element.classList.add("selecionado");

  //parte que checa se o botao de fechar pedido deve aparecer
  toggleBotao();

  //checar valor da comida

  const comidaEscolhida = document
    .querySelector(".comida .selecionado")
    .querySelector("h4").innerHTML;

  if (comidaEscolhida === "Frango Yin Yang") {
    custoPrato = 14.9;
  } else if (comidaEscolhida === "Macarronada") {
    custoPrato = 16.9;
  } else if (comidaEscolhida === "Strogonoff") {
    custoPrato = 15.9;
  } else if (comidaEscolhida === "Lasanha") {
    custoPrato = 13.9;
  } else if (comidaEscolhida === "Quiche") {
    custoPrato = 15.0;
  } else if (comidaEscolhida === "Sem comida!") {
    custoPrato = 0.0;
  }
  custoTotal = custoPrato + custoBebida + custoSobremesa;
}

//selecionar bebida e desmarcar ja clicados
function toggleBebida(element) {
  console.log(element);
  const selecionar = document.querySelector(".bebida .selecionado");
  if (selecionar !== null) {
    selecionar.classList.remove("selecionado");
  }
  element.classList.add("selecionado");

  //checar se o botao de fechar pedido deve aparecer
  toggleBotao();

  //checar valor da bebida

  const bebidaEscolhida = document
    .querySelector(".bebida .selecionado")
    .querySelector("h4").innerHTML;

  if (bebidaEscolhida === "Coca") {
    custoBebida = 4.9;
  } else if (bebidaEscolhida === "Fanta laranja") {
    custoBebida = 4.5;
  } else if (bebidaEscolhida === "Guarana") {
    custoBebida = 3.9;
  } else if (bebidaEscolhida === "Suco") {
    custoBebida = 3.5;
  } else if (bebidaEscolhida === "Matte Leão") {
    custoBebida = 4.5;
  } else if (bebidaEscolhida === "Sem bebida!") {
    custoBebida = 0.0;
  }
  custoTotal = custoPrato + custoBebida + custoSobremesa;
}

//selecionar sobremesa e desmarcar ja clicados
function toggleSobremesa(element) {
  console.log(element);
  const selecionar = document.querySelector(".sobremesa .selecionado");
  if (selecionar !== null) {
    selecionar.classList.remove("selecionado");
  }
  element.classList.add("selecionado");

  //checar se o botao de fechar pedido deve aparecer

  toggleBotao();

  //checar valor da sobremesa

  const sobremesaEscolhida = document
    .querySelector(".sobremesa .selecionado")
    .querySelector("h4").innerHTML;

  if (sobremesaEscolhida === "Pudim") {
    custoSobremesa = 7.9;
  } else if (sobremesaEscolhida === "Petit Gateau") {
    custoSobremesa = 13.9;
  } else if (sobremesaEscolhida === "Torta") {
    custoSobremesa = 9.9;
  } else if (sobremesaEscolhida === "Mousse") {
    custoSobremesa = 6.9;
  } else if (sobremesaEscolhida === "Banana Split") {
    custoSobremesa = 10.9;
  } else if (sobremesaEscolhida === "Sem sobremesa!") {
    custoSobremesa = 0.0;
  }
  custoTotal = custoPrato + custoBebida + custoSobremesa;
}

//Enviar pedido wpp

function enviarPedido(el) {
  let name = prompt("Nos diga seu nome ");
  let address = prompt("Qual o seu endereço?");

  custoTotal = custoPrato + custoBebida + custoSobremesa;
  const comidaEscolhida = document
    .querySelector(".comida .selecionado")
    .querySelector("h4").innerHTML;
  const bebidaEscolhida = document
    .querySelector(".bebida .selecionado")
    .querySelector("h4").innerHTML;
  const sobremesaEscolhida = document
    .querySelector(".sobremesa .selecionado")
    .querySelector("h4").innerHTML;

  let mensagem = `Olá, gostaria de fazer o pedido: \n - Prato: ${comidaEscolhida} \n - Bebida: ${bebidaEscolhida} \n - Sobremesa: ${sobremesaEscolhida} \n Total: R$ ${custoTotal.toFixed(
    2
  )} \n \n Nome: ${name} \n Endereço: ${address}`;

  window.open(
    "https://wa.me/5524992587501?text=" + encodeURIComponent(mensagem)
  );
}

function mostrarFundo() {
  document.querySelector(".fundo").classList.remove("escondido");

  prato();
  bebida();
  sobremesa();
  precoPrato();
  precoBebida();
  precoSobremesa();
  precoTotal();
}

function prato() {
  const comidaEscolhida = document
    .querySelector(".comida .selecionado")
    .querySelector("h4").innerHTML;
  document
    .querySelector(".items-prato")
    .querySelector("p").innerHTML = comidaEscolhida;
}
function bebida() {
  const bebidaEscolhida = document
    .querySelector(".bebida .selecionado")
    .querySelector("h4").innerHTML;
  document
    .querySelector(".items-bebida")
    .querySelector("p").innerHTML = bebidaEscolhida;
}
function sobremesa() {
  const sobremesaEscolhida = document
    .querySelector(".sobremesa .selecionado")
    .querySelector("h4").innerHTML;
  document
    .querySelector(".items-sobremesa")
    .querySelector("p").innerHTML = sobremesaEscolhida;
}
function precoPrato() {
  valorPrato = document.getElementById("precoPrato");
  valorPrato.innerHTML = custoPrato.toFixed(2);
}
function precoBebida() {
  valorBebida = document.getElementById("precoBebida");
  valorBebida.innerHTML = custoBebida.toFixed(2);
}
function precoSobremesa() {
  valorSobremesa = document.getElementById("precoSobremesa");
  valorSobremesa.innerHTML = custoSobremesa.toFixed(2);
}
function precoTotal() {
  valorTotal = document.getElementById("precoTotal");
  valorTotal.innerHTML = custoTotal.toFixed(2);
  custoTotal = custoPrato + custoBebida + custoSobremesa;
}
function cancel() {
  document.querySelector(".fundo").classList.add("escondido");
}
