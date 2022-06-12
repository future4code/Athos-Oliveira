import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";
import { friend } from "../model/user";


export class FriendController {

  public createFriend = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { id,friendId   } = req.body
   
         const input = {
            id,
            friendId
         }
   
         const friendBusiness = new FriendBusiness
         friendBusiness.createFriend(input)
   
         res.status(201).send({ message: "Amizade vinculada!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }
      public removeFriend = async (
         req: Request,
         res: Response
      ) => {
         try {
      
            const input = {
               id: req.params.id,
               friendId:req.body.friendId
           }
                
         
         
            const friendBusiness = new FriendBusiness
            friendBusiness.removeFriend(input)
      
            res.status(201).send({ message: "Amizade Removida!" })
      
        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
      }
   }

   

