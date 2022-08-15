import { IMetadatos } from "./metadatos";

export interface IUplink {
  // aplicacion: string;
  // idCliente: string;
  // red: string;
  deveui: string;
  deviceName?: string;
  puerto: number;
  payload: string;
  metadatos: IMetadatos[];
  adr?: boolean;
  dr?: number;
  fCnt: string;
  tags?: { [key: string]: string };
}
