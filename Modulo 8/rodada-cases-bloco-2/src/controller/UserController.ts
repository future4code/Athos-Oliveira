import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { InvalidEmail } from "../error/customError";

export class UserController {
    async signup(req: Request, res: Response) {
        try {
            if (!req.body.email.includes("@")) {
                throw new InvalidEmail();
              }
          
               if (!req.body.email || req.body.email.indexOf("@") === -1) {
                throw new Error("Invalid email");
              }
          
              if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
              }
            const input: UserInputDTO = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password,
                role: req.body.role
            }

            const userBusiness = new UserBusiness();
            const token = await userBusiness.createUser(input);

            res.status(200).send({ token });
        } catch (error:any) {
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
                throw new Error("Invalid email");
              }
          
              if (!req.body.password || req.body.password.length < 6) {
                throw new Error("Invalid password");
              }
            const loginData: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            };

            const userBusiness = new UserBusiness();
            const token = await userBusiness.getUserByEmail(loginData);

            res.status(200).send({ token });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}