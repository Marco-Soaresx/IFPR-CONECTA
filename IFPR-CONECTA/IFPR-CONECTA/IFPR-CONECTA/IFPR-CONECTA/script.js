

const formularioLogin =
    document.getElementById("loginForm");

if (formularioLogin) {

    formularioLogin.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();
            
            const email =
                document.getElementById("email").value;

            const senha =
                document.getElementById("senha").value;

            try {

                const resposta = await fetch(
                    "http://localhost:3000/login",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json"
                        },

                        body: JSON.stringify({
                            email: email,
                            senha: senha
                        })
                    }
                );

                const resultado =
                    await resposta.json();

                if (resultado.sucesso) {

                    alert("Login realizado com sucesso!");

                    window.location.href =
                        "paginainicial.html";

                } else {

                    alert(resultado.mensagem);

                }

            } catch (erro) {

                console.error(erro);

                alert(
                    "Não foi possível conectar ao servidor."
                );

            }

        }
    );

}



// ==========================================
// VAGAS POR CIDADE
// ==========================================

const listaVagas =
    document.getElementById("listaVagas");


if (listaVagas) {


    // ==========================================
    // PEGA A CIDADE DA URL
    // ==========================================

    const parametros =
        new URLSearchParams(
            window.location.search
        );


    const cidadeSelecionada =
        parametros.get("cidade") ||
        "Paranaguá";


    // ==========================================
    // MOSTRA O NOME DA CIDADE
    // ==========================================

    const cidadeNome =
        document.getElementById("cidadeNome");


    if (cidadeNome) {

        cidadeNome.textContent =
            cidadeSelecionada;

    }



    // ==========================================
    // LISTA DE VAGAS
    // ==========================================

    const vagas = [


        // ======================================
        // ARAPONGAS
        // ======================================

        {
            titulo:
                "🔬 Bolsa de Iniciação Científica",

            empresa:
                "Laboratório de Informática - IFPR",

            cidade:
                "Arapongas",

            tipo:
                "Pesquisa",

            modalidade:
                "Presencial",

            area:
                "Tecnologia",

            salario:
                "R$ 700,00",

            horas:
                "20h",

            inscricoes:
                "18/11"
        },


        {
            titulo:
                "💻 Estágio em Desenvolvimento Web",

            empresa:
                "Tech Solutions Consultoria",

            cidade:
                "Arapongas",

            tipo:
                "Estágio",

            modalidade:
                "Híbrido",

            area:
                "Tecnologia",

            salario:
                "R$ 1.200,00",

            horas:
                "30h",

            inscricoes:
                "30/11"
        },


        {
            titulo:
                "🌱 Projeto de Extensão Robótica Escolar",

            empresa:
                "Núcleo de Tecnologia e Sociedade",

            cidade:
                "Arapongas",

            tipo:
                "Extensão",

            modalidade:
                "Presencial",

            area:
                "Tecnologia",

            salario:
                "R$ 400,00",

            horas:
                "12h",

            inscricoes:
                "10/12"
        },


        {
            titulo:
                "🚀 Assistente de Suporte Técnico",

            empresa:
                "Inova Telecomunicações",

            cidade:
                "Arapongas",

            tipo:
                "Emprego",

            modalidade:
                "Remoto",

            area:
                "Tecnologia",

            salario:
                "R$ 2.100,00",

            horas:
                "40h",

            inscricoes:
                "05/12"
        },



        // ======================================
        // PARANAGUÁ
        // ======================================

        {
            titulo:
                "Estágio em Desenvolvimento Web",

            empresa:
                "Empresa de Tecnologia",

            cidade:
                "Paranaguá",

            tipo:
                "Estágio",

            modalidade:
                "Presencial",

            area:
                "Tecnologia",

            salario:
                "R$ 1.500,00",

            horas:
                "30h",

            inscricoes:
                "20/11"
        },


        {
            titulo:
                "Estágio em Administração",

            empresa:
                "Empresa Comercial",

            cidade:
                "Paranaguá",

            tipo:
                "Estágio",

            modalidade:
                "Presencial",

            area:
                "Administração",

            salario:
                "R$ 1.200,00",

            horas:
                "30h",

            inscricoes:
                "25/11"
        },


        {
            titulo:
                "Projeto de Pesquisa",

            empresa:
                "IFPR",

            cidade:
                "Paranaguá",

            tipo:
                "Pesquisa",

            modalidade:
                "Presencial",

            area:
                "Pesquisa",

            salario:
                "Bolsa R$ 700,00",

            horas:
                "20h",

            inscricoes:
                "28/11"
        },



        // ======================================
        // CURITIBA
        // ======================================

        {
            titulo:
                "Desenvolvedor Front-End",

            empresa:
                "Empresa Digital",

            cidade:
                "Curitiba",

            tipo:
                "Emprego",

            modalidade:
                "Híbrido",

            area:
                "Tecnologia",

            salario:
                "R$ 3.000,00",

            horas:
                "40h",

            inscricoes:
                "25/11"
        },


        {
            titulo:
                "Estágio em Suporte de TI",

            empresa:
                "Empresa de Tecnologia",

            cidade:
                "Curitiba",

            tipo:
                "Estágio",

            modalidade:
                "Remoto",

            area:
                "Tecnologia",

            salario:
                "R$ 1.400,00",

            horas:
                "30h",

            inscricoes:
                "01/12"
        },



        // ======================================
        // CASCAVEL
        // ======================================

        {
            titulo:
                "Assistente de Marketing",

            empresa:
                "Agência Criativa",

            cidade:
                "Cascavel",

            tipo:
                "Emprego",

            modalidade:
                "Presencial",

            area:
                "Marketing",

            salario:
                "R$ 2.000,00",

            horas:
                "40h",

            inscricoes:
                "02/12"
        },



        // ======================================
        // QUEDAS DO IGUAÇU
        // ======================================

        {
            titulo:
                "Estágio em Desenvolvimento",

            empresa:
                "Empresa de Tecnologia",

            cidade:
                "Quedas do Iguaçu",

            tipo:
                "Estágio",

            modalidade:
                "Presencial",

            area:
                "Tecnologia",

            salario:
                "R$ 1.300,00",

            horas:
                "30h",

            inscricoes:
                "05/12"
        },



        // ======================================
        // CORONEL VIVIDA
        // ======================================

        {
            titulo:
                "Projeto de Extensão",

            empresa:
                "IFPR",

            cidade:
                "Coronel Vivida",

            tipo:
                "Extensão",

            modalidade:
                "Presencial",

            area:
                "Educação",

            salario:
                "Bolsa R$ 500,00",

            horas:
                "12h",

            inscricoes:
                "08/12"
        },



        // ======================================
        // GOIOERÊ
        // ======================================

        {
            titulo:
                "Estágio em Tecnologia",

            empresa:
                "Empresa Paraná",

            cidade:
                "Goioerê",

            tipo:
                "Estágio",

            modalidade:
                "Híbrido",

            area:
                "Tecnologia",

            salario:
                "R$ 1.400,00",

            horas:
                "30h",

            inscricoes:
                "10/12"
        },



        // ======================================
        // LONDRINA
        // ======================================

        {
            titulo:
                "Assistente Administrativo",

            empresa:
                "Empresa Paraná",

            cidade:
                "Londrina",

            tipo:
                "Emprego",

            modalidade:
                "Híbrido",

            area:
                "Administração",

            salario:
                "R$ 2.200,00",

            horas:
                "40h",

            inscricoes:
                "12/12"
        }

    ];



    // ==========================================
    // ELEMENTOS DA PÁGINA
    // ==========================================

    const quantidadeVagas =
        document.getElementById(
            "quantidadeVagas"
        );


    const campoBusca =
        document.getElementById(
            "campoBusca"
        );


    const btnBuscar =
        document.getElementById(
            "btnBuscar"
        );


    const limparFiltros =
        document.getElementById(
            "limparFiltros"
        );


    const filtros =
        document.querySelectorAll(
            '.filtro input[type="checkbox"]'
        );



    // ==========================================
    // MOSTRAR VAGAS
    // ==========================================

    function mostrarVagas() {


        // ======================================
        // BUSCA
        // ======================================

        const textoBusca =
            campoBusca
                ? campoBusca.value
                    .toLowerCase()
                    .trim()
                : "";



        // ======================================
        // FILTROS SELECIONADOS
        // ======================================

        const filtrosSelecionados =
            document.querySelectorAll(
                '.filtro input[type="checkbox"]:checked'
            );


        const tiposSelecionados = [];

        const modalidadesSelecionadas = [];



        filtrosSelecionados.forEach(
            function(filtro) {


                const valor =
                    filtro.value;



                // TIPOS

                if (
                    valor === "Estágio" ||
                    valor === "Emprego" ||
                    valor === "Pesquisa" ||
                    valor === "Extensão"
                ) {

                    tiposSelecionados.push(
                        valor
                    );

                }



                // MODALIDADES

                if (
                    valor === "Presencial" ||
                    valor === "Híbrido" ||
                    valor === "Remoto"
                ) {

                    modalidadesSelecionadas.push(
                        valor
                    );

                }

            }
        );



        // ======================================
        // FILTRA AS VAGAS
        // ======================================

        const vagasFiltradas =
            vagas.filter(
                function(vaga) {


                    // CIDADE

                    if (
                        vaga.cidade
                            .toLowerCase() !==
                        cidadeSelecionada
                            .toLowerCase()
                    ) {

                        return false;

                    }



                    // BUSCA

                    if (
                        textoBusca !== ""
                    ) {


                        const textoVaga = (

                            vaga.titulo +
                            " " +
                            vaga.empresa +
                            " " +
                            vaga.area

                        ).toLowerCase();



                        if (
                            !textoVaga.includes(
                                textoBusca
                            )
                        ) {

                            return false;

                        }

                    }



                    // TIPO

                    if (
                        tiposSelecionados.length > 0 &&
                        !tiposSelecionados.includes(
                            vaga.tipo
                        )
                    ) {

                        return false;

                    }



                    // MODALIDADE

                    if (
                        modalidadesSelecionadas.length > 0 &&
                        !modalidadesSelecionadas.includes(
                            vaga.modalidade
                        )
                    ) {

                        return false;

                    }



                    return true;

                }
            );



        // ======================================
        // LIMPA OS CARDS
        // ======================================

        listaVagas.innerHTML = "";



        // ======================================
        // ATUALIZA CONTADOR
        // ======================================

        if (quantidadeVagas) {


            quantidadeVagas.textContent =
                vagasFiltradas.length +
                (
                    vagasFiltradas.length === 1
                        ? " vaga"
                        : " vagas"
                );

        }



        // ======================================
        // NENHUMA VAGA
        // ======================================

        if (
            vagasFiltradas.length === 0
        ) {


            listaVagas.innerHTML = `

                <div class="sem-vagas">

                    <h3>
                        Nenhuma vaga encontrada
                    </h3>

                    <p>
                        Não encontramos oportunidades
                        para ${cidadeSelecionada}.
                    </p>

                </div>

            `;


            return;

        }



        // ======================================
        // CRIA OS CARDS
        // ======================================

        vagasFiltradas.forEach(
            function(vaga) {


                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "vaga-card";



                card.innerHTML = `

                    <small>
                        ${vaga.tipo}
                    </small>


                    <h3>
                        ${vaga.titulo}
                    </h3>


                    <p>
                        <strong>
                            Empresa:
                        </strong>

                        ${vaga.empresa}
                    </p>


                    <p>
                        <strong>
                            Remuneração:
                        </strong>

                        ${vaga.salario}
                    </p>


                    <p>
                        <strong>
                            Carga horária:
                        </strong>

                        ${vaga.horas}
                    </p>


                    <p>
                        <strong>
                            Modalidade:
                        </strong>

                        ${vaga.modalidade}
                    </p>


                    <a
                        href="#"
                        class="ver-detalhes"
                    >
                        Ver detalhes
                    </a>

                `;


                listaVagas.appendChild(
                    card
                );

            }
        );

    }



    // ==========================================
    // BOTÃO BUSCAR
    // ==========================================

    if (btnBuscar) {


        btnBuscar.addEventListener(
            "click",
            function() {

                mostrarVagas();

            }
        );

    }



    // ==========================================
    // ENTER NA BUSCA
    // ==========================================

    if (campoBusca) {


        campoBusca.addEventListener(
            "keydown",
            function(evento) {


                if (
                    evento.key === "Enter"
                ) {

                    mostrarVagas();

                }

            }
        );

    }



    // ==========================================
    // FILTROS
    // ==========================================

    filtros.forEach(
        function(filtro) {


            filtro.addEventListener(
                "change",
                function() {

                    mostrarVagas();

                }
            );

        }
    );



    // ==========================================
    // LIMPAR FILTROS
    // ==========================================

    if (limparFiltros) {


        limparFiltros.addEventListener(
            "click",
            function() {


                filtros.forEach(
                    function(filtro) {

                        filtro.checked =
                            false;

                    }
                );


                if (campoBusca) {

                    campoBusca.value = "";

                }


                mostrarVagas();

            }
        );

    }



    // ==========================================
    // CARREGA AS VAGAS
    // ==========================================

    mostrarVagas();

}

