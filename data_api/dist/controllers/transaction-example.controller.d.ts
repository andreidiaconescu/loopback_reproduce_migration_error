import { User } from '../models';
import { UserRepository } from '../repositories';
export declare class TransactionExampleController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    transactionUpdateUser(id: string): Promise<User | null>;
}
