export class CustonError extends Error {
    constructor(statusCode: number, message:string){
   super(message)
}
}
