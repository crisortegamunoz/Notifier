import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ImportService } from '../services/import.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('imports')
export class ImportController {

    constructor(private readonly importsService: ImportService) { }


    @Post('notify-guest')
    @UseInterceptors(FileInterceptor('file'))
    async importPlayers(@UploadedFile() file: any) {
        return this.importsService.sendEmailToGuests(file.buffer);
    }

}
