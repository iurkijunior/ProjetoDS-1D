 const botoesm = document.querySelectorAll("button")
 console.log(botoes)

 botoes.array.forEach(function (botao){
    let curtiu = false;
    botao.addEventlistener("click", botaoClicado)

    function botaoClicado (){
        console.log("botao clicado")
        let texto = botao.querySelector("span")
        if (curtiu == false){
            texto.textContent++
        }
    }
 })