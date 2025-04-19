import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './types/payload';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findByUsername(username);
    if (user?.password !== password) {
      throw new UnauthorizedException('The username or password is incorrect');
    }

    return {
      access_token: await this.generateAccessToken(user.id, user.username),
    };
  }

  private async generateAccessToken(
    id: number,
    username: string,
  ): Promise<string> {
    const payload: JwtPayload = { sub: id, username };
    return this.jwtService.signAsync(payload);
  }
}
