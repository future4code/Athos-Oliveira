import { IIdGenerator } from "../business/ports";
import { v4 as uuidv4 } from 'uuid';


export class IdGenerator implements IIdGenerator {

    generate() {
        return uuidv4();
    }
}