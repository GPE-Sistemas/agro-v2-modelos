import { IUbicacion } from "../../auxiliares";

export interface ICreateEstablecimiento {
  nombre: string;
  ubicacion?: IUbicacion[];
  idCliente?: string;
}
