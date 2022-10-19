export interface IDispositivoCaravana {
  asignado?: boolean;
  encendida?: boolean;
  gps?: boolean;
  frecuenciaReporte?: number;
  adr?: boolean;
  dr?: number;
  acelerometro?: {
    escala?: string;
    frecuencia?: number;
    freefallMg?: number;
    freefallMs?: number;
    wakeMg?: number;
    wakeMs?: number;
  };
}
