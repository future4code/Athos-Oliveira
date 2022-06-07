export class CustonError extends Error {
    constructor(statusCode: number, message:string){
   super(message)
}
}
export class InvalidName extends CustonError {
    constructor(){
    super(400, "invalido Name")
}
}
export class InvalidEmail extends CustonError {
    constructor(){
    super(400, "invalido email")
}
}