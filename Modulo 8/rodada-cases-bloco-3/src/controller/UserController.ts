import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/user";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { InvalidEmail,InvalidPassword } from "../error/customError";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            if (!req.body.email.includes("@")) {
                throw new InvalidEmail();
              }
          
               if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new InvalidEmail();
              }
          
              if (!req.body.password || req.body.password.length < 6) {
                throw new InvalidPassword();
              }
            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role:req.body.role
            }
            
            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);
           
            res.status(200).send({token:token });
            res.status(200).send({ message: "Usuario Cadastrado com Sucesso!" });
        
        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {

        try {
            if (!req.body.email.includes("@")) {
                throw new InvalidEmail();
              }
          
               if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new InvalidEmail();
              }
          
              if (!req.body.password || req.body.password.length < 6) {
                throw new InvalidPassword();
              }
            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}