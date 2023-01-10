import { IConfigLora } from "./configLora";
import { TipoDispositivo } from "./tipoDispositivo";

// Funciones Basicas
// function toInt(hex: string): number {
//   try {
//     return parseInt(hex, 16);
//   } catch (err) {
//     console.error(`Error en toInt, hex: ${hex}`);
//     return null;
//   }
// }

// function toFloat(hex: string, endian: "BE" | "LE" = "BE"): number {
//   try {
//     if (endian === "BE") {
//       return Buffer.from(hex, "hex").readFloatBE(0);
//     } else {
//       return Buffer.from(hex, "hex").readFloatLE(0);
//     }
//   } catch (err) {
//     console.error(`Error en toFloat, hex: ${hex} endian: ${endian}`);
//     return null;
//   }
// }

// function toBoolean(hex: string, valorVerdadero = "01") {
//   return hex === valorVerdadero;
// }

// function toAscii(hex: string) {
//   try {
//     return Buffer.from(hex, "hex").toString("ascii");
//   } catch (err) {
//     console.error(`Error en toAscii, hex: ${hex}`);
//     return null;
//   }
// }

// function toBinToBoolean(hex: string, bit: number, valorVerdadero = "1") {
//   try {
//     const length = hex.length * 4;
//     const binario = ("0".repeat(length) + parseInt(hex, 16).toString(2)).slice(
//       -length
//     );
//     return binario[bit] === valorVerdadero;
//   } catch (err) {
//     console.error(
//       `Error en toBinToBoolean, hex: ${hex} bit: ${bit} valorVerdadero: ${valorVerdadero}`
//     );
//     return null;
//   }
// }

// function toBinToInt(hex: string, bitInicio: number, bitFin: number) {
//   try {
//     const length = hex.length * 4;
//     const binario = ("0".repeat(length) + parseInt(hex, 16).toString(2)).slice(
//       -length
//     );
//     return parseInt(binario.substring(bitInicio, bitFin), 2);
//   } catch (err) {
//     console.error(
//       `Error en toBinToInt, hex: ${hex} bitInicio: ${bitInicio} bitFin: ${bitFin}`
//     );
//     return null;
//   }
// }

type Funcion = "toBoolean" | "toInt" | "toSignedInt" | "toFloat" | "etc...";

interface IParseo {
  puerto: number;
  campos: {
    nombre: string;
    byteInicio: number;
    logitud: number;
    funcionAEjecutar: Funcion;
    parametrosFuncion?: any[];
  }[];
}

export interface ITipoDispositivo {
  _id: string;
  nombre: TipoDispositivo;
  integrationUrl?: string;
  loraServers?: IConfigLora[];
  parseo?: IParseo[];
}
