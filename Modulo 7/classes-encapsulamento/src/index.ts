//1 o constructor serve para indicar quais propriedade da classe o usuario pode ter acesso
//2 so uma vez
//3 adicionar o metodo public getCpf(): string {return this.cpf}


class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
   //private transactions: Transaction[] = [];
  
    constructor(cpf: string,name: string,age: number) {
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  public getCpf(): string {
	return this.cpf
}
    
  }

const user:UserAccount=new UserAccount("123456-11","vitor",18)


class Transaction  {
  private  description: string;
  private   value: number;
  private   date: string;
  constructor(description: string,date: string,value: number) {
    this.description = description;
    this.date = date;
    this.value = value;

 }
 public getDescription(): string {
	return this.description
}
public setDescription = (description:string) => this.description = description
}


const transferencia:Transaction=new Transaction("joao","21-01-22",500)

transferencia.setDescription("maria")


class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
    public getAccounts= () => this.accounts
    public setAccounts= (iten:any) => this.accounts.push(iten)
  }
 
  const accounts:Bank=new Bank([])
 let x=  accounts.setAccounts("teste")
console.log(accounts.getAccounts())


