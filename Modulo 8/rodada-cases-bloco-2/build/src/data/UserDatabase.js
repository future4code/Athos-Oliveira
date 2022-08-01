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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
const user_1 = require("../model/user");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    createUser(id, email, name, password, role) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id: id,
                    email: email,
                    name: name,
                    password: password,
                    role: role,
                }).into(UserDatabase.Usuarios);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.getConnection()
                .select("*")
                .from(UserDatabase.Usuarios)
                .where({ email });
            return user_1.User.toUserModel(result[0]);
        });
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.Usuarios = 'USUARIOS';
//# sourceMappingURL=UserDatabase.js.map