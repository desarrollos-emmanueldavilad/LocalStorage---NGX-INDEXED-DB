import { DBConfig } from 'ngx-indexed-db';

export const CLIENTE_CONFIGURACION: DBConfig = {
  name: '@ARGOCONFIGU',
  version: 1,
  objectStoresMeta : [
  {
    store: 'ARTHAS',
    storeConfig: { keyPath: "id", autoIncrement: true },
    storeSchema: [
      { name: "nombre", keypath: "nombre", options: { unique: false } },
      { name: "apellido", keypath: "apellido", options: { unique: false } },
      { name: "telefono", keypath: "telefono", options: { unique: false } },
      { name: "modified", keypath: "modified", options: { unique: false } }
    ]
  },
]

};

  
  