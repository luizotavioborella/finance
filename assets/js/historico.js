var tabela = document.querySelector("#tabelaHistorico");

var movimentacoes = JSON.parse(localStorage.getItem("movimentacoes")) || [];
// JSon = javascript object notation
// if ternário (se não tiver nada salvo em localStorage, é devolvido uma lista vazia)

movimentacoes.forEach(function(movimentacao,indice){ // perccorre o objeto que contém as movimentações
    var novaLinha = document.createElement("tr"); // cria uma nova linha, e dentro dela adiciona novas colunas

    novaLinha.innerHTML = `
        <td>${movimentacao.descricao}</td>
        <td>R$ ${movimentacao.valor}</td>
        <td>${movimentacao.tipo}</td>
        <td>${movimentacao.data}</td>
        <td>
            <button onclick="mostrarConfirmacao(${indice})">
                <img src="assets/img/deletar.png" alt="Excluir">
            </button>
        </td>
    `; // `${}` serve para adicionar no meio do texto alguma variável, mesmo que fazer "Olá, " + nome

    tabela.appendChild(novaLinha); // adiciona a nova linha criada na tabela capturada no início
});

var indiceParaExcluir; // para excluir um registro único precisamos identificar qual vai ser excluído
function mostrarConfirmacao(indice){
    indiceParaExcluir = indice; // identifica o indice
    document.querySelector("#confirmacaoExcluir").classList.add("ativo"); // adiciona class para ativar o quadro de confirmação de exclusão
}

function cancelarExclusao(){
    document.querySelector("#confirmacaoExcluir").classList.remove("ativo"); // remove o class que ativa a confirmação de exclusão
}

function confirmarExclusao(){ // se for confirmada a exclusão essa função é chamada
    movimentacoes.splice(indiceParaExcluir,1); // remover o indice, somente uma vez

    localStorage.setItem("movimentacoes",JSON.stringify(movimentacoes)); // transforma os registros que antes estavam em objeto para texto novamente

    location.reload(); // atualizar a tela 
}

function mostrarConfirmacaoTudo(){
    document.querySelector("#confirmacaoExcluirTudo").classList.add("ativo");
}

function cancelarExclusaoTudo(){
    document.querySelector("#confirmacaoExcluirTudo").classList.remove("ativo");
}

function confirmarExclusaoTudo(){
    localStorage.removeItem("movimentacoes"); // remove todas as movimentação salvas
    location.reload();
}
