var temaSalvo = localStorage.getItem("temaClaro"); // pega o tema que está salvo no navegador (temaClaro == true -> tema claro. temaClaro == false -> tema escuro) 

if(temaSalvo == "false"){
    document.body.classList.add("tema-escuro"); // se o tema salvo no navegador for idetificado como false, vai adicionar uma class em body
}
