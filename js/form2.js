//Segundo Botão 

var adicionar = document.querySelector('#adiciona-empresa')
console.log(adicionar)


adicionar.addEventListener('click',adicionarEmpresa);

function adicionarEmpresa(){
    event.preventDefault()
    console.log('clicou aqui');

    var div = document.querySelector('#titulo')

    var cadastroH = montarTitulo(div)

    var texto = document.querySelector('#titulo')

    texto.appendChild(cadastroH)


}


function montarTitulo(cadastro){

    var cadastroH = document.createElement('h3')

    cadastroH.appendChild(cadastro.razao)
    cadastroH.appendChild(cadastro.cidade)
    cadastroH.appendChild(cadastro.empresa)

    return cadastroH
}