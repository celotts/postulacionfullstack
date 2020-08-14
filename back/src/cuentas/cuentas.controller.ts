
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { CuentasService } from './cuentas.service';


@Controller('cuentas')
export class CuentasController {
    static getAllCuentas(): any {
        throw new Error("Method not implemented.");
    }
    constructor(private cuentasService: CuentasService) { }
    @Get()
    getAllCuentas(@Res() response) {
        try {
            this.cuentasService.getAllCuentas()
                .then(mensajeList => {
                    response.status(HttpStatus.OK).json(mensajeList.data);
                }).catch(() => {
                    response.status(HttpStatus.FORBIDDEN).json({
                        mensaje: 'Error en la obtención de las cuentas'
                    })
                })
        } catch (err) {
            console.log(err);
            return;
        }

    }
}
