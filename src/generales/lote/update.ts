import { IUbicacion } from "../../auxiliares";

export interface IUpdateLote {
  nombre?: string;
  ubicacion?: IUbicacion;
  idEstablecimiento?: string;
}
