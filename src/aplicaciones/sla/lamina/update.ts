import { IAlerta, IReporte, Semaforo } from '../../../generales';

export interface IUpdateLamina {
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  //
  deveui?: string;
  nombre?: string;
  descripcion?: string;
  configuraciones?: { colorIcono: string; coloresNivel: Semaforo[] };
  //
  ultimaComunicacion?: string;
  ultimoEstado?: 'Ok' | 'Alerta';
  ultimaAlerta?: IAlerta;
  ultimoReporte?: IReporte;
}