const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {

    cadastroForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const nomeCompleto = document.getElementById("nome").value;
        const email = document.getElementById("emailCadastro").value;
        const tipoUsuario = document.getElementById("tipoUsuario").value;
        const senha = document.getElementById("senhaCadastro").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        // Verificar se as senhas são iguais
        if (senha !== confirmarSenha) {
            alert("As senhas não são iguais!");
            return;
        }

        try {

            const resposta = await fetch("http://localhost:3000/usuarios", {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    nomeCompleto: nomeCompleto,
                    email: email,
                    tipoUsuario: tipoUsuario,
                    senha: senha
                })
            });

            const resultado = await resposta.json();

            if (resultado.sucesso) {

                alert("Conta criada com sucesso!");

                cadastroForm.reset();

                window.location.href = "entrar.html";

            } else {

                alert(resultado.mensagem);

            }

        } catch (erro) {

            console.error(erro);

            alert("Não foi possível conectar ao servidor.");

        }

    });

}
// =========================
// PERFIL DO USUÁRIO
// =========================

document.addEventListener("DOMContentLoaded", function () {

    const botaoPerfil = document.getElementById("botaoPerfil");
    const menuPerfil = document.getElementById("menuPerfil");

    const botaoSair = document.getElementById("botaoSair");
    const linkPerfil = document.getElementById("linkPerfil");

    const nomeUsuario = document.getElementById("nomeUsuario");
    const emailUsuario = document.getElementById("emailUsuario");

    const fotoPerfil = document.getElementById("fotoPerfil");
    const fotoMenu = document.getElementById("fotoMenu");


    // Verifica se existe usuário logado
    const dadosUsuario = localStorage.getItem("usuario");


    if (dadosUsuario) {

    const usuario = JSON.parse(dadosUsuario);

    // Mostra os dados do usuário
    nomeUsuario.textContent = usuario.nome || "Usuário";
    emailUsuario.textContent = usuario.email || "";

    // Mostra a foto se existir
    if (usuario.foto) {
        fotoPerfil.src = usuario.foto;
        fotoMenu.src = usuario.foto;
    }

} 
    // =========================
    // ABRIR O MENU
    // =========================
    botaoPerfil.addEventListener("click", function (event) {

        event.stopPropagation();

        if (menuPerfil.style.display === "block") {

            menuPerfil.style.display = "none";

        } else {

            menuPerfil.style.display = "block";

        }

    });
    // =========================
    // FECHAR AO CLICAR FORA
    // =========================

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".perfil-menu")) {

            menuPerfil.style.display = "none";

        }

    });
    // =========================
    // SAIR
    // =========================
    botaoSair.addEventListener("click", function (event) {

        if (localStorage.getItem("usuario")) {

            event.preventDefault();

            // Apaga o usuário logado
            localStorage.removeItem("usuario");

            // Vai para o login
            window.location.href = "entrar.html";

        }

    });

});