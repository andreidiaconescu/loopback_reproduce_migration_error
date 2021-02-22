import { DefaultCrudRepository } from '@loopback/repository';
import { DbpostgresDataSource } from '../datasources';
import { User, UserRelations } from '../models';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id, UserRelations> {
    constructor(dataSource: DbpostgresDataSource);
    transactionUpdateUser(id: string): Promise<User | null>;
}
