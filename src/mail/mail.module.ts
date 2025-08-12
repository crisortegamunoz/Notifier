import { Module } from '@nestjs/common';
import { MailService } from './services/mail.service';
import { MailController } from './controllers/mail.controller';

@Module({
  providers: [MailService],
  controllers: [MailController],
  exports: [MailService]
})
export class MailModule {}
