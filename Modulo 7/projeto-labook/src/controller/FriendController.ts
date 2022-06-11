import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";


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

   
   

}
