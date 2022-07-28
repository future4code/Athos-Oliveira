import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { CustomError,UserNotFoud, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";

export class UserDatabase extends BaseDatabase {

  private static LAMA_USUARIOS = "LAMA_USUARIOS";

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
          id,
          email,
          name,
          password,
          role
        })
        .into(UserDatabase.LAMA_USUARIOS);
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.LAMA_USUARIOS)
      .where({ email });

    return User.toUserModel(result[0]);
  }

}
