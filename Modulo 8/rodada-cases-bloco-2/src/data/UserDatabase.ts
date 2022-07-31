import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/user";

export class UserDatabase extends BaseDatabase {

  private static Usuarios = 'USUARIOS';

  public async createUser(
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      
      await this.getConnection()
        .insert({
          id:id,
          email:email,
          name:name,
          password:password,
          role:role,
        }).into(UserDatabase.Usuarios);

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.Usuarios)
      .where({ email });

    return User.toUserModel(result[0]);
  }

}
