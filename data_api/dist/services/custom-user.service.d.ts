import { UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { User } from '../models';
import { UserRepository } from '../repositories';
export declare type Credentials = {
    email: string;
    password: string;
};
export declare class CustomUserService implements UserService<User, Credentials> {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    verifyCredentials(credentials: Credentials): Promise<User>;
    convertToUserProfile(user: User): UserProfile;
}
