import { infogGeneral } from './infoGeneral.entity';
import { Oficina } from './oficina.entity';
import { Calidad } from './calidad.entity';
import { Volumen } from './volumen.entity';
export interface infoReporteEntity {
  datosGenerales: infogGeneral;
  datosCalidad: Calidad;
  volumen: Volumen;
  datosOficina: Oficina;
}
