import { ICuenta } from '../interface/cuenta';
export class Cuentas {
  cuenta: ICuenta[];
  length: any;

  ordenarAsc(dataCuenta) {

    // tslint:disable-next-line: only-arrow-functions
    dataCuenta.sort(function (a, b) {
      return a.CER_NCUENTA.localeCompare(b.CER_NCUENTA);
    });

    return dataCuenta;
  }
}
