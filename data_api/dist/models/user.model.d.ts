import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    id?: string;
    realm?: string;
    username?: string;
    email: string;
    password: string;
    emailVerified?: boolean;
    verificationToken?: string;
    randomDate?: Date;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
