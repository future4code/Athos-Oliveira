import { Request, Response } from "express";
import { CustomError } from "../common/custom-error";

export default (userBusiness: any) => async (req: Request, res: Response) => {

    const { name, email, password } = req.body;

    if(!name || !email || !password) throw new CustomError(422, 'Parâmetros não informados');

    const token = await userBusiness.signup(name, email, password);

    res.status(200).send(token);
}