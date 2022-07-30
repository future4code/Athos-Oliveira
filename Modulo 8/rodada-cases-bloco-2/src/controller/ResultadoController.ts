import { Request, Response } from "express";
import { ResultadoBusiness } from "../business/ResultadoBusiness";
import { ResultadoDatabase } from "../data/ResultadoDatabase";
import {resultado,resultadoInputDTO} from "../model/resultados"
import {InvalidDados,Invalidunidade, InvalidNumero } from "../error/customError";
import { idText } from "typescript";

export class ResultadoController {

  public criarResultado = async (
      req: Request,
      res: Response
   ):Promise<void> => {
      try {
     
          if (!req.body.competicao || !req.body.atleta || !req.body.resultado || !req.body.unidade || !req.body.competicao_id) {
            throw new InvalidDados();
          }

          if (typeof req.body.competicao !== 'string') {
            throw new InvalidDados();
          }
          if (typeof req.body.atleta !== 'string') {
            throw new InvalidDados();
          }
          if (typeof req.body.resultado !== 'number') {
            throw new InvalidNumero();
          }
          if (typeof req.body.unidade !== 'string') {
            throw new InvalidDados();
          }
          if (typeof req.body.competicao_id !== 'string') {
            throw new InvalidDados();
          }
          if (req.body.unidade.length > 1) {
            throw new Invalidunidade();
          }
          
          const { competicao,
            atleta,
            unidade,resultado,
            competicao_id  }= req.body

         const input: resultadoInputDTO= {
          competicao,
            atleta,
            unidade,resultado,
            competicao_id

         }

         const resultadoBusines = new ResultadoBusiness
         resultadoBusines.criarResultado(input)
   
         res.status(201).send({ message: "Resultado Adicionado com Sucesso!" })
      } catch (error:any) {
         res.status(400).send(error.sqlMessage || error.message)
      }
   }
   public consultarResultado = async (
      req: Request,
      res: Response
   ) => {
      try {
       const consulta:any = {
           id: req.params.id,
           atleta:req.query.atleta
       }

         const atleta = await new ResultadoDatabase().consultarResultado(consulta);
         
         res.send(atleta).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
 
  
   public Ranking = async (
      req: Request,
      res: Response
   ) => {
      try {
       const input:any = {
           id: req.params.id,
           search:req.query.search,
           sort:req.query.sort as string,
           order:req.query.order as string,
           page: Number(req.query.page),
           size:Number(req.query.size)
       }
       
let offset = input.size*(input.page-1)
input.offset = offset    

    if(!input.resultado){
      input.resultado ="%"
    }

    if(input.sort !== "resultado") {
      input.sort = "resultado"
    }

    if( !input.order || input.order.toUpperCase() !== "ASC" && input.order.toUpperCase() !== "DESC" ){
      input.order = "ASC"
    }

    if(isNaN(input.page) || input.page < 1) {
      input.page = 1
    }

    if(isNaN(input.size) || input.size < 1) {
      input.size = 10
    }

         const result = await new ResultadoDatabase().Ranking(input);
         
         res.send(result).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
  
   }
   
   


