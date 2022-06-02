"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViaCep = void 0;
const axios_1 = __importDefault(require("axios"));
class ViaCep {
    constructor() {
        this.endpoint = 'https://viacep.com.br/';
        this.api = axios_1.default.create({
            baseURL: this.endpoint
        });
    }
    async getAddress(bodyValue) {
        // this.api.get('ws/' + bodyValue + 'json/')
        let response = await this.api.get(`ws/${bodyValue}/json/`);
        return response;
    }
}
exports.ViaCep = ViaCep;
