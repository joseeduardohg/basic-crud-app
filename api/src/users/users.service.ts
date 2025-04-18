import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'jane',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findByUsername(username: string): Promise<User | undefined> {
    return Promise.resolve(
      this.users.find((user) => user.username === username),
    );
  }
}
