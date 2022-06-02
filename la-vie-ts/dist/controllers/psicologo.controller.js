"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsicologoController = void 0;
const psicologos_1 = require("../models/psicologos");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const viaCep_1 = require("../externals/viaCep");
exports.PsicologoController = {
    async create(req, res) {
        try {
            const { senha, cep } = req.body;
            const bairro = await viaCep_1.viaCepApi.getAddress(cep);
            res.send(bairro);
            const newSenha = bcryptjs_1.default.hashSync(senha, 10);
            const newPsicologo = await psicologos_1.Psicologos.create({
                ...req.body,
                senha: newSenha,
            });
            return res.status(201).json(newPsicologo);
        }
        catch (error) {
            return res.status(500).json("Algo errado aconteceu, chame o batman!");
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params;
            const { senha } = req.body;
            const payloadUpdate = {};
            Object.assign(payloadUpdate, req.body);
            if (senha) {
                const newSenha = bcryptjs_1.default.hashSync(senha, 10);
                Object.assign(payloadUpdate, { senha: newSenha });
            }
            await psicologos_1.Psicologos.update(payloadUpdate, {
                where: { id },
            });
            const psicologo = await psicologos_1.Psicologos.findByPk(id);
            return res.status(200).json(psicologo);
        }
        catch (error) {
            return res.status(500).json("Algo errado aconteceu, chame o batman!");
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            // const hasAtendimentos = await Atendimentos.count({
            //   where: {
            //     psicologo_id: id,
            //   },
            // });
            // if (hasAtendimentos) {
            //   return res
            //     .status(401)
            //     .json(
            //       "Existe atendimentos associados a esse psicologo, não é possivel deletar!"
            //     );
            // }
            await psicologos_1.Psicologos.destroy({
                where: {
                    id,
                },
            });
            return res.sendStatus(204);
        }
        catch (error) {
            return res.status(500).json("Algo errado aconteceu, chame o batman!");
        }
    },
    async getAll(req, res) {
        try {
            const psicologos = await psicologos_1.Psicologos.findAll();
            return res.json(psicologos);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json("Algo errado aconteceu, chame o batman!");
        }
    },
    async getOne(req, res) {
        try {
            const { id } = req.params;
            const psicologo = await psicologos_1.Psicologos.findByPk(id);
            return res.json(psicologo);
        }
        catch (error) {
            return res.status(500).json("Algo errado aconteceu, chame o batman!");
        }
    },
};
