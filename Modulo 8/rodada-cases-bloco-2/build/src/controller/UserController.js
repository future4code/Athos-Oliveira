"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserBusiness_1 = require("../business/UserBusiness");
const BaseDatabase_1 = require("../data/BaseDatabase");
const customError_1 = require("../error/customError");
class UserController {
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.email.includes("@")) {
                    throw new customError_1.InvalidEmail();
                }
                if (!req.body.email || req.body.email.indexOf("@") === -1) {
                    throw new customError_1.InvalidEmail();
                }
                if (!req.body.password || req.body.password.length < 6) {
                    throw new customError_1.InvalidPassword();
                }
                const input = {
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password,
                    role: req.body.role
                };
                const userBusiness = new UserBusiness_1.UserBusiness();
                const token = yield userBusiness.createUser(input);
                res.status(200).send({ token: token });
                res.status(200).send({ message: "Usuario Cadastrado com Sucesso!" });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.body.email.includes("@")) {
                    throw new customError_1.InvalidEmail();
                }
                if (!req.body.email || req.body.email.indexOf("@") === -1) {
                    throw new customError_1.InvalidEmail();
                }
                if (!req.body.password || req.body.password.length < 6) {
                    throw new customError_1.InvalidPassword();
                }
                const loginData = {
                    email: req.body.email,
                    password: req.body.password
                };
                const userBusiness = new UserBusiness_1.UserBusiness();
                const token = yield userBusiness.getUserByEmail(loginData);
                res.status(200).send({ token });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield BaseDatabase_1.BaseDatabase.destroyConnection();
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map