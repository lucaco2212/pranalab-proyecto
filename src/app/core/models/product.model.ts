export type ClasificacionProducto = 'con-receta' | 'venta-directa';

export interface Product {
  id: number;
  slug: string;
  nombre: string;
  laboratorio?: string;
  principioActivo?: string;
  categoria: string;
  formaFarmaceutica: string;
  imagenes: string[];
  composicion: string;
  presentacion: string;
  posologia: string;
  clasificacion: ClasificacionProducto;
  nuevo?: boolean;
  destacado?: boolean;
  descripcionCorta: string;
  descripcionParrafos?: string[];
  contenido?: string;
  modoUso?: string;
}
