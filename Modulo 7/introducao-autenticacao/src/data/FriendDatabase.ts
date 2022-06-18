import { friend } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class FriendDatabase extends BaseDatabase {
   
   public insertFriend = async(
      friend: friend
   ) => {
      try {
    
         await FriendDatabase.connection.insert({
            user_id: friend.id,
            FriendId: friend.friendId,
          
         }).into('Labook_UserFriend_relation')
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }

public removeFriend = async(
   input:friend
) => {
   try {
      
      const result = await FriendDatabase.connection()
          .delete().where({ FriendId: input.friendId}).andWhere ({ user_id: input.id}).from('Labook_UserFriend_relation');

      return result;

  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
}
