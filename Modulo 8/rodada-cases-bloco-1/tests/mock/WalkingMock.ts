import { walking } from "../../model/walking";

export class WalkingMock {
  public async createUser(walking: walking): Promise<void> {}
}

export default new WalkingMock();

