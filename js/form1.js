//primeiro botão

var adicionar = document.querySelector("#adicionar-produto");

adicionar.addEventListener("click", adicionarProduto);

function adicionarProduto() {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var produto = obterInfoProduto(form);
 

  var erros = validaProduto(produto)

  if (erros.length > 0) {
    exibirMensagemErro(erros)
    return;
  }

  adicionarNaTabela(produto)

  form.reset();
  var mensagemdeErro = document.querySelector('#mensagens-erros')
  mensagemdeErro.innerHTML = '';
}

function adicionarNaTabela(produto){
    var produtoTr = montarTr(produto);
    var tabela = document.querySelector("#tabela-produtos");

    tabela.appendChild(produtoTr);
}

function obterInfoProduto(form) {
  var produto = {
    descricao: form.descricao.value,
    liquido: form.liquido.value,
    ipi: form.ipi.value,
    st: form.st.value,
    final: form.final.value,
    quantidade: form.quantidade.value,
    total: calcularQtd(form.final.value, form.quantidade.value),
  };

  return produto;
}

function montarTr(produto) {
  var produtoTr = document.createElement("tr");
  produtoTr.classList.add("produto");

  produtoTr.appendChild(montaTd(produto.descricao,"info-descricao"));
  produtoTr.appendChild(montaTd(produto.liquido,"info-liquido"));
  produtoTr.appendChild(montaTd(produto.ipi,"info-ipi"));
  produtoTr.appendChild(montaTd(produto.st,"info-st"));
  produtoTr.appendChild(montaTd(produto.final,"info-final"));
  produtoTr.appendChild(montaTd(produto.quantidade,"info-quantidade"));
  produtoTr.appendChild(montaTd(produto.total,"info-total"));

  return produtoTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}


function exibirMensagemErro(erros){
    var ul = document.querySelector('#mensagens-erros')

    ul.innerHTML = ''
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });
    
}

function validaProduto(produto) {
  
    var erros = [];

    if(produto.descricao.length == 0){
        erros.push('Descrição não pode ser em branco')
    }

    if(produto.liquido.length == 0){
        erros.push('Valor líquido está vazio')
    }

    if(produto.ipi.length == 0){
        erros.push('Valor IPI está vazio')
    }

    if(produto.st.length == 0){
        erros.push('Valor ST está vazio')
    }

    if(produto.final.length == 0){
        erros.push('Valor Final está vazio')
    }

    if(produto.quantidade.length == 0){
        erros.push('Quantidade está vazio')
    }
 
    if(!validaLiquido(produto.liquido)){
        erros.push('Valor Líquido é negativo')
    }

    if(!validaIpi(produto.ipi)){
        erros.push('Valor do IPI é negativo')
    }

    if(!validaSt(produto.st)){
        erros.push('Valor do ST é negativo')
    }

    if(!validaFinal(produto.final)){
        erros.push('Valor Final está negativo')
    }

    if(!validaQuantidade(produto.quantidade)){
        erros.push('Valor quantidade é negativa')
    }

    return erros
}
