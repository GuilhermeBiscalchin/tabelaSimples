var tabela = document.querySelector('table')

tabela.addEventListener('dblclick',function(event){

    event.target.parentNode.classList.add('efeito')

    setTimeout(function(){
        
    event.target.parentNode.remove()
    },500)


})


