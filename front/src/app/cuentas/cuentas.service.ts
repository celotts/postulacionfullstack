import { Injectable } from '@angular/core';
import { MENSAJE_APP } from './../mensajeApp/mensajeApp';
import { BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ICuenta } from './interface/cuenta';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  private headers: any;
  private headersCsv: any;
  private headersJson: any;

  constructor(private http: HttpClient) {
    /*---------------------------------------------------*/
    // Define cabezara del servicio
    // Tipo: Json
    /*---------------------------------------------------*/
    this.headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*'
    });
    this.headersCsv = new HttpHeaders({
      'Content-Type': 'text/csv'
    });
    this.headersJson = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  getAlCuentas = () => {
    try {
      return this.http.get<ICuenta[]>(`${environment.urlBaseDato}${environment.service.getAllCuentas.endpoint}`, this.headers)
        .pipe(
          catchError(err => {
            return throwError(`${MENSAJE_APP.errorInterno}`);
          }),
          map(resultCuentas => {
            try {
              return resultCuentas;
            } catch {
              return throwError(`${MENSAJE_APP.errorInterno}`);
            }

          })
        );
    } catch {
      console.error(`${MENSAJE_APP.errorInterno}`);
    }
  }
}
