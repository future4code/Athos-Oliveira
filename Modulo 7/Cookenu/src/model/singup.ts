export type singup = {
   id: string,
   name: string,
   email: string,
   password: string
}

export type login = {

   email: string,
   password: string
}


export type friend = {
   id: string,
   // user_id: string,
   friendId: string
}
export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}