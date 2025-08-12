import { BadRequestException, Injectable } from '@nestjs/common';
import { ExcelHelper } from '../utils/excel-read';
import { MailService } from '../../mail/services/mail.service';
import * as fs from 'fs';
import * as path from 'path';
import { Guest } from '../dtos/guest.dto';

@Injectable()
export class ImportService {

    constructor(private readonly emailService: MailService) {

    }

    async sendEmailToGuests(buffer: Buffer) {
        const { data, errors } = await ExcelHelper.getGuests(buffer);
        let successful = 0;

        if (errors.length >= 1) {
            return {
                totalRecords: data.length,
                successful,
                failed: errors.length,
                errors,
            }
        }

        for (const guest of data) {
            try {
                let html = this.getEmailTemplateByAccompanied(guest);
                if (!html) {
                    throw new BadRequestException('Error al recuperar el template del correo');
                }
                await this.emailService.sendMail(guest.email, 'Inscripción Halloween 2025 - Incidente en Shibuya', html);
                successful++;
            } catch (err) {
                errors.push({ row: -1, error: `DB error: ${err.message}` });
            }
        }

        return {
            totalRecords: data.length,
            successful,
            failed: errors.length,
            errors,
        };
    }

    private getEmailTemplateByAccompanied(guest: Guest): string | undefined {
        try {
            let html = '';
            if (guest.accompanied) {
                const templatePath = path.join('C:/opt/Cristian/Proyectos/notifier/common/templates', 'halloween_accompanied.html');
                html = fs.readFileSync(templatePath, 'utf8');
                html = html.replace(/\[name\]/g, guest.fullname);
                html = html.replace(/\[accompanied\]/g, guest.accompaniedName);
            } else {
                const templatePath = path.join('C:/opt/Cristian/Proyectos/notifier/common/templates', 'halloween_alone.html');
                html = fs.readFileSync(templatePath, 'utf8');
                html = html.replace(/\[name\]/g, guest.fullname);
            }
            return html;
        } catch (err) {
            console.log(err);
        }
    }

}
