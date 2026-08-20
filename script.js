// BOTÕES "CRIAR CONTA"
const botoesCriarConta = document.querySelectorAll(
    ".btn-primary, .btn-white"
);

// BOTÃO "ENTRAR"
const botaoEntrar = document.querySelector(".btn-login");

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

const loginForm = document.querySelector("#loginForm");

const senha = document.querySelector("#senha");

const mostrarSenha = document.querySelector("#mostrarSenha");


/* MOSTRAR E ESCONDER SENHA */

mostrarSenha.addEventListener("click", () => {

    if (senha.type === "password") {

        senha.type = "text";

        mostrarSenha.textContent = "🙈";

    } else {

        senha.type = "password";

        mostrarSenha.textContent = "👁";

    }

});


/* LOGIN */

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.querySelector("#email").value;

    alert(
        "Login realizado com sucesso!\n\nBem-vindo ao IFPR Conecta, " +
        email
    );

    // Futuramente você pode redirecionar para:
    // window.location.href = "dashboard.html";

});

const cadastroForm = document.querySelector("#cadastroForm");

const senhaCadastro = document.querySelector("#senhaCadastro");

const confirmarSenha = document.querySelector("#confirmarSenha");

const mostrarSenhaCadastro = document.querySelector(
    "#mostrarSenhaCadastro"
);


/* MOSTRAR E ESCONDER SENHA */

mostrarSenhaCadastro.addEventListener("click", () => {

    if (senhaCadastro.type === "password") {

        senhaCadastro.type = "text";

        mostrarSenhaCadastro.textContent = "🙈";

    } else {

        senhaCadastro.type = "password";

        mostrarSenhaCadastro.textContent = "👁";

    }

});


/* VALIDAÇÃO DO CADASTRO */

cadastroForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome = document.querySelector("#nome").value;

    const email = document.querySelector(
        "#emailCadastro"
    ).value;

    const tipoUsuario = document.querySelector(
        "#tipoUsuario"
    ).value;


    /* VERIFICA SE AS SENHAS SÃO IGUAIS */

    if (senhaCadastro.value !== confirmarSenha.value) {

        alert(
            "As senhas não coincidem. Verifique novamente."
        );

        return;

    }


    /* SIMULA O CADASTRO */

    alert(
        "Conta criada com sucesso!\n\n" +
        "Bem-vindo ao IFPR Conecta, " +
        nome + "!"
    );


    /*
    FUTURAMENTE:

    Aqui você poderá enviar os dados
    para um banco de dados.

    Exemplo:
    nome
    email
    tipoUsuario
    senha
    */


    /* REDIRECIONA PARA LOGIN */

    window.location.href = "login.html";

});