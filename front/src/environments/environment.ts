// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  qa: true,
  csim: '',
  conextoData: '',


  // Basse de datos

  urlBaseDato: 'http://localhost:3000/',

  service: {
    getAllCuentas: {
      public: false,
      nameservice: 'getAllCuentas',
      endpoint: 'cuentas'
    }

  }

};
