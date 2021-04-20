

document.querySelector('.menu__abrir').onclick = function(){
    document.documentElement.classList.add('menu-ativo')
    
}

document.querySelector('.menu__fechar').onclick = function(){
    document.documentElement.classList.remove('menu-ativo')
}

document.documentElement.onclick = function(event){
    if(event.target === document.documentElement){
        document.documentElement.classList.remove('menu-ativo')
    }
}
