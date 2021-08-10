var produtos = document.querySelector(".produto");

for (var i = 0; i < produtos.length; i++) {
  var produto = produtos[i];

  var tdFinal = produto.querySelector(".info-final");
  var final = tdFinal.textContent;

  var tdQuantidade = produto.querySelector(".info-quantidade");
  var quantidade = tdQuantidade.textContent;

  var tdTotal = produto.querySelector(".info-total");

  var liquidoValido = validaLiquido(liquido)
  var ipiValido = validaIpi(ipi)
  var stValido = validaSt(st)
  var finalValido = validaFinal(final);
  var quantidadeValida = validaQuantidade(quantidade);

if(!liquidoValido && !ipiValido && !stValido){
    liquidoValido = false
    ipiValido = false
    stValido = false
}

  if (!finalValido) {
    console.log("valor inválido");
    finalValido = false;
    tdFinal.textContent = "Preço Inválido";
  }

  if (!quantidadeValida) {
    console.log("quantidade invalida");
    quantidadeValida = false;
    tdQuantidade.textContent = "Quantidade Inválida";
  }

  if (finalValido && quantidadeValida && liquidoValido && ipiValido && stValido) {
    var total = calcularQtd(final, quantidade);
    tdTotal.textContent = total;
  }
}

function validaLiquido(liquido){
    if(liquido >= 0){
        return true
    }else{
        return false
    }
}

function validaIpi(ipi){
    if(ipi >= 0){
        return true
    }else{
        return false
    }
}

function validaSt(st){
    if(st >= 0){
        return true
    }else{
        return false
    }
}


function validaFinal(final) {
  if (final >= 0) {
    return true;
  } else {
    return false;
  }
}

function validaQuantidade(quantidade) {
  if (quantidade >= 0) {
    return true;
  } else {
    return false;
  }
}



function calcularQtd(final, quantidade) {
  var total = 0;

  total = final * quantidade;

  return total.toFixed(2);
}
