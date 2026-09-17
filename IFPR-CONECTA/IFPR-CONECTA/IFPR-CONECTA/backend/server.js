const express = require ("express");
const mariadb = require ("mariadb");
const cors = require ("cors");

const app = express ();

app.use (cors());
app.use(express.json());

const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "ifpr_conecta",
    connectionLimit: 5
});

app.get("/", (req, res) => {
    res.send("API do IFPR conecta funcionando!");
});

app.get("/usuarios", async(req, res) => {

    try{
        const conn = await pool.getConnection();

        const usuarios = await conn.query("SELECT * FROM usuarios");

        conn.release();

        res.json(usuarios);
    } catch (erro){
        console.erro(error);
        res.status(500).json({ erro: "Erro ao buscar usuários"});
    }
});

app.post("/usuarios", async (req, res) => {
    try {
        const {
            nomeCompleto,
            email,
            tipoUsuario,
            senha
        } = req.body;

        // Separar nome e sobrenome
        const partesNome = nomeCompleto.trim().split(" ");

        const nome = partesNome.shift();
        const sobrenome = partesNome.join(" ");

        // Gerar nome de usuário
        const nome_usuario = email.split("@")[0];

        const conn = await pool.getConnection();

        await conn.query(
            `INSERT INTO usuarios 
            (nome, sobrenome, email, senha, nome_usuario, tipo_usuario)
            VALUES (?, ?, ?, ?, ?, ?)`,
            [
                nome,
                sobrenome,
                email,
                senha,
                nome_usuario,
                tipoUsuario
            ]
        );

        conn.release();

        res.json({
            sucesso: true,
            mensagem: "Conta criada com sucesso!"
        });

    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao criar conta"
        });
    }
});

app.post("/login", async (req, res) => {

    try {

        const { email, senha } = req.body;

        const conn = await pool.getConnection();

        const usuarios = await conn.query(
            "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
            [email, senha]
        );

        conn.release();

        if (usuarios.length > 0) {

            res.json({
                sucesso: true,
                mensagem: "Login realizado com sucesso!"
            });

        } else {

            res.json({
                sucesso: false,
                mensagem: "E-mail ou senha incorretos."
            });

        }

    } catch (erro) {

        console.error(erro);

        res.status(500).json({
            sucesso: false,
            mensagem: "Erro ao realizar login."
        });

    }

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});

