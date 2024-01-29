const botao = document.querySelector(".btn-plataforma")

const elementoPlataforma = document.querySelector(".btn-plataforma .plataformas")
console.log(botao)


botao.addEventListener("click", function(){
    elementoPlataforma.classList.toggle("ativo")
})


