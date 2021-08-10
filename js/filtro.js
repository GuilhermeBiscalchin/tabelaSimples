var produtoFiltro = document.querySelector("#filtro-tabela");
console.log(produtoFiltro);

produtoFiltro.addEventListener("input", function () {
  var produtos = document.querySelectorAll(".produto");

  if (this.value.length > 0) {
    // console.log('foi digitado algo')

    for (var i = 0; i < produtos.length; i++) {
      var produto = produtos[i];
      var tdDescricao = produto.querySelector(".info-descricao");
      var descricao = tdDescricao.textContent;
      console.log(descricao)

      var expressao = new RegExp(this.value,'i');

      if (!expressao.test(descricao)) {
        produto.classList.add("invisivel");
      } else {
        produto.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < produtos.length; i++) {
      var produto = produtos[i];

      produto.classList.remove("invisivel");
    }
  }
});
