function selecionarTema(temaClaro) { // recebe temaClaro que pode ser true ou false

    var temas = document.querySelectorAll(".tema"); // seleciona todos os elementos que correspondem a .tema

    if (temaClaro == true) { // se temaClaro for true (tema claro selecionado)

        temas[0].classList.add("selecionado"); // adiciona class "selecionado" em tema claro
        temas[1].classList.remove("selecionado"); // remove class "selecionado" em tema escuro

        document.body.classList.remove("tema-escuro"); // remove a class "tema-escuro" de body

        localStorage.setItem("temaClaro", "true"); // salva em localStorage que o tema é claro (pra não mudar quando atualizar a página)

    } else { // mesma coisa só que ao contrário, para o tema escuro

        temas[0].classList.remove("selecionado");
        temas[1].classList.add("selecionado");

        document.body.classList.add("tema-escuro");

        localStorage.setItem("temaClaro", "false");// salva em localStorage que o tema é escuro (pra não mudar quando atualizar a página)

    }

}

var temaSalvo = localStorage.getItem("temaClaro");

var temas = document.querySelectorAll(".tema");

if (temaSalvo == "false") {

    temas[0].classList.remove("selecionado");
    temas[1].classList.add("selecionado");

} else {

    temas[0].classList.add("selecionado");
    temas[1].classList.remove("selecionado");

}
