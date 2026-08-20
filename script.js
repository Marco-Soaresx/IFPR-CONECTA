// BOTÕES "CRIAR CONTA"
const botoesCriarConta = document.querySelectorAll(
    ".btn-primary, .btn-white"
);

botoesCriarConta.forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Página de criação de conta será disponibilizada em breve!");
    });
});


// BOTÃO "ENTRAR"
const botaoEntrar = document.querySelector(".btn-login");

botaoEntrar.addEventListener("click", () => {
    alert("Página de login será disponibilizada em breve!");
});


// BOTÃO "PUBLICAR OPORTUNIDADE"
const botaoPublicar = document.querySelector(".btn-secondary");

botaoPublicar.addEventListener("click", () => {
    alert("Área para empresas publicarem oportunidades!");
});


// BOTÃO "SOU ALUNO, QUERO ENCONTRAR"
const botaoAluno = document.querySelector(
    ".hero-buttons .btn-primary"
);

botaoAluno.addEventListener("click", () => {

    document.querySelector(".features").scrollIntoView({
        behavior: "smooth"
    });

});


// MENU COM ROLAGEM SUAVE
const linksMenu = document.querySelectorAll("nav a");

linksMenu.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if (destino) {

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// FAQ - FECHA AS OUTRAS PERGUNTAS
const perguntas = document.querySelectorAll(".faq details");

perguntas.forEach(pergunta => {

    pergunta.addEventListener("toggle", function() {

        if (this.open) {

            perguntas.forEach(outraPergunta => {

                if (
                    outraPergunta !== this
                ) {
                    outraPergunta.open = false;
                }

            });

        }

    });

});