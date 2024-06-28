import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UserService {
  constructor(
    @InjectQueue('send-mail')
    private sendMail: Queue,
  ) {}

  async create(userDto: any) {
    console.log({ userDto });
    await this.sendMail.add(
      'register',
      {
        to: userDto.email,
        name: userDto.name,
      },
      {
        removeOnComplete: true,
      },
    );
  }
}
