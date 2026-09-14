import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 1,
      slug: 'citrato-de-magnesio-400mg',
      nombre: 'Citrato de Magnesio 400mg',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Citrato de Magnesio',
      categoria: 'Minerales y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: ['/assets/images/recomendaciones/citrato-de-magnesio.png'],
      composicion: 'Citrato de Magnesio 400 mg + Excipientes c.s.p.',
      presentacion: 'Frasco con 30 cápsulas',
      posologia: '1 cápsula al día con abundante agua',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Mejora la función muscular, promueve un sueño reparador y ayuda a reducir el estrés y la ansiedad.',
      descripcionParrafos: [
        'El citrato de magnesio es una forma altamente biodisponible de magnesio, mineral fundamental para más de 300 reacciones enzimáticas en el cuerpo humano.',
        'Contribuye a relajar los músculos y el sistema nervioso, facilitando un descanso profundo y reparador.',
        'Apoya la reducción de calambres musculares y el manejo de estados de tensión o sobrecarga diaria.'
      ],
      contenido: 'Frasco con 30 cápsulas de 400 mg',
      modoUso: 'Tomar 1 cápsula diaria con agua, preferentemente por la tarde o noche.'
    },
    {
      id: 2,
      slug: 'kalm-lab-stress-control',
      nombre: 'Kalm-Lab Stress Control',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Triptófano + Glutamina + Magnesio',
      categoria: 'Control del Estrés y Bienestar',
      formaFarmaceutica: 'Cápsulas',
      imagenes: ['/assets/images/recomendaciones/kalm-lab-stress-control.png'],
      composicion: 'L-Triptófano, L-Glutamina, Magnesio quelado + Excipientes',
      presentacion: 'Frasco con 60 cápsulas',
      posologia: '1 a 2 cápsulas diarias',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Reduce el estrés, fomenta la sensación de relajación y mejora la calidad de tu sueño.',
      descripcionParrafos: [
        'Fórmula sinérgica diseñada para favorecer el equilibrio emocional y la síntesis natural de serotonina y melatonina.',
        'La combinación de Triptófano con Glutamina y Magnesio actúa como modulador natural del sistema nervioso central.',
        'Ideal para personas con jornadas laborales demandantes, fatiga mental o dificultad para conciliar el sueño.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: '1 cápsula antes de dormir o según indicación del profesional farmacéutico.'
    },
    {
      id: 3,
      slug: 'minilab-multivitaminas',
      nombre: 'Minilab Multivitaminas Jarabe',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Complejo Multivitamínico Pediátrico',
      categoria: 'Línea Pediátrica y Crecimiento',
      formaFarmaceutica: 'Jarabes',
      imagenes: ['/assets/images/recomendaciones/minilab-multivitaminas.png'],
      composicion: 'Vitaminas A, C, D3, E, Complejo B y Zinc en solución oral sabor frambuesa.',
      presentacion: 'Frasco de 125 ml con vaso dosificador',
      posologia: 'Según rango de edad y posología recomendada',
      clasificacion: 'venta-directa',
      nuevo: false,
      destacado: true,
      descripcionCorta: 'Aporte nutricional completo y apoyo clave en etapas de crecimiento infantil con sabor frambuesa.',
      descripcionParrafos: [
        'Desarrollado para complementar la nutrición diaria en etapas críticas de desarrollo físico y cognitivo.',
        'Excelente tolerancia y agradable sabor natural a frambuesa que facilita la adherencia.',
        'Brinda respaldo inmunitario y energético en momentos de cambio de estación o alta exigencia escolar.'
      ],
      contenido: 'Frasco de 125 ml',
      modoUso: 'Agitar antes de consumir. Administrar con el dosificador graduado.'
    },
    {
      id: 4,
      slug: 'creatina-vitamina-c',
      nombre: 'Creatina + Vitamina C',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Creatina Monohidrato + Vitamina C',
      categoria: 'Rendimiento y Vitalidad',
      formaFarmaceutica: 'Cápsulas',
      imagenes: ['/assets/images/recomendaciones/creatina-vitamina-c.png'],
      composicion: 'Creatina Monohidrato micronizada + Ácido Ascórbico (Vitamina C)',
      presentacion: 'Frasco con 60 cápsulas',
      posologia: '2 cápsulas al día',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Mejora la energía muscular, contribuye a la salud cerebral y brinda poder antioxidante.',
      descripcionParrafos: [
        'La creatina optimiza la reposición de ATP a nivel celular, mejorando la resistencia y la fuerza muscular.',
        'La inclusión de Vitamina C potencia la absorción y protege las células contra el estrés oxidativo.',
        'Contribuye a la vitalidad física diaria y apoya el rendimiento cognitivo y celular.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: '2 cápsulas diarias con agua o jugo, preferentemente junto a las comidas.'
    },
    {
      id: 5,
      slug: 'colon-detox',
      nombre: 'Colon Detox',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Extractos Botánicos & Fibras Digestivas',
      categoria: 'Salud Digestiva',
      formaFarmaceutica: 'Cápsulas',
      imagenes: ['/assets/images/recomendaciones/colon-detox.png'],
      composicion: 'Combinación fitoterapéutica digestiva con fibras y extractos naturales estandarizados',
      presentacion: 'Frasco con 30 cápsulas',
      posologia: '1 cápsula diaria con abundante líquido',
      clasificacion: 'venta-directa',
      nuevo: false,
      destacado: true,
      descripcionCorta: 'Previene el Síndrome de Colon Irritable, evita problemas de digestión y combate la inflamación estomacal.',
      descripcionParrafos: [
        'Formulado para calmar las molestias intestinales y promover una adecuada motilidad digestiva.',
        'Ayuda a reducir la hinchazón abdominal, flatulencias y sensación de pesadez postprandial.',
        'Acción suave y natural para el equilibrio y bienestar de la flora y tránsito intestinal.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Tomar 1 cápsula al día con un vaso grande de agua.'
    },
    {
      id: 6,
      slug: 'vitamina-d3-800-ui',
      nombre: 'Vitamina D3 800 UI',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Colecalciferol (Vitamina D3)',
      categoria: 'Inmunología y Vitaminas',
      formaFarmaceutica: 'Cápsulas',
      imagenes: ['/assets/images/products/vitamina-d3.jpg'],
      composicion: 'Colecalciferol (Vitamina D3) 800 UI (20 mcg) + Excipientes c.s.p.',
      presentacion: 'Frasco con 30 cápsulas de 300 mg',
      posologia: '1 cápsula al día con abundante agua',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Nutriente esencial para la absorción de calcio, fortalecimiento óseo y refuerzo del sistema inmunológico.',
      descripcionParrafos: [
        'La vitamina D es un nutriente importante que ayuda al cuerpo a incorporar el calcio procedente de los alimentos.',
        'El calcio y la vitamina D permiten conjuntamente construir unos huesos y dientes fuertes.',
        'Desempeña un papel clave en la modulación del sistema inmunitario.'
      ],
      contenido: 'Cada frasco contiene 30 cápsulas de 300 mg',
      modoUso: 'Se recomienda tomar con abundante agua 1 cápsula al día.'
    }
  ];

  getAll(): Product[] {
    return [...this.products];
  }

  getBySlug(slug: string): Product | undefined {
    return this.products.find(p => p.slug === slug);
  }

  getCategorias(): string[] {
    return Array.from(new Set(this.products.map(p => p.categoria)));
  }

  getFormasFarmaceuticas(): string[] {
    return Array.from(new Set(this.products.map(p => p.formaFarmaceutica)));
  }

  getRelacionados(product: Product): Product[] {
    return this.products
      .filter(p => p.id !== product.id && (p.categoria === product.categoria || p.formaFarmaceutica === product.formaFarmaceutica))
      .slice(0, 3);
  }

  getDestacados(): Product[] {
    return this.products.filter(p => p.destacado);
  }
}
