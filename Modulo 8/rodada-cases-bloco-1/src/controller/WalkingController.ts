import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/WalkingBusiness";
import { DogWalkingDatabase } from "../data/WalkingDatabase";
import {walkingInputDTO} from "../model/walking"


export class WalkingController {

  public createWalking = async (
      req: Request,
      res: Response
   ):Promise<void> => {
      try {

      
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
         res.status(400).send(error.sqlMessage || error.message)
      }
   }
   public showWalking = async (
      req: Request,
      res: Response
   ) => {
      try {
       const input:any = {
           id: req.params.id,
       }
         const duracao = await new DogWalkingDatabase().showWalking(input);
         
         res.send(duracao).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   }
   
   


