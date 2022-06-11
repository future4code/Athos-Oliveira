// import { generateId } from "../services/generateID";
import { FriendDatabase } from "../data/FriendDatabase";


export class FriendBusiness {
public createFriend = async (input: any) => {
   try {
     const { id, friendId } = input;
 
     if (!id  || !friendId ) {
       throw new Error(
         'Preencha os campos "o id do amigo e Sua id"'
       );
     }
 
    //  const id: string = generateId();
 
     const friendDatabase = new FriendDatabase();
     await friendDatabase.insertFriend({
       id,
       friendId
     });
   } catch (error: any) {
     throw new Error(error.message);
   }
 };

}

