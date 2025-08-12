import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {

    private transporter;

    constructor(private readonly configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.configService.get<string>('EMAIL_USER'),
                pass: this.configService.get<string>('PASSWORD_EMAIL')
            },
        });
    }

    async sendMail(to: string, subject: string, html?: string) {
        const mailOptions = {
            from: this.configService.get<string>('EMAIL_USER'),
            to,
            subject,
            html
        };

        return this.transporter.sendMail(mailOptions);
    }

}
