import { friend } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class FriendDatabase extends BaseDatabase {
   
   public insertFriend = async(
      friend: friend
   ) => {
      try {
         await FriendDatabase.connection.insert({
            id: friend.id,
            friendId: friend.friendId,
          
         }).into('Labook_UserFriend_relation')
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }


}

