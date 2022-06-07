export type task = {
   id: string,
   title: string,
   description: string,
   deadline: string,
   authorId: string
}

export interface taskInputDTO  {
   title: string,
   description: string,
   deadline: string,
   authorId: string
}