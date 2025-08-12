import { BadRequestException } from '@nestjs/common';
import validator from 'validator';

export class ValidationHelper {

    static validateName(name: string, accompanied: boolean = true): string {
        if (!accompanied) {
            return '';
        }
        if (!name || name.trim() === '') {
            throw new BadRequestException('El nombre no puede estar vacío.');
        }
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;
        if (!nameRegex.test(name.trim())) {
            throw new BadRequestException(`Formato del nombre inválido: ${name}. Debe contener solo letras y espacios.`);
        }
        return name.trim();
    }

    static validateOption(value: string): boolean {
        let valid: boolean = false;
        if (value.trim().toLowerCase() === 'sí' || value.trim().toLowerCase() === 'si') {
            valid = true;
        } else {
            valid = false;
        }
        return valid;
    }

    static validateEmail(email: string): string {
        if (!email || !validator.isEmail(email)) {
            throw new BadRequestException(`Formato del email invalido: ${email}`);
        }
        return email.toLowerCase().trim();
    }
}