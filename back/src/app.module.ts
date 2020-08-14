import { Module } from '@nestjs/common';
import { CuentasController } from './cuentas/cuentas.controller';
import { CuentasService } from './cuentas/cuentas.service';



@Module({
  imports: [],
  controllers: [CuentasController],
  providers: [CuentasService],
})
export class AppModule { }
