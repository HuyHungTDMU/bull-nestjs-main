import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(userDto: any) {
    const user = await this.userService.create(userDto);
    return userDto;
  }
}
