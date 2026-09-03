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
        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({behavior: "smooth"});

        }
    });
});
const swiperImagens = new Swiper('.carrosselImagens', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    allowTouchMove: true, 
    autoplay: {delay: 0, disableOnInteraction: false,},
    speed: 3000, 
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
/* ==============================
   DADOS DOS FILTROS
============================== */

const CAMPI = [

    "IFPR Curitiba",
    "IFPR Paranaguá",
    "IFPR Cascavel",
    "IFPR Campo Largo",
    "IFPR Foz do Iguaçu",
    "IFPR Londrina"

];


const AREAS = [

    "Informática / TI",
    "Meio Ambiente",
    "Mecânica",
    "Produção Cultural",
    "Administração",
    "Agroecologia"

];


const TIPOS = [

    "Estágio",
    "CLT",
    "Bolsa",
    "Extensão"

];


const MODALIDADES = [

    "Presencial",
    "Híbrido",
    "Remoto"

];


/* ==============================
   VAGAS
============================== */

const VAGAS = [

    {
        id: "1",
        titulo: "Estágio em Suporte de TI",
        parceiro: "Empresa Parceira Paranaguá",
        campus: "IFPR Paranaguá",
        tipo: "Estágio",
        area: "Informática / TI",
        modalidade: "Híbrido",
        bolsa: 1000,
        cargaHoraria: 30,
        publicadaEm: "há 2 dias",
        destaque: true
    },

    {
        id: "2",
        titulo: "Bolsa de Iniciação Científica",
        parceiro: "Laboratório de Informática — IFPR",
        campus: "IFPR Paranaguá",
        tipo: "Bolsa",
        area: "Informática / TI",
        modalidade: "Presencial",
        bolsa: 700,
        cargaHoraria: 20,
        publicadaEm: "há 4 dias",
        destaque: true
    },

    {
        id: "3",
        titulo: "Analista de Dados Júnior",
        parceiro: "Tecnova Curitiba",
        campus: "IFPR Curitiba",
        tipo: "CLT",
        area: "Informática / TI",
        modalidade: "Remoto",
        bolsa: 3200,
        cargaHoraria: 40,
        publicadaEm: "há 1 dia"
    },

    {
        id: "4",
        titulo: "Estágio em Educação Ambiental",
        parceiro: "Secretaria de Meio Ambiente",
        campus: "IFPR Cascavel",
        tipo: "Estágio",
        area: "Meio Ambiente",
        modalidade: "Presencial",
        bolsa: 900,
        cargaHoraria: 25,
        publicadaEm: "há 6 dias"
    },

    {
        id: "5",
        titulo: "Projeto de Extensão em Cultura Digital",
        parceiro: "Coordenação de Extensão IFPR",
        campus: "IFPR Campo Largo",
        tipo: "Extensão",
        area: "Produção Cultural",
        modalidade: "Híbrido",
        bolsa: 500,
        cargaHoraria: 12,
        publicadaEm: "há 9 dias"
    },

    {
        id: "6",
        titulo: "Assistente de Manutenção Mecânica",
        parceiro: "Metalúrgica Iguaçu",
        campus: "IFPR Foz do Iguaçu",
        tipo: "CLT",
        area: "Mecânica",
        modalidade: "Presencial",
        bolsa: 2450,
        cargaHoraria: 40,
        publicadaEm: "há 3 dias"
    },

    {
        id: "7",
        titulo: "Estágio Administrativo",
        parceiro: "Prefeitura de Londrina",
        campus: "IFPR Londrina",
        tipo: "Estágio",
        area: "Administração",
        modalidade: "Presencial",
        bolsa: 1100,
        cargaHoraria: 30,
        publicadaEm: "há 5 dias"
    },

    {
        id: "8",
        titulo: "Bolsa de Pesquisa em Agroecologia",
        parceiro: "Núcleo de Pesquisa IFPR",
        campus: "IFPR Cascavel",
        tipo: "Bolsa",
        area: "Agroecologia",
        modalidade: "Presencial",
        bolsa: 800,
        cargaHoraria: 20,
        publicadaEm: "há 8 dias"
    },

    {
        id: "9",
        titulo: "Desenvolvedor Front-end (Trainee)",
        parceiro: "Studio Curitiba Digital",
        campus: "IFPR Curitiba",
        tipo: "CLT",
        area: "Informática / TI",
        modalidade: "Remoto",
        bolsa: 2900,
        cargaHoraria: 40,
        publicadaEm: "hoje"
    }

];


/* ==============================
   FILTROS SELECIONADOS
============================== */

const filtros = {

    tipos: new Set(),

    areas: new Set(),

    modalidades: new Set(),

    campi: new Set()

};


/* ==============================
   FORMATAÇÃO DO VALOR
============================== */

const formatBRL = (valor) => {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL",
            maximumFractionDigits: 0
        }
    );

};


