var temaSalvo = localStorage.getItem("temaClaro");

if(temaSalvo == "false"){
    document.body.classList.add("tema-escuro");
}
