const listaDeCursos = require("../models/cursos.json");
const fs = require("fs");


const CursoController = {

    cadastrarCurso(req, res){
        // SEM DESESTRUTURAÇÃO: const titulo = req.body.titulo
        const {titulo, descricao, professor} = req.body;

        //respostas sempre em json
        if(!titulo || !descricao || !professor){
            return res
                .status(400) //bad request
                .json({error: "Você precisa passar os atributos corretamente"});
        }

        // o push carrega o objeto na memoria o fs escreve e salva no arquivo
        listaDeCursos.push({
            titulo,
            descricao,
            professor,
        });

        // stringfy = passando pra json novamente
        //writeFileSync não funciona bem com caminho relativo ("../"), usar 1 ponto só
        fs.writeFileSync("./models/cursos.json", JSON.stringify(listaDeCursos));

        res.status(201).json({message: "Cadastro efetuado com sucesso!"}); //criado
    },

};


module.exports = CursoController;
