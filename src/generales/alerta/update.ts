import { TipoDispositivo } from "../tipoDispositivo";
import { EstadoAlerta, IEstadoAlerta } from "./estado";

export interface IUpdateAlerta {
  activa?: boolean;
  // Datos del dispositivo
  deviceName?: string;
  deveui?: string;
  tipoDispositivo?: TipoDispositivo;
  idAsignado?: string;
  // Estados de la alerta
  estados?: IEstadoAlerta[];
  estadoActual?: EstadoAlerta;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion?: string;
  reportes?: Record<string, any>[];
}
