import { ICoordenadas } from '../../../auxiliares';
import {
  ICliente,
  IDispositivo,
  IEstablecimiento,
  ILote,
  Semaforo,
} from '../../../generales';

export interface ICisterna {
  _id?: string;
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  idLote?: string;
  configuraciones?: { colorIcono: string; coloresNivel: Semaforo[] };
  // Info
  nombre?: string;
  idsBomba?: string[];
  idsNivel?: string[];
  alturaMm?: number;
  volumenM3?: number;
  ubicacion?: ICoordenadas;
  // Virtuals
  cliente?: ICliente;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  bombas?: IDispositivo[];
  niveles?: IDispositivo[];
}
