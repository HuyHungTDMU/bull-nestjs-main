import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UserController } from './controllers/user.controller';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { EmailConsumer } from './consumers/email.consumer';

// @Global()
@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.registerQueue({
      name: 'send-mail',
    }),
  ],
  controllers: [AuthController, UserController],
  providers: [UserService, AuthService, EmailConsumer],
  exports: [UserService, AuthService],
})
export class UserModule {}
