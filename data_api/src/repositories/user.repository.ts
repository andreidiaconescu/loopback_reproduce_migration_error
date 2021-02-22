import {inject} from '@loopback/core';
import {DefaultCrudRepository, IsolationLevel} from '@loopback/repository';
import {DbpostgresDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.dbpostgres') dataSource: DbpostgresDataSource,
  ) {
    super(User, dataSource);
  }

  public async transactionUpdateUser(id: string): Promise<User|null> {
    const transaction = await this.dataSource.beginTransaction(IsolationLevel.READ_COMMITTED);

    const foundUser: User | null = await this.findOne({
      where: {id},
    });
    if (!foundUser) {
      throw new Error('User with id: '+ id + ' not found');
    }

    console.log('UserRepository transactionUpdateUser process.env.TZ', process.env.TZ)
    const now = new Date();
    console.log('UserRepository transactionUpdateUser now', now);

    foundUser.randomDate = now;
    await this.update(foundUser, {transaction});
    await transaction.commit();

    const upadtedUser: User | null = await this.findOne({
      where: {id},
    });

    return upadtedUser;
  }
}
