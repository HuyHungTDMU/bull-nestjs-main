import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { BullModule } from '@nestjs/bull';
import { EventGateway } from './event.gateway';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // BullModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (config: ConfigService) => ({
    //     redis: {
    //       host: config.get('REDIS_HOST'),
    //       port: config.get('REDIS_PORT'),
    //       password: config.get('REDIS_PASSWORD'),
    //     },
    //   }),
    //   inject: [ConfigService],
    // }),

    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 5003,
      },
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [EventGateway, AppService],
})
export class AppModule {}
