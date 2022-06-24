export type singup = {
   id: string,
   name: string,
   email: string,
   password: string
}

export type login = {
   id: string,
   email: string,
   password: string
}


export type friend = {
   id: string,
   // user_id: string,
   friendId: string
}
