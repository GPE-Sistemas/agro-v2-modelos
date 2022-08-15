import { TipoDispositivo } from "../tipoDispositivo/tipoDispositivo";
import { TipoConectividad } from "./conectividad";

export interface IUpdateDispositivo {
  idCliente?: string;
  deveui?: string;
  deviceName?: string;
  appkey?: string;
  idLote?: string;
  tipoDispositivo?: TipoDispositivo;
  conectividad?: TipoConectividad;
  // Solo con conectividad Lora
  idLoraServer?: string;
}
