import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';


@Injectable()
export class CuentasService {
    async getAllCuentas(): Promise<any> {
        const data = await fs.readFile('../data/data.json', 'utf8');
        return JSON.parse(data);
    }

}
