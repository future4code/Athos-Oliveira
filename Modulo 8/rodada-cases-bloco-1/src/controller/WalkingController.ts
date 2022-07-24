import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/WalkingBusiness";
import {walkingInputDTO} from "../model/walking"


export class WalkingController {

  public createWalking = async (
      req: Request,
      res: Response
   ) => {
      try {

         if ( req.body.pets.length < 0) {
            throw new Error("A quantidade deve ser maior que zero");
          }

         const { data_agendamento, 
            duracao, 
            latitude, 
            longitude, 
            pets, 
            hora_inicio,
            hora_termino }= req.body
   
         const input: walkingInputDTO= {
            data_agendamento, 
            duracao, 
            latitude, 
            longitude, 
            pets, 
            hora_inicio,
            hora_termino 

         }
   
         const dogWalkingBusiness = new DogWalkingBusiness
         dogWalkingBusiness.createWalking(input)
   
         res.status(201).send({ message: "Passeio Adicionada com Sucesso!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }
//    public getShow = async (
//       req: Request,
//       res: Response,show:any
//    ) => {
//       try {

//          const Shows = await new ShowBusiness().getShow(show);

//          res.send(Shows).status(200);
//       } catch (error:any) {
//          res.send({ message: error.message }).status(error.status);
//      }
//  }
   }
   
   


