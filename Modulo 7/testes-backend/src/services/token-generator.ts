import jsonwebtoken from 'jsonwebtoken';
import { ITokenGenerator } from '../business/ports';

export class TokenGenerator implements ITokenGenerator {
    generate(args: any) {
        return jsonwebtoken.sign(args, 'hbcdkubcdcnwid');
    }
}
