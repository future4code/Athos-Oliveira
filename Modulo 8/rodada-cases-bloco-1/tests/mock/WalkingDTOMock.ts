import { walkingInputDTO } from "../../model/walking";



export class WalkingDTOMock {
    public async createUser(walkingInputDTO: walkingInputDTO): Promise<void> {}
  }
  
  export default new WalkingDTOMock();