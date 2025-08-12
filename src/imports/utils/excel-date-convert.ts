export class ExcelDate {

    static convert(serial: number) {
        const utc_days = Math.floor(serial - 25569);
        const utc_value = utc_days * 86400;
        const date_info = new Date(utc_value * 1000);

        const day = String(date_info.getUTCDate()).padStart(2, '0');
        const month = String(date_info.getUTCMonth() + 1).padStart(2, '0');
        const year = date_info.getUTCFullYear();

        return `${day}-${month}-${year}`;
    }

}