/* ==============================
   ÍCONES
============================== */

const icons = {

    mapPin: `
        <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
        >

            <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 1 1 16 0"
            />

            <circle
                cx="12"
                cy="10"
                r="3"
            />

        </svg>
    `,

    wallet: `
        <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
        >

            <path
                d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-5a2 2 0 0 0 0 4h5v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5"
            />

            <path d="M2 10h20" />

            <path d="M8 10v4" />

        </svg>
    `,

    clock: `
        <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
        >

            <circle
                cx="12"
                cy="12"
                r="10"
            />

            <polyline points="12 6 12 12 16 14" />

        </svg>
    `,

    sparkles: `
        <svg
            class="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
        >

            <path
                d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"
            />

        </svg>
    `

};


/* ==============================
   CRIAR FILTROS
============================== */

function renderFilters() {

    const groups = [

        {
            key: "tipos",
            label: "Tipo de vaga",
            options: TIPOS
        },

        {
            key: "areas",
            label: "Área de estudo",
            options: AREAS
        },

        {
            key: "modalidades",
            label: "Modalidade",
            options: MODALIDADES
        },

        {
            key: "campi",
            label: "Campus",
            options: CAMPI
        }

    ];


    const container =
        document.getElementById("filterGroups");


    container.innerHTML = groups
        .map((group, index) => `

            <div
                class="filter-group"
                ${
                    index === 0
                        ? ""
                        : 'style="border-top:1px solid var(--border);padding-top:1.5rem;"'
                }
            >

                <p class="filter-title">
                    ${group.label}
                </p>


                <div class="filter-options">

                    ${group.options
                        .map(option => `

                            <label class="filter-option">

                                <input
                                    type="checkbox"
                                    value="${option}"
                                    data-group="${group.key}"
                                    ${
                                        filtros[group.key].has(option)
                                            ? "checked"
                                            : ""
                                    }
                                >

                                ${option}

                            </label>

                        `)
                        .join("")
                    }

                </div>

            </div>

        `)
        .join("");


    document
        .querySelectorAll(".filter-option input")
        .forEach(checkbox => {

            checkbox.addEventListener(
                "change",
                () => {

                    const group =
                        checkbox.dataset.group;

                    const value =
                        checkbox.value;


                    if (checkbox.checked) {

                        filtros[group].add(value);

                    } else {

                        filtros[group].delete(value);

                    }


                    update();

                }
            );

        });

}


/* ==============================
   MOSTRAR VAGAS
============================== */

