function selecionarTema(temaClaro) {

    var temas = document.querySelectorAll(".tema");

    if (temaClaro == true) {

        temas[0].classList.add("selecionado");
        temas[1].classList.remove("selecionado");

        document.body.classList.remove("tema-escuro");

        localStorage.setItem("temaClaro", "true");

    } else {

        temas[0].classList.remove("selecionado");
        temas[1].classList.add("selecionado");

        document.body.classList.add("tema-escuro");

        localStorage.setItem("temaClaro", "false");

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
