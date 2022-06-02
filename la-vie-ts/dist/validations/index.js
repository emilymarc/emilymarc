"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PsicologoValidation = void 0;
const create_1 = require("./psicologos/create");
const getOne_1 = require("./psicologos/getOne");
const destroy_1 = require("./psicologos/destroy");
const update_1 = require("./psicologos/update");
exports.PsicologoValidation = {
    create: create_1.create,
    getOne: getOne_1.getOne,
    destroy: destroy_1.destroy,
    update: update_1.update,
};
