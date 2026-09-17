

var formulario = document.querySelector("#formMovimentacao");

// salvar nova movimentação 
formulario.addEventListener("submit", function(event) { // a função executa após identificar o evento submit (quando clica no botão "Salvar")

    event.preventDefault(); // impede que após clicar em "Salvar" o navegador recarregue a página como de costume, para permitir que o javascript termine se executar

    var descricao = document.querySelector("#descricao").value;
    var valor = document.querySelector("#valor").value;
    var tipo = document.querySelector("#tipo").value;
    var data = document.querySelector("#data").value;

    var movimentacao = {
        descricao: descricao,
        valor: valor,
        tipo: tipo,
        data: data
    };


    // pega as movimentações que já existem
    var movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || []; // transforma o texto em objeto ou array novamente


    // adiciona a nova movimentação
    movimentacoes.push(movimentacao);


    // salva novamente no localStorage
    localStorage.setItem("movimentacoes", JSON.stringify(movimentacoes)); // transforma objeto ou arrays em texto. ex: {"descricao":"Salário","valor":2500,"tipo":"Receita"}. o localStorage só consegue armazenar em forma de texto


    // limpa o formulário
    formulario.reset();

});