export type post = {
   id: string,
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}


export interface postInputDTO  {
   photo: string,
   description: string,
   type: POST_TYPES,
   createdAt: Date,
   authorId: string
}

type authenticationData = {
   id: string
}

enum STATUS_TYPES {
   PENDENTE = "pendente",
   PROGRESSO = "progresso",
   DONE = "concluido",
}

