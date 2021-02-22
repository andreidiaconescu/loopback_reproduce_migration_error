import {UserService} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import {compare} from 'bcryptjs';
import {User} from '../models';
import {UserRepository} from '../repositories';

export type Credentials = {
  email: string;
  password: string;
};

export class CustomUserService implements UserService<User, Credentials> {
  constructor(@repository(UserRepository) public userRepository: UserRepository) {}

  async verifyCredentials(credentials: Credentials): Promise<User> {
    const invalidCredentialsError = 'Invalid email or password.';

    const foundUser: User | null = await this.userRepository.findOne({
      where: {email: credentials.email},
    });
    if (!foundUser) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    // const credentialsFound = await this.userRepository.findCredentials(foundUser.id);
    // if (!credentialsFound) {
    //   throw new HttpErrors.Unauthorized(invalidCredentialsError);
    // }

    const passwordMatched = await compare(credentials.password, foundUser.password);

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized(invalidCredentialsError);
    }

    return foundUser;
  }

  convertToUserProfile(user: User): UserProfile {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [securityId]: (user?.id?.toString() as unknown) as any,
      name: user.username,
      id: user.id,
      email: user.email,
    };
  }
}
