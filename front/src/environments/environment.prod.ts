export const environment = {
  production: true,
  qa: true,
  csim: '',
  conextoData: '',


  // Basse de datos

  urlBaseDato: 'localhost:3000/',

  service: {
    getAllCuentas: {
      public: false,
      nameservice: 'getAllCuentas',
      endpoint: 'cuentas'
    }
    
  }

};