function renderVagas() {

    const query =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();


    const resultados =
        VAGAS.filter(vaga => {


            if (
                query &&
                !`${vaga.titulo} ${vaga.parceiro} ${vaga.area}`
                    .toLowerCase()
                    .includes(query)
            ) {

                return false;

            }


            if (
                filtros.tipos.size &&
                !filtros.tipos.has(vaga.tipo)
            ) {

                return false;

            }


            if (
                filtros.areas.size &&
                !filtros.areas.has(vaga.area)
            ) {

                return false;

            }


            if (
                filtros.modalidades.size &&
                !filtros.modalidades.has(vaga.modalidade)
            ) {

                return false;

            }


            if (
                filtros.campi.size &&
                !filtros.campi.has(vaga.campus)
            ) {

                return false;

            }


            return true;

        });


    const list =
        document.getElementById("vagasList");


    const title =
        document.getElementById("resultsTitle");


    title.textContent =
        `${resultados.length} vaga${
            resultados.length === 1
                ? ""
                : "s"
        } encontrada${
            resultados.length === 1
                ? ""
                : "s"
        }`;


    if (resultados.length === 0) {

        list.innerHTML = `

            <div class="empty-state">

                <p>
                    Nenhuma vaga com esses filtros.
                </p>

                <span>
                    Tente remover algum filtro
                    ou buscar por outro termo.
                </span>

            </div>

        `;

        return;

    }


    list.innerHTML =
        resultados
            .map(vaga => `

                <article class="vaga-card">

                    <div class="vaga-top">

                        <div>

                            <div class="vaga-badges">

                                <span class="badge badge-secondary">
                                    ${vaga.tipo}
                                </span>


                                ${
                                    vaga.destaque
                                        ? `
                                            <span class="badge badge-primary">
                                                ${icons.sparkles}
                                                Destaque
                                            </span>
                                        `
                                        : ""
                                }

                            </div>


                            <h3 class="vaga-title">
                                ${vaga.titulo}
                            </h3>


                            <p class="vaga-parceiro">
                                ${vaga.parceiro}
                            </p>

                        </div>


                        <div class="vaga-salary">

                            <p class="value">
                                ${formatBRL(vaga.bolsa)}
                            </p>

                            <p class="label">
                                por mês
                            </p>

                        </div>

                    </div>


                    <div class="vaga-divider"></div>


                    <div class="vaga-meta">

                        <span>
                            ${icons.mapPin}
                            ${vaga.campus}
                        </span>


                        <span>
                            ${icons.wallet}
                            ${vaga.modalidade}
                        </span>


                        <span>
                            ${icons.clock}
                            ${vaga.cargaHoraria}h semanais
                        </span>


                        <span class="vaga-date">
                            Publicada ${vaga.publicadaEm}
                        </span>

                    </div>


                    <div class="vaga-actions">

                        <button class="btn btn-primary">
                            Ver detalhes
                        </button>

                        <button class="btn btn-ghost">
                            Salvar
                        </button>

                    </div>

                </article>

            `)
            .join("");

}


/* ==============================
   ATUALIZAR
============================== */

function update() {

    const ativos =
        filtros.tipos.size +
        filtros.areas.size +
        filtros.modalidades.size +
        filtros.campi.size;


    document
        .getElementById("activeCount")
        .textContent =
            ativos
                ? `${ativos} filtro(s) ativo(s)`
                : "";


    document
        .getElementById("clearFilters")
        .style.display =
            ativos
                ? "inline-flex"
                : "none";


    renderVagas();

}


/* ==============================
   PESQUISA
============================== */

document
    .getElementById("searchInput")
    .addEventListener(
        "input",
        update
    );


/* ==============================
   LIMPAR FILTROS
============================== */

document
    .getElementById("clearFilters")
    .addEventListener(
        "click",
        () => {

            Object
                .values(filtros)
                .forEach(set => set.clear());


            renderFilters();

            update();

        }
    );


/* ==============================
   ABRIR FILTROS NO CELULAR
============================== */

document
    .getElementById("filterToggle")
    .addEventListener(
        "click",
        () => {

            document
                .getElementById("sidebar")
                .classList
                .toggle("open");

        }
    );


/* ==============================
   INICIAR SISTEMA
============================== */
renderFilters();
update();

/* verificar email*/
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    window.location.href = "paginainicial.html";
});