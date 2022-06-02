"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Psicologos = void 0;
const db = require("../database");
const { DataTypes } = require("sequelize");
exports.Psicologos = db.define("Psicologos", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    senha: {
        type: DataTypes.STRING(300),
    },
    apresentacao: {
        type: DataTypes.STRING,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
}, {
    tableName: "psicologos",
});
