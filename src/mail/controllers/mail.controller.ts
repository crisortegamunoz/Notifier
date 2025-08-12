import { Controller } from '@nestjs/common';

@Controller('mail')
export class MailController {

    getHello(): string {
        return 'Hello mail!';
    }
}
