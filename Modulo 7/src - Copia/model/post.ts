// export type post = {
//    id: string,
//    photo: string,
//    description: string,
//    type: POST_TYPES,
//    createdAt: Date,
//    authorId: string
// }
export type post = {
   id: string,
   photo: string,
   description: string,
   type: string,
   createdAt: string,
   authorId: string
}

export interface postInputDTO  {
   photo: string,
   description: string,
   type: string,
   createdAt: string,
   authorId: string
}

type authenticationData = {
   id: string
}



enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

