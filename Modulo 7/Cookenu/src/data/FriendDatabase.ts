import { friend } from "../model/singup";
import { BaseDatabase } from "./BaseDatabase";

export class FriendDatabase extends BaseDatabase {
   
   public insertFriend = async(
      friend: friend
   ) => {
      try {
    
         await FriendDatabase.connection.insert({
            user_id: friend.id,
            FriendId: friend.friendId,
          
         }).into('friend_relation')
         
      } catch (error:any) {
         throw new Error(error.message)
      }
   
   }

public removeFriend = async(
   input:friend
) => {
   try {
      
      const result = await FriendDatabase.connection()
          .delete().where({ FriendId: input.friendId}).andWhere ({ user_id: input.id}).from('friend_relation');

      return result;

  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
}
