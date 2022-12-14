import { IDispositivo } from "../generales";
import { IMetadatos } from "./metadatos";

export interface IUplink {
  dispositivo: IDispositivo;
  deveui: string;
  deviceName?: string;
  puerto: number;
  payload: string;
  metadatos: IMetadatos[];
  adr?: boolean;
  dr?: number;
  fCnt: string;
  confirmedUplink?: boolean;
  tags?: { [key: string]: string };
}
