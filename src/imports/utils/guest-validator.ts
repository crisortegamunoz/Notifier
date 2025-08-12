import { ValidationHelper } from '../../../common/validators/validator-helper';
import { Guest } from '../dtos/guest.dto';

export class GuestValidator {

    public validateAndTransform(row: any) {
        const missingFields = this.getMissingFields(row);
        if (missingFields.length > 0) {
            throw new Error(`Faltan campos obligatorios: ${missingFields.join(', ')}`);
        }

        const fullname = ValidationHelper.validateName(row.fullname);
        const attend = ValidationHelper.validateOption(row.attend);
        const accompanied = ValidationHelper.validateOption(row.accompanied);
        const accompaniedName = ValidationHelper.validateName(row.accompaniedName, accompanied);
        const email = ValidationHelper.validateEmail(row.email);
        const guest: Guest = {
            fullname,
            attend,
            accompanied,
            accompaniedName,
            email
        };

        return guest;
    }

    private getMissingFields(row: any): string[] {
        const missingFields: string[] = [];
        const requiredFields = [
            'fullname',
            'attend',
            'accompanied',
            'accompaniedName',
            'email'
        ];
        const missingFieldKeys = requiredFields.filter(field => !row[field]);
        if (missingFieldKeys.length <= 0) {
            return missingFields;
        }
        return missingFields;
    }
}