import { Request, Response } from "express";
import { CompeticoesBusiness } from "../business/CompeticoesBusiness";
import { CompeticoesDatabase } from "../data/CompeticoesDatabase";
import {competicaoInputDTO} from "../model/competicoes"
import {InvalidDados,Invalidprogresso, InvalidTexto } from "../error/customError";

export class CompeticoesController {

  public criarCompeticao = async (
      req: Request,
      res: Response
   ):Promise<void> => {
      try {
     
          if (!req.body.competicao || !req.body.data_inicio || !req.body.hora_inicio || !req.body.hora_termino) {
            throw new InvalidDados();
          }

          if (typeof req.body.competicao !== 'string') {
            throw new InvalidDados();
          }
          if (typeof req.body.data_inicio !== 'string') {
            throw new InvalidDados();
          }
          if (typeof req.body.hora_inicio !== 'string') {
            throw new InvalidDados();
          }
          if (typeof req.body.hora_termino !== 'string') {
            throw new InvalidDados();
          }
 
          const { competicao,
            data_inicio,
            hora_inicio,
            hora_termino  }= req.body

         const input: competicaoInputDTO= {
            competicao,
            data_inicio,
            hora_inicio,
            hora_termino 

         }

         const competicaoBusines = new CompeticoesBusiness
         competicaoBusines.criarCompeticao(input)
   
         res.status(201).send({ message: "Competição Adicionada com Sucesso!" })
      } catch (error) {
         res.status(400).send(error.sqlMessage || error.message)
      }
   }
   public consultarResultadoCompeticao = async (
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
          size:Number(req.query.size),
         
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


         const duracao = await new CompeticoesDatabase().consultarResultadoCompeticao(input,input);
         
         res.send(duracao).status(200);
      } catch (error) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   public competicaoEmAndamento = async (
      req: Request,
      res: Response
   ) => {
      try {
       const andamento:any = {
           id: req.params.id,
       }
         const inicio = await new CompeticoesDatabase().competicaoEmAndamento(andamento)
         
         res.send(inicio).status(200);
      } catch (error) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   public competicaoEncerrada = async (
      req: Request,
      res: Response
   ) => {
      try {
       const encerrado:any = {
           id: req.params.id,
       }
         const termino = await new CompeticoesDatabase().competicaoEncerrada(encerrado);
         
         res.send(termino).status(200);
      } catch (error) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   public todasCompeticoes = async (
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
           size:Number(req.query.size),
          
       }

let offset = input.size*(input.page-1)
input.offset = offset    

    if(!input.hora_termino){
      input.hora_termino ="%"
    }

    if(input.sort !== "hora_termino") {
      input.sort = "hora_termino"
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

         const result = await new CompeticoesDatabase().todasCompeticoes(input,input);
         
         res.send(result).status(200);
      } catch (error) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   public atualizaProgresso = async (
      req: Request,
      res: Response
   ) => {
      try {

         if (!req.body.progresso || !req.body.hora_termino) {
            throw new InvalidTexto();
          }
          if (typeof req.body.progresso !== 'string') {
            throw new InvalidTexto();
          }
          if (typeof req.body.hora_termino !== 'string') {
            throw new InvalidTexto();
          }
          if (req.body.progresso == 'Em Andamento' && req.body.progresso == 'Concluido') {
            throw new Invalidprogresso();
          }
      

       const update:any = {
           id: req.params.id,
           progresso:req.body.progresso,
           hora_termino:req.body.hora_termino
       }
   
         const progressoUpdate = await new CompeticoesDatabase().atualizaProgresso(update);
         
         res.send({ message: "Competição Encerrada" }).status(201);
      } catch (error) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   }
   
   


