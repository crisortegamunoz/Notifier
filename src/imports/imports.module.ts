import { Module } from '@nestjs/common';
import { ImportController } from './controllers/import.controller';
import { ImportService } from './services/import.service';
import { MailModule } from './../mail/mail.module';

@Module({
    imports: [
        ImportsModule,
        MailModule
    ],
    controllers: [ImportController],
    providers: [ImportService],
})
export class ImportsModule { }
