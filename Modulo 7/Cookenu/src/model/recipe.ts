export type recipe = {
   id: string,
   title: string,
   description: string,
   data: Date,
   authorId: string
}


export interface recipeInputDTO  {
   title: string,
   description: string,
   data: Date,
   authorId: string
}

type authenticationData = {
   id: string
}

enum POST_TYPES {
   NORMAL = "normal",
   EVENT = "event"
}

