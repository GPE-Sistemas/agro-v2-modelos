import { ICoordenadas } from "../../auxiliares";
import { IAlerta } from "../alerta";
import { IReporte } from "../reporte";
import { TipoConectividad } from "./conectividad";

export interface ICreateDispositivo {
  // Tentant
  idCliente?: string;
  idEstablecimiento?: string;
  // Info de carga
  deveui: string;
  deviceName: string;
  appkey: string;
  conectividad: TipoConectividad;
  idTipoDispositivo: string;
  idLote: string;
  idLoraServer?: string;
  // Info de comunicacion
  snr?: number;
  rssi?: number;
  adr?: boolean;
  dr?: number;
  fechaUltimaComunicacion?: string;
  // Otra info
  ubicacion?: ICoordenadas;
  // Info especifica de cada tipo de dispositivo
  config?: Record<string, any>;
  ultimoReporte?: IReporte;
  ultimaAlerta?: IAlerta;
}