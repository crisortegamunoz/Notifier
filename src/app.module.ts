import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { HttpModule } from '@nestjs/axios';
import { ImportsModule } from './imports/imports.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    MailModule,
    ImportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
