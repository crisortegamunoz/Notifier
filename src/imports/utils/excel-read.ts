import * as XLSX from 'xlsx';
import { ImportDTO, ImportError } from '../dtos/import.dto';
import { GuestValidator } from './guest-validator';
import { BadRequestException } from '@nestjs/common';
import { Guest } from '../dtos/guest.dto';

export class ExcelHelper {

    static async getGuests(buffer: Buffer): Promise<ImportDTO<Guest>> {
        const validator = new GuestValidator();
        try {
            const workbook = XLSX.read(buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const rows: any[] = XLSX.utils.sheet_to_json(sheet, {
                header: [
                    'timestamp',
                    'fullname',
                    'attend',
                    'accompanied',
                    'accompaniedName',
                    'email'
                ],
                range: 1
            });
            const data: Guest[] = [];
            const errors: ImportError[] = [];

            rows.forEach((row, index) => {
                const rowNumber = index + 2;
                try {
                    const player = validator.validateAndTransform(row);
                    data.push(player);
                } catch (err) {
                    if (err instanceof Error) {
                        errors.push({ row: rowNumber, error: err.message });
                    } else {
                        errors.push({ row: rowNumber, error: 'Error desconocido durante el procesamiento.' });
                    }
                }
            });
            return { data, errors };
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(`Error al procesar el archivo: ${err.message}`);
            }
            throw new Error('Error desconocido al procesar el archivo.');
        }
    }

}