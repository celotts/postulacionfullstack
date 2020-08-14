import { Component, OnInit } from '@angular/core';
import { CuentasService } from './cuentas.service';
import { Cuentas } from './model/cuenta';
import { BaseComponent } from './../baseComponent/baseComponent';
import { takeUntil } from 'rxjs/operators';
import { MENSAJE_APP } from './../mensajeApp/mensajeApp';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent extends BaseComponent implements OnInit {


  curPage: number;
  pageSize: number;
  cantidadItem: any;

  constructor(private cuentasService: CuentasService,
    private spinner: NgxSpinnerService) { super(); }

  dataCuentas: [];

  ngOnInit(): void {
    this.getCuentas();
  }

  getCuentas() {
    this.spinner.show();
    try {
      this.cuentasService.getAlCuentas()
        .pipe(takeUntil(this.ngUnSubscribe$))
        .subscribe(resCuenta => {

          this.dataCuentas = JSON.parse(JSON.stringify(this.ordenaDataTabla(resCuenta)));

          this.inicializaPagina();
          this.spinner.hide();
        });

    } catch {
      this.spinner.hide();
      console.error(`${MENSAJE_APP.errorInterno}`);
    }
  }

  inicializaPagina() {
    this.cantidadItem = this.dataCuentas.length;
    this.curPage = 1;
    this.pageSize = 10; // any page size you want
    this.numberOfPages();
  }

  ordenaDataTabla(dataCuenta) {
    const dataOrder = new Cuentas();
    return dataOrder.ordenarAsc(dataCuenta);
  }

  numberOfPages() {
    if (this.dataCuentas === undefined) {
      return 0;
    }
    return Math.ceil(this.dataCuentas.length / this.pageSize);
  }

  anterior() {
    this.viewSpinner();
    this.curPage -= 1;
  }

  siguiente() {
    this.viewSpinner();
    this.curPage += 1;
  }

  ultima() {
    this.viewSpinner();
    this.curPage = this.numberOfPages();
  }

  viewSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 100);
  }

}
