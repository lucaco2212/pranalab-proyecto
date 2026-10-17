import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly products: Product[] = [
    {
      id: 1,
      slug: 'biotina-150-mcg-60-capsulas',
      nombre: 'Biotina 150 mcg x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Biotina (Vitamina B7)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/biotina-150mcg.jpg',
        '/assets/images/products/biotina-150mcg-pack.jpg'
      ],
      composicion: 'Cada cápsula contiene Celulosa Microcristalina, Biotina (150 mcg).',
      presentacion: 'Frasco con 60 cápsulas',
      posologia: '1 cápsula al día con abundante agua.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Coenzima esencial que contribuye al metabolismo normal de los macronutrientes y al mantenimiento de la piel y el cabello en condiciones óptimas. Su fórmula ayuda a fortalecer las uñas frágiles y apoya el crecimiento de fibras capilares más resistentes.',
      descripcionParrafos: [
        'Coenzima esencial que contribuye al metabolismo normal de los macronutrientes y al mantenimiento de la piel y el cabello en condiciones óptimas.',
        'Su fórmula ayuda a fortalecer las uñas frágiles y apoya el crecimiento de fibras capilares más resistentes.',
        'Ideal como complemento en rutinas de cuidado capilar y dermatológico.'
      ],
      contenido: 'Frasco x 60 cápsulas',
      modoUso: '1 cápsula al día con abundante agua.',
      vencimiento: '24 meses.',
      almacenamiento: 'Mantener en un lugar fresco y seco. Fuera del alcance de los niños.'
    },
    {
      id: 2,
      slug: 'bisglicinato-de-magnesio-400mg',
      nombre: 'Bisglicinato de Magnesio 400 mg x 60 Caps.',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Bisglicinato de Magnesio',
      categoria: 'Minerales y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/bisglicinato-de-magnesio-400mg.jpg',
        '/assets/images/products/bisglicinato-de-magnesio-400mg-pack.jpg'
      ],
      composicion: 'Bisglicinato de Magnesio (400 mg). Cápsula: gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con abundante agua, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Magnesio de alta biodisponibilidad y excelente tolerancia digestiva. Favorece la relajación muscular, el confort y un descanso nocturno reparador.',
      descripcionParrafos: [
        'El Bisglicinato de Magnesio ofrece una forma de magnesio de alta biodisponibilidad y excelente tolerancia digestiva. El magnesio es un mineral esencial que contribuye al funcionamiento normal del sistema muscular y nervioso, siendo un excelente aliado para favorecer el rendimiento físico y ayudar a disminuir la sensación de fatiga o cansancio.',
        'Soporte Muscular: Favorece la relajación muscular y ayuda a prevenir molestias o rigideces espasmódicas (calambres) asociadas al ejercicio o al desgaste diario.',
        'Equilibrio y Descanso: Promueve el equilibrio del sistema nervioso, aportando una sensación de calma y confort que contribuye a un descanso nocturno más reparador.',
        'Bienestar Femenino: Aporta un excelente apoyo complementario para el bienestar general durante las distintas etapas del ciclo menstrual.'
      ],
      contenido: 'Frasco con 60 cápsulas de 400 mg',
      modoUso: 'Consumir 1 cápsula al día con abundante agua, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz. Mantener fuera del alcance de los niños.'
    },
    {
      id: 3,
      slug: 'calciolab-calcio-vitamina-d3-800-ui',
      nombre: 'Calciolab - Calcio + Vitamina D3 800 UI x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Carbonato de Calcio + Vitamina D3 (Colecalciferol)',
      categoria: 'Salud Ósea y Muscular',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/calciolab-calcio-vitamina-d3.jpg',
        '/assets/images/products/calciolab-calcio-vitamina-d3-pack.jpg'
      ],
      composicion: 'Carbonato de Calcio, Vitamina D3 (Colecalciferol 800 UI). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día, preferentemente acompañando o después de las comidas principales con abundante agua, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Formulación sinérgica de Calcio y Vitamina D3 diseñada para el fortalecimiento óseo, dental y el correcto soporte musculoesquelético.',
      descripcionParrafos: [
        'Formulación sinérgica que combina la acción de un mineral estructural clave con una vitamina liposoluble esencial. Calcio + Vitamina D3 está diseñado para contribuir al mantenimiento normal de la estructura ósea y dental, ofreciendo un sólido soporte nutricional para la salud musculoesquelética.',
        'Fortalecimiento Óseo Íntegro: El Calcio aporta la densidad mineral necesaria para la solidez de los huesos, mientras que la Vitamina D3 favorece la correcta absorción y utilización del calcio y el fósforo en el organismo.',
        'Soporte Nutricional Especializado: Ideal para complementar las necesidades nutricionales de adultos mayores de 65 años, personas en etapa de postmenopausia o quienes requieren un refuerzo en el cuidado y mantenimiento de la masa ósea.',
        'Apoyo Muscular: Contribuye al funcionamiento normal de los músculos, ayudando a mantener la fuerza y estabilidad del sistema locomotor.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas al día con abundante agua, preferentemente junto a las comidas principales.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 4,
      slug: 'citrato-de-magnesio-400mg',
      nombre: 'Citrato de Magnesio 400 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Citrato de Magnesio',
      categoria: 'Minerales y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/citrato-de-magnesio-400mg.jpg',
        '/assets/images/products/citrato-de-magnesio-400mg-pack.jpg'
      ],
      composicion: 'Citrato de Magnesio (400 mg). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso con agua, preferentemente junto a un alimento, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Magnesio orgánico de alta solubilidad y absorción. Apoya el confort y regularidad digestiva, la relajación neuromuscular y la vitalidad diaria.',
      descripcionParrafos: [
        'El Citrato de Magnesio es una de las formas de magnesio orgánico de mayor solubilidad y absorción. Esta presentación actúa como un excelente apoyo para el bienestar digestivo y el equilibrio del sistema nervioso, ayudando a cubrir los requerimientos diarios de este mineral esencial.',
        'Soporte y Confort Intestinal: Por su propiedad osmótica suave, favorece la hidratación a nivel intestinal y apoya la regularidad del tránsito digestivo, promoviendo un alivio natural en digestiones lentas o pesadas.',
        'Equilibrio del Sistema Nervioso y Descanso: Contribuye al funcionamiento normal del sistema nervioso, favoreciendo estados de relajación física y mental que apoyan la calidad del descanso y la gestión del estrés cotidiano.',
        'Rendimiento Muscular y Vitalidad: Ayuda a mantener la función muscular adecuada, colaborando en la reducción del cansancio, la fatiga y la debilidad muscular.'
      ],
      contenido: 'Frasco con 30 cápsulas de 400 mg',
      modoUso: 'Consumir 1 cápsula al día con un vaso con agua, preferentemente junto a un alimento, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 5,
      slug: 'colageno-hidrolizado-500mg',
      nombre: 'Colágeno Hidrolizado 500 mg x 90 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Colágeno Hidrolizado',
      categoria: 'Salud Articular y Piel',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/colageno-hidrolizado-500mg.jpg',
        '/assets/images/products/colageno-hidrolizado-500mg-pack.jpg'
      ],
      composicion: 'Colágeno Hidrolizado (500 mg). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (90 cápsulas)',
      posologia: 'Consumir 3 cápsulas al día con abundante agua, preferentemente junto con los alimentos, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Péptidos de colágeno de fácil digestión y rápida absorción. Brinda soporte estructural a cartílagos, articulaciones, piel, cabello y uñas.',
      descripcionParrafos: [
        'El Colágeno Hidrolizado aporta péptidos de colágeno de fácil digestión y rápida absorción. Es una proteína fundamental que actúa como soporte estructural para los cartílagos, la piel, el cabello y las uñas, contribuyendo a mantener la flexibilidad y resistencia de los tejidos del cuerpo.',
        'Soporte Articular y Flexibilidad: Contribuye al cuidado de los cartílagos y articulaciones, favoreciendo la movilidad y aportando un valioso soporte para la estructura musculoesquelética en el día a día.',
        'Firmeza y Elasticidad Cutánea: Apoya el mantenimiento de la hidratación y firmeza de la piel, colaborando en la mejora de su textura y flexibilidad frente al paso del tiempo.',
        'Fortalecimiento Capilar y de Uñas: Nutre desde el interior la fibra del cabello y la matriz de las uñas, favoreciendo su resistencia y aspecto saludable.',
        'Bienestar Estructural: Aporta aminoácidos esenciales que colaboran en la integridad de los tejidos conectivos del organismo.'
      ],
      contenido: 'Frasco con 90 cápsulas de 500 mg',
      modoUso: 'Consumir 3 cápsulas al día con abundante agua, preferentemente junto con los alimentos, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 6,
      slug: 'colageno-hidrolizado-300mg',
      nombre: 'Colágeno Hidrolizado 300 mg x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Colágeno Hidrolizado',
      categoria: 'Salud Articular y Piel',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/colageno-hidrolizado-300mg.png',
        '/assets/images/products/colageno-hidrolizado-300mg-pack.jpg'
      ],
      composicion: 'Colágeno Hidrolizado (300 mg). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día con abundante agua, preferentemente con los alimentos, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Péptidos de colágeno de fácil absorción en presentación compacta. Ideal para complementar el cuidado diario de articulaciones, piel, cabello y uñas.',
      descripcionParrafos: [
        'El Colágeno Hidrolizado aporta aminoácidos esenciales en forma de péptidos de fácil absorción. Esta proteína es clave para el soporte estructural de los tejidos conectivos, constituyendo una excelente alternativa para complementar el cuidado diario de las articulaciones, la piel y las faneras (cabello y uñas).',
        'Movilidad y Cuidado Articular: Aporta nutrientes esenciales que contribuyen a mantener el confort y la flexibilidad de las articulaciones y cartílagos en las actividades cotidianas.',
        'Cuidado Cutáneo: Apoya la elasticidad y firmeza natural de la piel, colaborando en la preservación de su textura suave y de un aspecto saludable.',
        'Fortalecimiento Capilar y Uñas: Nutre la matriz de uñas y cabello, favoreciendo su resistencia frente a la fragilidad o el quiebre diario.',
        'Integridad Estructural: Aporta al mantenimiento general de los tejidos conectivos del cuerpo.'
      ],
      contenido: 'Frasco con 60 cápsulas de 300 mg',
      modoUso: 'Consumir 2 cápsulas al día con abundante agua, preferentemente con los alimentos, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 7,
      slug: 'colageno-plus-biotina-vitamina-c',
      nombre: 'Colágeno Plus + (Biotina - Vitamina C) x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Colágeno Hidrolizado + Vitamina C + Biotina',
      categoria: 'Salud Articular y Piel',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/colageno-plus-biotina-vitamina-c.png',
        '/assets/images/products/colageno-plus-biotina-vitamina-c-pack.jpg'
      ],
      composicion: 'Colágeno Hidrolizado, Ácido Ascórbico (Vitamina C), Biotina (Vitamina B7), Almidón de Maíz. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día con un vaso de agua, preferentemente junto a las comidas principales, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula integral con Colágeno Hidrolizado, Vitamina C y Biotina para estimular la síntesis de colágeno, iluminación cutánea y soporte articular.',
      descripcionParrafos: [
        'Colágeno Plus + es una fórmula integral altamente biodisponible que combina péptidos de colágeno hidrolizado con Vitamina C y Biotina. Esta combinación enérgica está diseñada para estimular la producción natural de colágeno y favorecer el cuidado de tejidos conectivos, articulaciones, piel, cabello y uñas.',
        'Sinergia en la Síntesis de Colágeno: La Vitamina C actúa como un cofactor indispensable que contribuye a la formación normal de colágeno en el cuerpo para el correcto funcionamiento de cartílagos, huesos, ligamentos, tendones y piel.',
        'Nutrición e Iluminación Cutánea: Apoya la elasticidad, hidratación y firmeza de la piel, colaborando en la mejora de su textura y protegiendo a las células del daño oxidativo diario.',
        'Fortalecimiento de Cabello y Uñas: La Biotina favorece el mantenimiento del cabello y la piel en condiciones normales, ayudando a fortalecer las uñas quebradizas o frágiles.',
        'Soporte Articular y Estructural: Aporta aminoácidos y nutrientes esenciales que ayudan a preservar la movilidad, flexibilidad y resistencia de la estructura musculoesquelética.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas al día con un vaso de agua, preferentemente junto a las comidas principales, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 8,
      slug: 'colon-detox-60-capsulas',
      nombre: 'COLON DETOX x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Manzanilla + Aloe Vera + Bailahuén',
      categoria: 'Salud Digestiva',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/colon-detox.jpg',
        '/assets/images/products/colon-detox-pack.jpg'
      ],
      composicion: 'Manzanilla (Matricaria chamomilla), Aloe Vera (Aloe barbadensis), Bailahuén (Haplopappus baylahuen), Almidón de maíz. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir de 1 a 2 cápsulas al día con abundante agua, preferentemente por la noche o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Formulación botánica de Manzanilla, Aloe Vera y Bailahuén para favorecer el confort digestivo, la regularidad intestinal y una sensación de ligereza abdominal.',
      descripcionParrafos: [
        'COLON DETOX es una formulación a base de extractos botánicos de uso tradicional (Manzanilla, Aloe Vera y Bailahuén), seleccionados por sus propiedades fitoterapéuticas para apoyar la función digestiva y contribuir a la sensación de ligereza abdominal.',
        'Soporte a la Digestión y Tránsito: El Bailahuén y la Manzanilla favorecen una función digestiva fluida y armónica, ayudando a atenuar la pesadez estomacal y colaborando en la regularidad del tránsito intestinal.',
        'Confort y Alivio Digestivo: Las propiedades calmantes de la Manzanilla y el Aloe Vera brindan confort en la zona abdominal, ayudando a mitigar la sensación de hinchazón y la acumulación molesta de gases intestinales.',
        'Efecto Purificante y Depurativo: El Aloe Vera apoya los procesos naturales de limpieza y eliminación de toxinas del organismo, contribuyendo al mantenimiento de la mucosa intestinal en condiciones saludables.',
        'Equilibrio de Fluidos: Colabora con los procesos depurativos naturales, ayudando a disminuir la retención de líquidos asociada a digestiones pesadas.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir de 1 a 2 cápsulas al día con abundante agua, preferentemente por la noche o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 9,
      slug: 'complejo-b-multivitaminico-30-capsulas',
      nombre: 'Complejo B Multivitamínico x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Vitaminas del Complejo B (B1, B2, B3, B5, B6, B7, B9, B12)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/complejo-b-multivitaminico.jpg',
        '/assets/images/products/complejo-b-multivitaminico-pack.jpg'
      ],
      composicion: 'Carbonato de Calcio, Almidón de maíz, Celulosa microcristalina, Tiamina Mononitrato (Vit. B1), Riboflavina (Vit. B2), Niacinamida (Vit. B3), Ácido Pantoténico (Vit. B5), Piridoxina (Vit. B6), Biotina (Vit. B7), Ácido Fólico (Vit. B9), Cianocobalamina (Vit. B12). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia en la mañana con el desayuno, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Reúne las 8 vitaminas esenciales del grupo B para activar el metabolismo energético, respaldar las defensas y apoyar la salud del sistema nervioso.',
      descripcionParrafos: [
        'El Complejo B Multivitamínico reúne las 8 vitaminas esenciales del grupo B en un solo suplemento diario. Este conjunto de nutrientes actúa de manera sinérgica para potenciar el metabolismo energético, respaldar la función inmunológica y apoyar la salud del sistema nervioso.',
        'Soporte del Sistema Inmune: Las vitaminas B6, B9 (ácido fólico) y B12 contribuyen al funcionamiento normal del sistema inmunitario y a la formación adecuada de proteínas y células implicadas en las defensas del organismo.',
        'Energía y Vitalidad Diaria: Las vitaminas B1, B2, B3 y B5 favorecen el metabolismo energético normal, ayudando a reducir la sensación de cansancio, fatiga física y agotamiento mental.',
        'Sistema Nervioso y Función Cognitiva: Contribuye al equilibrio del sistema nervioso y al mantenimiento de las funciones psicológicas normales, apoyando la concentración y el rendimiento mental diario.',
        'Cuidado de Tejidos y Mantenimiento: La presencia de Biotina (B7) y Niacina (B3) colabora con el mantenimiento celular de la piel, mucosas y tejidos corporales.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia en la mañana con el desayuno, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 10,
      slug: 'cranberries-500mg-60-capsulas',
      nombre: 'Cranberries 500 mg x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Extracto de Cranberry / Arándano Rojo (Vaccinium macrocarpon)',
      categoria: 'Salud Urinaria y Antioxidante',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/cranberries-500mg.png',
        '/assets/images/products/cranberries-500mg-pack.jpg'
      ],
      composicion: 'Extracto de Cranberry / Arándano Rojo (Vaccinium macrocarpon) 500 mg, Estearato de Magnesio. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con abundante agua, de preferencia en la mañana o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Extracto concentrado de Arándano Rojo rico en proantocianidinas (PACs) y antioxidantes, formulado para el bienestar de las vías urinarias y la protección celular.',
      descripcionParrafos: [
        'Cranberries 500 mg contiene un extracto concentrado de Arándano Rojo, reconocido por su riqueza natural en proantocianidinas (PACs), polifenoles y antioxidantes. Es un suplemento de origen natural diseñado para apoyar la salud de las vías urinarias y brindar protección celular contra el estrés oxidativo.',
        'Soporte de las Vías Urinarias: Su alto contenido de proantocianidinas ayuda a dificultar la adhesión de agentes externos en las paredes del tracto urinario, favoreciendo la salud, higiene y equilibrio de la vejiga y vías urinarias.',
        'Poder Antioxidante: Los polifenoles y flavonoides presentes en el arándano contribuyen a proteger las células frente al daño oxidativo, apoyando la vitalidad general, la salud cutánea y la nutrición capilar desde el interior.',
        'Salud Cardiovascular Complementaria: Sus compuestos fitoquímicos colaboran en la protección del sistema cardiovascular, apoyando el mantenimiento de niveles saludables de lípidos en sangre en el marco de una alimentación equilibrada.',
        'Cuidado Oral: Aporta al cuidado de la higiene bucal al dificultar la acumulación de placa en la superficie dental.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con abundante agua, de preferencia en la mañana o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 11,
      slug: 'creatina-vitamina-c-60-capsulas',
      nombre: 'Creatina + Vitamina C x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Monohidrato de Creatina + Vitamina C (Ácido Ascórbico)',
      categoria: 'Nutrición Deportiva y Energía',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/creatina-vitamina-c.png',
        '/assets/images/products/creatina-vitamina-c-pack.jpg'
      ],
      composicion: 'Monohidrato de Creatina, Ácido Ascórbico (Vitamina C). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día con abundante agua o jugo natural, preferentemente antes o después de la actividad física, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Monohidrato de Creatina potenciado con Vitamina C para optimizar el rendimiento físico, la fuerza muscular, recuperación y defensas antioxidantes.',
      descripcionParrafos: [
        'Creatina + Vitamina C combina un compuesto proteico de alta presencia en el tejido muscular con la acción antioxidante de la Vitamina C. La creatina se sintetiza naturalmente en el organismo y participa de forma directa en los procesos de disponibilidad energética (síntesis de ATP), siendo un excelente complemento para optimizar la fuerza, la resistencia física y el desarrollo muscular.',
        'Rendimiento Físico y Potencia: La creatina contribuye a mejorar la capacidad de desempeño físico durante ejercicios breves, repetitivos y de alta intensidad.',
        'Soporte a la Masa Muscular: Favorece el desarrollo y mantenimiento del tono muscular en deportistas, así como el mantenimiento de la fuerza muscular en adultos mayores.',
        'Protección Antioxidante y Recuperación: La Vitamina C contribuye a proteger las células del daño oxidativo generado por el esfuerzo físico intenso y ayuda a reducir la sensación de fatiga, apoyando los procesos de recuperación.',
        'Respaldo Inmunológico: La Vitamina C apoya el funcionamiento normal del sistema inmunitario, reforzando las defensas del organismo durante periodos de entrenamiento continuo.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas al día con abundante agua o jugo natural, preferentemente antes o después de la actividad física, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 12,
      slug: 'espirulina-500mg-60-capsulas',
      nombre: 'Espirulina 500 mg x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Espirulina en polvo (Arthrospira platensis)',
      categoria: 'Superalimentos y Nutrición',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/espirulina-500mg.png',
        '/assets/images/products/espirulina-500mg-pack.jpg'
      ],
      composicion: 'Espirulina en polvo (Arthrospira platensis) 500 mg. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día con abundante agua, preferentemente 30 minutos antes de las comidas principales o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Superalimento microalgal de alta densidad nutricional rico en proteínas, aminoácidos, hierro y antioxidantes para revitalizar la energía diaria.',
      descripcionParrafos: [
        'La Espirulina es un superalimento de origen microalgal reconocido internacionalmente por su altísima densidad nutricional. Aporta una combinación natural de proteínas de alto valor biológico, aminoácidos esenciales, vitaminas, minerales, pigmentos como la clorofila y ficocianina, convirtiéndose en un excelente complemento para revitalizar la dieta diaria.',
        'Soporte Nutricional Completo: Aporta una fuente concentrada de nutrientes y proteínas, siendo un gran complemento nutricional en dietas exigentes, deportistas o estilos de vida vegetarianos y veganos.',
        'Vitalidad y Energía: Su riqueza en hierro natural y vitaminas del complejo B favorece el rendimiento físico y mental, ayudando a disminuir la sensación de cansancio y fatiga.',
        'Salud Cardiovascular y Perfil Lipídico: Sus compuestos antioxidantes y ácidos grasos esenciales colaboran en el mantenimiento de niveles saludables de colesterol y triglicéridos en sangre, en el marco de una alimentación equilibrada.',
        'Acción Depurativa y Antioxidante: Su contenido natural de clorofila apoya los procesos de eliminación de toxinas en el organismo y ayuda a proteger las células frente al estrés oxidativo.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas al día con abundante agua, preferentemente 30 minutos antes de las comidas principales o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 13,
      slug: 'fat-burner-60-capsulas',
      nombre: 'Fat Burner x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'L-Carnitina + Guaraná + Cafeína + L-Metionina',
      categoria: 'Nutrición Deportiva y Energía',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/fat-burner.png',
        '/assets/images/products/fat-burner-pack.jpg'
      ],
      composicion: 'L-Carnitina, L-Metionina, Guaraná en polvo (Paullinia cupana), Cafeína, Carbonato de Calcio, Celulosa Microcristalina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir de 1 a 2 cápsulas al día con abundante agua, preferentemente 30 a 45 minutos antes del entrenamiento o por la mañana. No exceder 2 cápsulas al día.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula termogénica con Guaraná, Cafeína, L-Carnitina y L-Metionina para estimular el gasto calórico, energía mitocondrial y rendimiento deportivo.',
      descripcionParrafos: [
        'Fat Burner es una fórmula termogénica y metabolizadora que combina Guaraná, Cafeína, L-Carnitina y L-Metionina. Esta sinergia de ingredientes activos está diseñada para estimular el gasto energético, apoyar el metabolismo de los lípidos y aportar un impulso extra de vitalidad durante la actividad física.',
        'Soporte al Metabolismo Energético: La L-Carnitina y la L-Metionina colaboran en el transporte de ácidos grasos hacia las mitocondrias celulares, facilitando su utilización como fuente de energía en el marco de la actividad muscular.',
        'Estimulación y Vitalidad: La acción combinada de la Cafeína y el Guaraná favorece el estado de alerta y el enfoque mental, ayudando a disminuir la sensación de fatiga física y mental durante el ejercicio.',
        'Termogénesis y Gasto Calórico: Sus extractos botánicos y estimulantes ayudan a potenciar el rendimiento físico, favoreciendo el gasto calórico durante el entrenamiento.',
        'Control de Peso y Composición Corporal: Es un excelente complemento para apoyar programas de control de peso, siempre en combinación con una alimentación equilibrada y la práctica regular de actividad física.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir de 1 a 2 cápsulas al día con abundante agua, preferentemente 30 a 45 minutos antes del entrenamiento o por la mañana.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 14,
      slug: 'kalm-lab-stress-control-60-capsulas',
      nombre: 'KALM-LAB Stress Control x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'L-Triptófano + L-Glutamina + Carbonato de Magnesio',
      categoria: 'Salud Nerviosa y Descanso',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/kalm-lab.png',
        '/assets/images/products/kalm-lab-pack.jpg'
      ],
      composicion: 'L-Triptófano, L-Glutamina, Carbonato de Magnesio, Celulosa Microcristalina, Almidón de maíz. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día con abundante agua, preferentemente por la tarde o 30 a 60 minutos antes de dormir, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula con L-Triptófano, L-Glutamina y Magnesio para el manejo de la tensión diaria, equilibrio del sistema nervioso y un descanso reparador.',
      descripcionParrafos: [
        'KALM-LAB es una fórmula especializada que reúne aminoácidos esenciales y magnesio para brindar soporte al sistema nervioso, promoviendo el equilibrio emocional y favoreciendo un descanso de calidad.',
        'Soporte para el Manejo de la Tensión Diaria: La combinación de L-Triptófano y L-Glutamina apoya la síntesis natural de neurotransmisores clave (como la serotonina), favoreciendo estados de relajación, calma y bienestar mental frente a las exigencias cotidianas.',
        'Inducción al Descanso Reparador: El L-Triptófano actúa como precursor natural en los ciclos del sueño, colaborando en la conciliación del descanso nocturno para un despertar más renovado.',
        'Equilibrio del Sistema Nervioso: El Magnesio contribuye al funcionamiento normal del sistema nervioso y a la función psicológica adecuada, ayudando a reducir la fatiga mental y el cansancio.',
        'Armonía y Enfoque: Aporta nutrientes que ayudan a mantener una actitud positiva, tranquila y enfocada durante la rutina diaria.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas al día con abundante agua, preferentemente por la tarde o 30 a 60 minutos antes de dormir, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 15,
      slug: 'l-arginina-500mg-60-capsulas',
      nombre: 'L-Arginina 500 mg x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'L-Arginina',
      categoria: 'Nutrición Deportiva y Energía',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/l-arginina-500mg.jpg',
        '/assets/images/products/l-arginina-500mg-pack.png'
      ],
      composicion: 'L-Arginina 500 mg. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día con abundante agua, preferentemente antes del entrenamiento o junto a las comidas, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Aminoácido precursor del óxido nítrico para optimizar la oxigenación muscular, rendimiento físico, recuperación y salud cardiovascular.',
      descripcionParrafos: [
        'La L-Arginina es un aminoácido esencial condicional que actúa como precursor directo del óxido nítrico en el organismo. Su suplementación está diseñada para favorecer el flujo sanguíneo, optimizar el aporte de nutrientes hacia los tejidos musculares y apoyar el rendimiento en la actividad física.',
        'Soporte Vascular y Oxigenación: Como precursor de óxido nítrico, promueve la nutrición y oxigenación celular en la musculatura, colaborando con una mayor eficiencia durante el entrenamiento.',
        'Rendimiento y Tono Muscular: Apoya el desarrollo muscular y la resistencia física, siendo un gran aliado para deportistas que buscan optimizar su composición corporal junto a rutinas de ejercicio.',
        'Recuperación Muscular: Favorece los procesos naturales de depuración del metabolismo muscular (como la conversión de residuos de amonio en urea), colaborando en la recuperación pos-ejercicio y en la reducción de la fatiga.',
        'Salud Cardiovascular e Inmunológica: Contribuye al cuidado del sistema cardiovascular al apoyar el mantenimiento de una circulación fluida, mientras aporta al funcionamiento del sistema inmune.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas al día con abundante agua, preferentemente antes del entrenamiento o junto a las comidas, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 16,
      slug: 'l-carnitina-60-capsulas',
      nombre: 'L-Carnitina x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'L-Carnitina Tartrato',
      categoria: 'Nutrición Deportiva y Energía',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/l-carnitina.png',
        '/assets/images/products/l-carnitina-pack.jpg'
      ],
      composicion: 'L-Carnitina Tartrato, Carbonato de Calcio, Celulosa Microcristalina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas 30 minutos antes de realizar actividad física con abundante agua, o según indicación profesional. Porción máxima: 4 cápsulas al día.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'L-Carnitina Tartrato de rápida absorción para optimizar el transporte de ácidos grasos, energía celular, resistencia física y recuperación muscular.',
      descripcionParrafos: [
        'La L-Carnitina Tartrato es una forma de L-Carnitina de rápida absorción que actúa como un compuesto clave en el metabolismo energético celular. Su función principal es intervenir en el transporte de ácidos grasos hacia las mitocondrias, favoreciendo su uso como fuente de energía durante la actividad física.',
        'Optimización Energética: Colabora en la conversión de ácidos grasos en energía utilizable por los músculos, siendo un excelente aliado para potenciar la resistencia física durante el entrenamiento.',
        'Soporte al Rendimiento Físico: Ayuda a mejorar el desempeño deportivo y la capacidad de resistencia, facilitando un mejor aprovechamiento de las reservas energéticas del organismo.',
        'Recuperación Muscular: Favorece los procesos de recuperación muscular pos-ejercicio, ayudando a mitigar la sensación de fatiga o el desgaste muscular derivado del entrenamiento intenso.',
        'Complemento en Programas de Composición Corporal: Apoya el metabolismo de las grasas, resultando un complemento ideal en planes orientados al control de peso y definición muscular combinados con ejercicio físico regular.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas 30 minutos antes de la actividad física con abundante agua. Porción máxima recomendada: 4 cápsulas al día.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 17,
      slug: 'l-triptofano-300mg-30-capsulas',
      nombre: 'L-Triptófano 300 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'L-Triptófano',
      categoria: 'Salud Nerviosa y Descanso',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/l-triptofano-300mg.jpg',
        '/assets/images/products/l-triptofano-300mg-pack.jpg'
      ],
      composicion: 'L-Triptófano 300 mg. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente por la tarde o antes de dormir, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Aminoácido esencial precursor natural de serotonina y melatonina para apoyar el bienestar emocional, equilibrio nervioso y la conciliación del sueño.',
      descripcionParrafos: [
        'El L-Triptófano es un aminoácido esencial que el cuerpo no puede sintetizar por sí mismo y debe obtenerse a través de la dieta o suplementación. Es un nutriente indispensable que actúa como precursor metabólico en la síntesis natural de serotonina y melatonina, aportando un valioso soporte para el equilibrio del sistema nervioso y la calidad del sueño.',
        'Soporte al Bienestar Emocional: Al participar en la formación natural de serotonina, contribuye al mantenimiento de un estado de ánimo positivo, la calma y el equilibrio emocional frente a la tensión diaria.',
        'Higiene del Descanso y Ciclo del Sueño: Al ser precursor de la melatonina, favorece la regulación natural de los ritmos circadianos (sueño-vigilia), colaborando en la conciliación del sueño y apoyando un descanso nocturno más reparador.',
        'Control de la Ingesta y Saciedad: Apoya los procesos de regulación de la conducta alimentaria, colaborando en el manejo de la sensación de apetito relacionada con estados de cansancio o inquietud.',
        'Síntesis Proteica y Mantenimiento: Como aminoácido esencial, aporta a la síntesis normal de proteínas necesarias para el mantenimiento del tejido muscular y enzimático del organismo.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente por la tarde o antes de dormir, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 18,
      slug: 'magnesio-300mg-30-capsulas',
      nombre: 'Magnesio 300 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Carbonato de Magnesio + Carbonato de Calcio',
      categoria: 'Minerales y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/magnesio-300mg.jpg',
        '/assets/images/products/magnesio-300mg-pack.jpg'
      ],
      composicion: 'Carbonato de Magnesio, Carbonato de Calcio. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto a los alimentos principales, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Sinergia de sales minerales alcalinas para confort gastroduodenal, regularidad intestinal, función muscular y equilibrio del sistema nervioso.',
      descripcionParrafos: [
        'El Magnesio 300 mg combina carbonato de magnesio y calcio, dos minerales esenciales que actúan en sinergia para apoyar el metabolismo energético, brindar confort digestivo y favorecer el equilibrio del sistema neuromuscular.',
        'Soporte y Confort Gastroduodenal: Por la naturaleza alcalina de sus sales minerales, ayuda a neutralizar la sensación de acidez y pesadez estomacal, aportando un agradable confort digestivo tras las comidas.',
        'Regularidad Intestinal: Favorece una función digestiva armónica, colaborando suavemente en la regularidad del tránsito intestinal.',
        'Función Muscular y Rendimiento: Contribuye al funcionamiento normal de los músculos y al equilibrio electrolítico, resultando un excelente aliado para deportistas al ayudar a reducir la sensación de fatiga y cansancio físico.',
        'Equilibrio Nervioso y Descanso: Apoya la función psicológica normal y el equilibrio del sistema nervioso, favoreciendo estados de relajación que colaboran con un descanso nocturno reparador.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto a los alimentos principales, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 19,
      slug: 'melena-de-leon-30-capsulas',
      nombre: 'Melena de León x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Extracto de Melena de León (Hericium erinaceus)',
      categoria: 'Salud Cognitiva y Adaptógenos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/melena-de-leon.jpg',
        '/assets/images/products/melena-de-leon-pack.jpg'
      ],
      composicion: 'Extracto de Melena de León (Hericium erinaceus). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia en la mañana con el desayuno, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Hongo adaptógeno milenario rico en beta-glucanos y hericenonas para la agilidad mental, memoria, defensas inmunes y equilibrio digestivo.',
      descripcionParrafos: [
        'La Melena de León (Hericium erinaceus) es un hongo adaptógeno milenario reconocido por su perfil nutricional rico en beta-glucanos, erinacinas y hericenonas. Es un suplemento diseñado para apoyar la salud cognitiva, potenciar la agilidad mental y promover el bienestar del sistema digestivo.',
        'Soporte Cognitivo y Claridad Mental: Sus compuestos activos favorecen la función neurocognitiva, ayudando a potenciar la memoria, la concentración y la claridad mental en la rutina diaria.',
        'Respaldo del Sistema Inmunitario: Su rico aporte natural en beta-glucanos contribuye al fortalecimiento del sistema inmunológico, apoyando las defensas naturales del organismo.',
        'Protección Antioxidante: Aporta antioxidantes naturales que ayudan a proteger las células frente al daño oxidativo, favoreciendo la vitalidad general.',
        'Eje Intestino-Cerebro y Salud Digestiva: Sus polisacáridos colaboran en el mantenimiento de la mucosa gástrica e intestinal, promoviendo el equilibrio de la microbiota y una buena salud digestiva.',
        'Equilibrio Metabólico: Aporta al bienestar metabólico general, complementando dietas enfocadas en mantener niveles de glucosa saludables en el marco de un estilo de vida equilibrado.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia en la mañana con el desayuno, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 20,
      slug: 'moringa-oleifera-450mg-60-capsulas',
      nombre: 'Moringa Oleifera 450 mg x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Moringa Oleifera en polvo',
      categoria: 'Superalimentos y Nutrición',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/moringa-oleifera-450mg.png',
        '/assets/images/products/moringa-oleifera-450mg-pack.jpg'
      ],
      composicion: 'Moringa Oleifera en polvo (Moringa oleifera) 450 mg. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir de 1 a 2 cápsulas al día con abundante agua, preferentemente junto a las comidas principales, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Superalimento botánico con alta concentración de polifenoles, vitaminas y fitoquímicos para protección celular, defensas y vitalidad.',
      descripcionParrafos: [
        'La Moringa Oleifera es un superalimento botánico conocido como el "árbol de la vida", destacado por su extraordinaria concentración de micronutrientes, aminoácidos y fitoquímicos. Es un suplemento integral diseñado para brindar una potente protección antioxidante, potenciar la vitalidad diaria y nutrir el organismo desde el interior.',
        'Protección Antioxidante Integral: Su rica concentración de polifenoles, vitamina C y betacarotenos contribuye a neutralizar los radicales libres, protegiendo a las células frente al daño oxidativo y el desgaste celular diario.',
        'Soporte del Sistema Inmunitario: Sus antioxidantes y micronutrientes esenciales contribuyen al funcionamiento normal del sistema inmune, reforzando las defensas naturales del organismo.',
        'Nutrición Cutánea y Firmeza: Su aporte de Vitaminas A, C y del Complejo B favorece la nutrición e hidratación de la piel, colaborando en el mantenimiento de su elasticidad y aspecto saludable.',
        'Bienestar Cardiovascular: Sus compuestos vegetales fitoactivos apoyan el mantenimiento de la salud cardiovascular y metabólica en el marco de un estilo de vida saludable.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir de 1 a 2 cápsulas al día con abundante agua, preferentemente junto a las comidas principales, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 21,
      slug: 'multivitaminico-300mg-30-capsulas',
      nombre: 'Multivitamínico 300 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Vitaminas Liposolubles (A, D, E), Hidrosolubles (C, Complejo B) + Calcio',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/multivitaminico-300mg.png',
        '/assets/images/products/multivitaminico-300mg-pack.jpg'
      ],
      composicion: 'Carbonato de Calcio, Retinol (Vitamina A), Ácido Ascórbico (Vitamina C), Colecalciferol (Vitamina D3), Tocoferol (Vitamina E), Tiamina Mononitrato (Vit. B1), Riboflavina (Vit. B2), Niacinamida (Vit. B3), Ácido Pantoténico (Vit. B5), Piridoxina (Vit. B6), Biotina (Vit. B7), Ácido Fólico (Vit. B9), Cianocobalamina (Vit. B12), Almidón de maíz, Celulosa microcristalina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente por la mañana junto con el desayuno, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula balanceada con vitaminas A, C, D, E, complejo B y calcio para complementar la nutrición diaria, reforzar defensas y energía.',
      descripcionParrafos: [
        'El Multivitamínico reúne una selección equilibrada de vitaminas liposolubles (A, D, E), hidrosolubles (C y Complejo B) y minerales esenciales en una práctica dosis diaria. Esta fórmula está concebida para complementar los requerimientos nutricionales diarios, apoyar las defensas naturales del organismo y favorecer la vitalidad física y mental.',
        'Soporte de las Defensas e Inmunidad: Las Vitaminas A, C, D, B6, B9 y B12 contribuyen al funcionamiento normal del sistema inmunitario, reforzando la protección natural del cuerpo ante los desafíos diarios.',
        'Visión y Mantenimiento de Tejidos: La Vitamina A (Retinol) contribuye al mantenimiento de la visión en condiciones normales y al cuidado adecuado de la piel y las mucosas.',
        'Energía y Reducción del Cansancio: El complejo de vitaminas B (B1, B2, B3, B5, B6, B12) junto a la Vitamina C favorecen el metabolismo energético normal, ayudando a disminuir la sensación de fatiga y agotamiento.',
        'Protección Antioxidante Celular: Las Vitaminas C y E contribuyen a la protección de las células frente al daño oxidativo causado por los radicales libres.',
        'Salud Ósea y Estructural: La combinación de Calcio y Vitamina D3 colabora en el mantenimiento de los huesos y dientes en condiciones normales, facilitando una adecuada absorción de minerales.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente por la mañana con el desayuno, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 22,
      slug: 'minilab-multivitaminico-jarabe-125ml',
      nombre: 'Minilab Multivitamínico Jarabe 125 ml',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Multivitaminas (Vitaminas A, D3, E, C y Complejo B)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Jarabes',
      imagenes: [
        '/assets/images/products/minilab-multivitaminico-jarabe.jpg'
      ],
      composicion: 'Agua Purificada, Ácido Ascórbico (Vitamina C), Tocoferol (Vitamina E), Niacinamida (Vitamina B3), Ácido Pantoténico (Vitamina B5), Piridoxina (Vitamina B6), Riboflavina (Vitamina B2), Tiamina Mononitrato (Vitamina B1), Retinol (Vitamina A), Colecalciferol (Vitamina D3), CMC (Carboximetilcelulosa), Sucralosa, Propilparabeno, Metilparabeno, Benzoato de Sodio, Sabor Frambuesa, Sabor Miel.',
      presentacion: 'Frasco de 125 ml con tapa de seguridad',
      posologia: 'Consumir 5 ml (1 cucharadita de té) al día, preferentemente junto con el desayuno, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula líquida multivitamínica de fácil absorción con delicioso sabor frambuesa-miel para apoyar el crecimiento, defensas y vitalidad diaria.',
      descripcionParrafos: [
        'Minilab Multivitamínico Jarabe es una fórmula líquida de fácil absorción y delicioso sabor a frambuesa y miel, especialmente desarrollada para complementar la alimentación diaria en etapas de crecimiento, desarrollo activo o alta demanda física e intelectual.',
        'Soporte al Crecimiento y Desarrollo: La sinergia de Vitaminas A, D3, C y del Complejo B contribuye al desarrollo y mantenimiento adecuado de los tejidos, apoyando el crecimiento saludable en niños y adolescentes.',
        'Refuerzo del Sistema Inmunitario: Las Vitaminas A, C, D3 y B6 contribuyen al funcionamiento normal del sistema inmune, ayudando a mantener las defensas naturales del organismo.',
        'Vitalidad y Rendimiento Diario: El grupo de Vitaminas B (B1, B2, B3, B5, B6) y Vitamina C favorecen el metabolismo energético normal, colaborando en la reducción del cansancio físico y mental en épocas de actividad escolar o física exigente.',
        'Protección Antioxidante y Cuidado de la Visión: La Vitamina A contribuye al mantenimiento de la visión en condiciones normales, mientras que las Vitaminas C y E ayudan a proteger las células frente al daño oxidativo.',
        'Complemento Nutricional Práctico: Aporta una alternativa líquida idónea para apoyar la ingesta nutricional en personas con requerimientos vitamínicos aumentados o con preferencia por formatos de fácil deglución.'
      ],
      contenido: 'Frasco de 125 ml',
      modoUso: 'Consumir 5 ml (1 cucharadita de té) al día, preferentemente junto con el desayuno, o según indicación profesional.',
      vencimiento: '18 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 23,
      slug: 'multivitaminico-forte-300mg-30-capsulas',
      nombre: 'Multivitamínico Forte 300 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Vitaminas + Minerales + Probióticos (3 Cepas) + Prebióticos (FOS)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/multivitaminico-forte-300mg.png',
        '/assets/images/products/multivitaminico-forte-300mg-pack.jpg'
      ],
      composicion: 'Fosfato Monopotásico, Carbonato de Calcio, Ácido Ascórbico (Vitamina C), Fosfato Tricálcico, Sulfato Ferroso, Vitamina A Acetato, Óxido de Magnesio, Sulfato de Manganeso, Sulfato de Zinc, Pantotenato de Calcio (Vit. B5), Riboflavina (Vit. B2), Niacinamida (Vit. B3), Mononitrato de Tiamina (Vit. B1), Clorhidrato de Piridoxina (Vit. B6), Cianocobalamina (Vit. B12), Bifidobacterium animalis lactis, Lactobacillus acidophilus, Lactobacillus casei, Fructo-oligosacáridos (FOS), Almidón de maíz, Maltodextrina, Estearato de Magnesio, Dióxido de Silicio. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con abundante agua, preferentemente por la mañana con el desayuno, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula integral de alta complejidad con vitaminas, minerales esenciales, 3 cepas probióticas y prebióticos (FOS) para microbiota, defensas y vitalidad.',
      descripcionParrafos: [
        'Multivitamínico Forte es una fórmula integral de alta complejidad que combina un amplio espectro de vitaminas, minerales esenciales, cepas probióticas y fibra prebiótica (FOS). Está diseñada para brindar un soporte nutricional avanzado, potenciar la función inmunológica, apoyar el rendimiento físico-mental y favorecer el equilibrio de la microbiota intestinal.',
        'Sostenimiento de la Microbiota e Inmunidad Intestinal: La combinación de probióticos y FOS (prebióticos) colabora en el mantenimiento de la flora intestinal en condiciones saludables, favoreciendo la digestión de nutrientes y reforzando las defensas naturales del organismo desde el intestino.',
        'Energía, Vitalidad y Formación Sanguínea: El complejo de Vitaminas B, junto al Hierro y Manganeso, favorecen el metabolismo energético normal y la formación adecuada de glóbulos rojos, ayudando a reducir la sensación de fatiga y cansancio.',
        'Refuerzo Inmunológico Avanzado: Las Vitaminas A y C, en conjunto con minerales como el Zinc, Hierro y Manganeso, contribuyen al funcionamiento normal del sistema inmunitario y a la protección celular frente al daño oxidativo.',
        'Rendimiento Cognitivo y Función Nerviosa: El Zinc y el Magnesio apoyan la función cognitiva, la síntesis de proteínas y el equilibrio del sistema nervioso, favoreciendo la concentración y la claridad mental.',
        'Salud Óssea y Función Muscular: La sinergia de Calcio, Fósforo, Magnesio y Potasio colabora con el mantenimiento de huesos fuertes y contribuye al funcionamiento normal de los músculos y al equilibrio electrolítico.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con abundante agua, preferentemente por la mañana con el desayuno, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 24,
      slug: 'omega-3-30-capsulas',
      nombre: 'Omega 3 x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Aceite de Pescado Concentrado (EPA y DHA)',
      categoria: 'Salud Cardiovascular y Bienestar',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/omega-3-30-capsulas.png',
        '/assets/images/products/omega-3-30-capsulas-pack.jpg'
      ],
      composicion: 'Aceite de Pescado concentrado (fuente natural de ácidos grasos EPA y DHA). Cápsula blanda: Gelatina, Glicerina, Agua purificada.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto a una comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Ácidos grasos esenciales EPA y DHA derivados de aceite de pescado refinado para el cuidado cardiovascular, función cerebral y visión.',
      descripcionParrafos: [
        'Omega 3 aporta una fuente concentrada de ácidos grasos esenciales EPA (Ácido Eicosapentaenoico) y DHA (Ácido Docosahexaenoico) obtenidos de aceite de pescado refinado. Estos nutrientes esenciales no son sintetizados de forma eficiente por el organismo, por lo que su consumo suplementario es ideal para respaldar la salud cardiovascular, cerebral y la visión.',
        'Salud Cardiovascular: Los ácidos grasos EPA y DHA contribuyen al funcionamiento normal del corazón, apoyando la salud del sistema circulatorio.',
        'Soporte de Lipídico y Circulatorio: Su consumo habitual dentro de una dieta balanceada colabora en el mantenimiento de niveles saludables de triglicéridos en sangre, promoviendo un buen flujo sanguíneo.',
        'Función Cerebral y Cognitiva: El DHA contribuye al mantenimiento de la función cerebral normal, favoreciendo la agilidad mental y la concentración.',
        'Cuidado de la Visión: El aporte de DHA ayuda a mantener la visión en condiciones normales, protegiendo la salud ocular frente al desgaste diario.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto a una comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 25,
      slug: 'osteolab-plus-30-capsulas',
      nombre: 'Osteolab Plus x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Calcio, Magnesio, Potasio, Zinc + Vitaminas A, C, D3, B6, B12',
      categoria: 'Salud Ósea y Articular',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/osteolab-plus-30-capsulas.jpg',
        '/assets/images/products/osteolab-plus-30-capsulas-pack.jpg'
      ],
      composicion: 'Carbonato de Calcio, Óxido de Magnesio, Citrato de Potasio, Zinc, Ácido Ascórbico (Vitamina C), Retinol (Vitamina A), Piridoxina (Vitamina B6), Colecalciferol (Vitamina D3), Cianocobalamina (Vitamina B12), Celulosa Microcristalina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia junto a una comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula avanzada con Calcio, Magnesio, Potasio, Zinc y Vitaminas A, C, D3, B6 y B12 para soporte óseo, articular y muscular.',
      descripcionParrafos: [
        'Osteolab Plus es una fórmula avanzada que combina minerales estructurales clave (Calcio, Magnesio, Potasio y Zinc) con un complejo vitamínico sinérgico (Vitaminas A, C, D3, B6 y B12). Está concebida para dar un soporte integral al sistema óseo y muscular, favoreciendo la movilidad y flexibilidad articular.',
        'Fortalecimiento y Mantenimiento Óseo: La combinación de Calcio, Magnesio y Vitamina D3 contribuye al mantenimiento de los huesos en condiciones normales y a la correcta fijación y absorción del calcio.',
        'Soporte de Cartílagos y Articulaciones: La Vitamina C contribuye a la formación normal de colágeno para el funcionamiento adecuado de los cartílagos y huesos, favoreciendo la flexibilidad y el confort articular.',
        'Función Muscular y Movilidad: El Potasio y el Magnesio contribuyen al funcionamiento normal de los músculos, apoyando la movilidad y previniendo la rigidez muscular.',
        'Protección Antioxidante y Regeneración: El Zinc y las Vitaminas A, B6 y B12 contribuyen a la protección de las células frente al daño oxidativo y al mantenimiento de tejidos conectivos saludables.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia junto a una comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 26,
      slug: 'aceite-pepa-calabaza-30-capsulas',
      nombre: 'Aceite de Pepa de Calabaza x 30 cápsulas blandas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Aceite de Pepa de Calabaza (Cucurbita pepo)',
      categoria: 'Salud Prostática y Urinaria',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/aceite-pepa-calabaza-30-capsulas.png',
        '/assets/images/products/aceite-pepa-calabaza-30-capsulas-pack.jpg'
      ],
      composicion: 'Aceite de Pepa de Calabaza (Cucurbita pepo). Cápsula blanda: Gelatina, Glicerina, Agua purificada.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas blandas)',
      posologia: 'Consumir 1 cápsula blanda al día con un vaso de agua, preferentemente junto a una comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Extracto lipídico rico en fitoesteroles, ácidos grasos esenciales y vitamina E para el confort urinario, salud prostática y protección celular.',
      descripcionParrafos: [
        'El Aceite de Pepa de Calabaza es un extracto lipídico natural caracterizado por su alto contenido en ácidos grasos esenciales (como el ácido linoleico y oleico), fitoesteroles, carotenoides y vitamina E. Este perfil bioactivo está diseñado para brindar un soporte integral al confort urinario y la salud prostática, además de ofrecer una potente protección celular.',
        'Soporte de la Salud Prostática y Urinaria: Sus fitoesteroles y fitoquímicos naturales contribuyen al mantenimiento del funcionamiento normal de la próstata, favoreciendo el flujo y el confort del tracto urinario inferior.',
        'Protección Antioxidante y Celular: Su riqueza en carotenoides y Vitamina E ayuda a proteger las células frente al daño oxidativo provocado por los radicales libres, apoyando el bienestar de las membranas celulares.',
        'Perfil Lipídico Saludable: Aporta ácidos grasos esenciales insaturados que colaboran con el mantenimiento del equilibrio lipídico del organismo dentro de un estilo de vida saludable.'
      ],
      contenido: 'Frasco con 30 cápsulas blandas',
      modoUso: 'Consumir 1 cápsula blanda al día con un vaso de agua, preferentemente junto a una comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 27,
      slug: 'picolinato-de-cromo-30-capsulas',
      nombre: 'Picolinato de Cromo 200 mcg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Picolinato de Cromo 200 mcg',
      categoria: 'Metabolismo y Control de Peso',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/picolinato-de-cromo-30-capsulas.jpg',
        '/assets/images/products/picolinato-de-cromo-30-capsulas-pack.jpg'
      ],
      composicion: 'Picolinato de Cromo, Celulosa Microcristalina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto a la comida principal o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Mineral traza de alta biodisponibilidad para optimizar el metabolismo de carbohidratos, regular la glucosa y modular el apetito.',
      descripcionParrafos: [
        'El Picolinato de Cromo es un mineral traza esencial unido a ácido picolínico para optimizar su absorción y biodisponibilidad en el organismo. Es un suplemento clave para apoyar el metabolismo de los carbohidratos, grasas y proteínas, contribuyendo al control natural de los niveles de glucosa en sangre.',
        'Regulación Fisiológica de la Glucosa: El Cromo contribuye a mantener niveles normales de glucosa en sangre, favoreciendo la acción adecuada de la insulina en los procesos metabólicos.',
        'Metabolismo de Macronutrientes: Contribuye al metabolismo normal de los carbohidratos, lípidos y proteínas, optimizando el uso de los nutrientes consumidos en la dieta diaria.',
        'Soporte en el Control del Apetito: Colabora en la modulación de los antojos por carbohidratos y azúcares, siendo un excelente aliado para gestionar la sensación de apetito entre comidas.',
        'Complemento en Programas de Control de Peso: Apoya la gestión del peso corporal y la composición corporal, siempre en el marco de un plan de alimentación equilibrado y la práctica regular de actividad física.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto a la comida principal o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 28,
      slug: 'potasio-500mg-30-capsulas',
      nombre: 'Potasio 500 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Citrato de Potasio 500 mg',
      categoria: 'Minerales y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/potasio-500mg-30-capsulas.jpg',
        '/assets/images/products/potasio-500mg-30-capsulas-pack.jpg'
      ],
      composicion: 'Citrato de Potasio, Celulosa Microcristalina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto a una comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Sal mineral altamente biodisponible para apoyar el equilibrio electrolítico, la función neuromuscular, la salud urinaria y la presión arterial.',
      descripcionParrafos: [
        'El Citrato de Potasio es una sal mineral altamente biodisponible que aporta potasio de fácil absorción. Este mineral esencial es fundamental para apoyar el equilibrio electrolítico, favorecer la función adecuada del sistema nervioso y muscular, y colaborar en la salud del sistema urinario.',
        'Soporte de la Salud Urinaria y Equilibrio Ácido-Base: Su aporte en forma de citrato colabora en la modulación del pH urinario y el equilibrio electrolítico, favoreciendo un entorno urinario saludable.',
        'Función Muscular y Cardiovascular: El Potasio contribuye al funcionamiento normal de los músculos, ayudando a prevenir calambres y a mantener el tono muscular adecuado, además de apoyar la función cardíaca.',
        'Sistema Nervioso: Contribuye al funcionamiento normal del sistema nervioso, facilitando la correcta transmisión de los impulsos nerviosos en todo el organismo.',
        'Mantenimiento de la Presión Arterial: Contribuye al mantenimiento de la presión arterial en niveles normales en el marco de un estilo de vida saludable y equilibrado.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto a una comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 29,
      slug: 'probiolab-defense-forte-30-capsulas',
      nombre: 'Probiolab Defense Forte x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: '4 Cepas Lactobacillus Microencapsuladas (25 Mil Millones UFC)',
      categoria: 'Cuidado Digestivo',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/probiolab-defense-forte-30-capsulas.png',
        '/assets/images/products/probiolab-defense-forte-30-capsulas-pack.jpg'
      ],
      composicion: 'Maltodextrina, Lactobacillus johnsonii, Lactobacillus casei, Lactobacillus reuteri, Lactobacillus rhamnosus. Cápsula: Gelatina. Concentración: Mínimo 6,25 x 10⁹ UFC por cepa / 2,5 x 10¹⁰ UFC totales por cápsula.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia en la mañana antes del desayuno o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Formulación probiótica de 25 mil millones de UFC con 4 cepas de Lactobacillus microencapsuladas para la inmunidad y microbiota.',
      descripcionParrafos: [
        'Probiolab Defense Forte es una formulación probiótica de alta concentración que aporta un complejo sinérgico de 4 cepas especializadas de Lactobacillus microencapsuladas (L. johnsonii, L. casei, L. reuteri y L. rhamnosus). Su objetivo principal es favorecer el equilibrio de la microbiota intestinal y reforzar las defensas naturales del organismo desde el sistema digestivo.',
        'Refuerzo del Sistema Inmunitario Intestinal: Las cepas seleccionadas contribuyen al fortalecimiento de la barrera intestinal, apoyando la respuesta inmunológica natural del organismo ante agresores externos.',
        'Equilibrio de la Flora Intestinal: Su alta concentración (25 mil millones de UFC) colabora en la colonización y regeneración de la microbiota, restableciendo la diversidad bacteriana saludable.',
        'Confort y Salud Digestiva: Favorece los procesos digestivos y la absorción de nutrientes, colaborando en la reducción de molestias digestivas ocasionales.',
        'Protección Tecnológica: Las cepas microencapsuladas garantizan una mayor resistencia al paso por el pH gástrico, asegurando que los microorganismos lleguen viables al intestino.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia en la mañana antes del desayuno o según indicación profesional.',
      vencimiento: '18 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 30,
      slug: 'probiolab-digestive-30-capsulas',
      nombre: 'Probiolab Digestive x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: '7 Cepas Probióticas Microencapsuladas (25 Mil Millones UFC) + Inulina Prebiótica',
      categoria: 'Cuidado Digestivo',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/probiolab-digestive-30-capsulas.png',
        '/assets/images/products/probiolab-digestive-30-capsulas-pack.jpg'
      ],
      composicion: 'Inulina (Fibra Prebiótica), Lactobacillus casei, Lactobacillus rhamnosus, Lactobacillus johnsonii, Lactobacillus bulgaricus, Bifidobacterium lactis, Bifidobacterium longum, Streptococcus thermophilus. Cápsula: Gelatina. Concentración: Mínimo 2,5 x 10⁹ UFC por cepa / 2,5 x 10¹⁰ UFC totales por cápsula.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente por la mañana en ayunas o antes de la comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Simbiótico avanzado de 25 mil millones de UFC con 7 cepas microencapsuladas e inulina prebiótica para el confort digestivo y regularidad.',
      descripcionParrafos: [
        'Probiolab Digestive es un suplemento simbiótico avanzado de alta concentración que combina 7 cepas de microorganismos probióticos microencapsulados con Inulina, una fibra prebiótica de origen natural. Esta sinergia aporta el sustrato ideal para nutrir la flora intestinal, promoviendo el bienestar digestivo, el tránsito intestinal armónico y el equilibrio de la microbiota.',
        'Soporte y Confort Digestivo: La acción conjunta de sus 7 cepas probióticas contribuye al mantenimiento de la función digestiva normal, colaborando en la reducción de pesadez y molestias digestivas ocasionales.',
        'Efecto Simbiótico (Probióticos + Prebióticos): La inclusión de Inulina actúa como alimento selectivo para las bacterias benéficas, favoreciendo su supervivencia, colonización y proliferación en el tracto gastrointestinal.',
        'Equilibrio de la Microbiota Intestinal: Su alta concentración (25 mil millones de UFC por cápsula) colabora en el restablecimiento y diversidad de la flora intestinal, apoyando la salud de la mucosa gastrointestinal.',
        'Regularidad del Tránsito Intestinal: Favorece la modulación del tránsito intestinal, promoviendo un ritmo evacuatorio regular y confortable.',
        'Tecnología de Microencapsulado: Protege a los microorganismos frente a la acidez gástrica, asegurando su llegada viable al intestino para una efectividad óptima.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente por la mañana en ayunas o antes de la comida principal, o según indicación profesional.',
      vencimiento: '18 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 31,
      slug: 'probiolab-woman-30-capsulas',
      nombre: 'Probiolab Woman x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: '3 Cepas Probióticas Especializadas (25 Mil Millones UFC) + Maqui y Arándano',
      categoria: 'Salud Femenina y Probióticos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/probiolab-woman-30-capsulas.png',
        '/assets/images/products/probiolab-woman-30-capsulas-pack.jpg'
      ],
      composicion: 'Fruto de Arándano en polvo, Fruto de Maqui en polvo, Lactobacillus plantarum, Lactobacillus crispatus, Lactobacillus gasseri, Maltodextrina de maíz. Cápsula: Gelatina. Concentración: Mínimo 8,3 x 10⁹ UFC por cepa / 2,5 x 10¹⁰ UFC totales por cápsula.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente por la mañana en ayunas o antes de la comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula probiótica femenina de 25 mil millones de UFC con L. crispatus, L. gasseri, maqui y arándano para flora íntima y tracto urinario.',
      descripcionParrafos: [
        'Probiolab Woman es una fórmula avanzada diseñada específicamente para el bienestar integral femenino. Combina una elevada concentración de 3 cepas probióticas especializadas (L. plantarum, L. crispatus y L. gasseri) con los superalimentos autóctonos Arándano y Maqui, aportando un soporte nutricional integral para el equilibrio de la microbiota vaginal, la salud del tracto urinario y la protección antioxidante.',
        'Equilibrio de la Flora Íntima y Vaginal: Las cepas L. crispatus y L. gasseri contribuyen al mantenimiento de la microbiota vaginal saludable, colaborando en la conservación de un pH idóneo que apoya las defensas naturales de la zona íntima.',
        'Soporte del Tracto Urinario: La sinergia entre las bacterias benéficas y el extracto natural de Arándano colabora en el confort del sistema urinario, favoreciendo un entorno desfavorable para la adhesión de agentes externos.',
        'Protección Antioxidante con Maqui y Arándano: Su contenido de polifenoles y antocianinas apoya la protección celular frente al daño oxidativo, favoreciendo la vitalidad y el cuidado de los tejidos.',
        'Salud Digestiva e Inmunológica: Favorece el equilibrio de la microbiota intestinal, apoyando la digestión y el fortalecimiento del sistema inmunitario de forma integral.',
        'Tecnología de Microencapsulado: Garantiza la estabilidad y máxima viabilidad de las cepas probióticas al atravesar la barrera gástrica.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente por la mañana en ayunas o antes de la comida principal, o según indicación profesional.',
      vencimiento: '18 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 32,
      slug: 'yogurtlab-cultivo-probiotico-5-sachets',
      nombre: 'Yogurtlab – Cultivo Probiótico para Elaboración de Yogurt x 5 sachets',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: '4 Cepas Probióticas Microencapsuladas (1x10⁹ UFC/g)',
      categoria: 'Cuidado Digestivo',
      formaFarmaceutica: 'Sachets',
      imagenes: [
        '/assets/images/products/yogurlab-probioticos-5-sachets.png',
        '/assets/images/products/yogurlab-probioticos-5-sachets-pack.jpg'
      ],
      composicion: 'Maltodextrina de maíz, Mezcla de microorganismos probióticos (Lactobacillus johnsonii, Lactobacillus casei, Lactobacillus bulgaricus, Streptococcus thermophilus). Concentración Probiótica: Potencia mínima de 1 x 10⁹ UFC/g (1 mil millones de UFC por gramo).',
      presentacion: 'Caja con 5 sachets individuales de 1 g (Rinde 5 Litros)',
      posologia: '1 sachet para elaborar 1 litro de leche animal o 500 ml de bebida vegetal.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fermento probiótico en polvo con 4 cepas microencapsuladas para preparar yogurt casero natural, fresco y altamente nutritivo. Rinde hasta 5 litros.',
      descripcionParrafos: [
        'Yogurtlab es un fermento probiótico en polvo diseñado para elaborar en casa un yogurt natural, fresco y altamente nutritivo. Su combinación de cepas fermentativas activas y bacterias probióticas microencapsuladas permite obtener una bebida o crema fermentada que apoya la salud digestiva, colabora en el equilibrio de la microbiota y refuerza el sistema inmunitario.',
        'Elaboración Natural y Personalizada: Permite preparar yogurt fresco sin conservantes, colorantes ni azúcares añadidos, adaptándolo al tipo de leche de su preferencia (entera, descremada o semidescremada) o bebida vegetal (soja, almendra, avena, entre otras).',
        'Soporte Digestivo y Flora Intestinal: La acción de sus bacterias lácticas y probióticas contribuye a la salud del tracto gastrointestinal, favoreciendo una mejor digestión de la lactosa y un óptimo confort digestivo.',
        'Refuerzo Inmunológico: Su aporte continuo de microorganismos benéficos colabora en la protección de la mucosa intestinal y apoya el funcionamiento normal del sistema inmune.',
        'Alta Concentración de Cultivos Activos: Aporta un perfil concentrado de cepas viables microencapsuladas (potencia mínima de 1 x 10⁹ UFC/g) que aseguran una fermentación óptima y una alta densidad probiótica por porción.',
        'Apto para Toda la Familia: Alternativa versátil y nutritiva idónea para incorporar microorganismos benéficos en la alimentación diaria de niños y adultos.'
      ],
      contenido: 'Caja con 5 sachets de 1 g (Contenido neto: 5 g - Rinde 5 L)',
      modoUso: '1 sachet para elaborar 1 litro de leche de origen animal o 500 ml de bebida vegetal. Mezclar el contenido del sachet con la leche tibia (aprox. 40°C - 45°C) e incubar de 8 a 12 horas en yogurtera, termo o recipiente cubierto en un ambiente cálido.',
      vencimiento: '18 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 33,
      slug: 'vitamina-b12-30-capsulas',
      nombre: 'Vitamina B12 x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Cianocobalamina (Vitamina B12)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/vitamina-b12-30-capsulas.jpg',
        '/assets/images/products/vitamina-b12-30-capsulas-pack.jpg'
      ],
      composicion: 'Cianocobalamina (Vitamina B12), Almidón de Maíz, Celulosa Microcristalina, Maltodextrina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia junto a una comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Micronutriente hidrosoluble esencial para la formación de glóbulos rojos, el metabolismo energético normal, la reducción del cansancio y la salud del sistema nervioso.',
      descripcionParrafos: [
        'La Vitamina B12 (Cianocobalamina) es un micronutriente hidrosoluble fundamental para el funcionamiento adecuado de múltiples sistemas del organismo. Su suplementación diaria es clave para apoyar la formación de glóbulos rojos, optimizar el rendimiento energético y mantener la salud del sistema nervioso, siendo indispensable en dietas con bajo o nulo aporte de origen animal (vegetarianas/veganas).',
        'Formación de Glóbulos Rojos: Contribuye a la formación normal de glóbulos rojos, previniendo alteraciones hematológicas asociadas a su déficit y apoyando el transporte eficiente de oxígeno en la sangre.',
        'Metabolismo Energético y Reducción de la Fatiga: Favorece el metabolismo energético normal, ayudando a disminuir la sensación de cansancio, fatiga y agotamiento en la rutina diaria.',
        'Función Nerviosa y Psicológica: Contribuye al funcionamiento normal del sistema nervioso y a la función psicológica normal, favoreciendo la concentración y el equilibrio neurológico.',
        'Proceso de División Celular y Sistema Inmune: Participa en el proceso de división celular y contribuye al funcionamiento normal del sistema inmunitario.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, de preferencia junto a una comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 34,
      slug: 'vitamina-c-zinc-60-capsulas',
      nombre: 'Vitamina C + Zinc x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Ácido Ascórbico (Vitamina C 500 mg) + Zinc (20 mg)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/vitamina-c-zinc-60-capsulas.png',
        '/assets/images/products/vitamina-c-zinc-60-capsulas-pack.jpg'
      ],
      composicion: 'Ácido Ascórbico (Vitamina C 500 mg), Sulfato de Zinc / Gluconato de Zinc (20 mg de Zinc elemental). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día con abundante agua, de preferencia acompañadas de una comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula sinérgica de Ácido Ascórbico y Zinc para reforzar las defensas inmunitarias, brindar potente protección antioxidante y estimular la síntesis de colágeno.',
      descripcionParrafos: [
        'Vitamina C + Zinc es un suplemento alimenticio de acción sinérgica que combina una alta concentración de Ácido Ascórbico con el mineral traza Zinc. Esta potente alianza nutricional está concebida para reforzar la respuesta inmunológica, proteger las células frente al daño oxidativo y estimular la firmeza y salud de la piel.',
        'Refuerzo Inmunológico de Doble Acción: La Vitamina C y el Zinc contribuyen al funcionamiento normal del sistema inmunitario, apoyando las defensas naturales del organismo para responder eficazmente ante las agresiones ambientales y los cambios de estación.',
        'Potente Protección Antioxidante Celular: La acción combinada de la Vitamina C y el Zinc contribuye a la protección de las células frente al daño oxidativo provocado por los radicales libres, retardando los efectos del estrés celular y el envejecimiento prematuro de los tejidos.',
        'Síntesis de Colágeno y Salud Cutánea: La Vitamina C contribuye a la formación normal de colágeno para el funcionamiento adecuado de la piel, cartílagos y vasos sanguíneos, favoreciendo la elasticidad, firmeza y capacidad natural de reparación de la piel.',
        'Metabolismo y Energía: Favorecen el metabolismo energético normal y disminuyen el cansancio y la fatiga, además de respaldar la síntesis normal de proteínas y el mantenimiento de las barreras mucosas.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas al día con abundante agua, de preferencia acompañadas de una comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 35,
      slug: 'vitamina-c-500mg-30-capsulas',
      nombre: 'Vitamina C 500 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Ácido Ascórbico (Vitamina C 500 mg)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/vitamina-c-500mg-30-capsulas.png',
        '/assets/images/products/vitamina-c-500mg-30-capsulas-pack.jpg'
      ],
      composicion: 'Ácido Ascórbico (Vitamina C 500 mg). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto al desayuno o comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Nutriente esencial en dosis concentrada de 500 mg para reforzar las defensas inmunes, estimular la síntesis de colágeno, mejorar la absorción de hierro y brindar protección antioxidante.',
      descripcionParrafos: [
        'La Vitamina C (Ácido Ascórbico) es un nutriente hidrosoluble e hidrófilo esencial que el cuerpo no sintetiza de manera endógena. Aporta una dosis concentrada de 500 mg por cápsula, concebida para reforzar la respuesta defensiva del organismo, potenciar la absorción de hierro, apoyar la producción natural de colágeno y brindar una potente protección antioxidante.',
        'Soporte de las Defensas Naturales: La Vitamina C contribuye al funcionamiento normal del sistema inmunitario, apoyando las barreras de defensa durante y después de la actividad física o ante variaciones climáticas.',
        'Optimizador de la Absorción de Hierro: Mejora la absorción del hierro no hemo procedente de los alimentos, colaborando en el mantenimiento de niveles sanguíneos óptimos de este mineral vital.',
        'Síntesis de Colágeno y Tejidos Conectivos: Contribuye a la formación normal de colágeno para el funcionamiento adecuado de los vasos sanguíneos, huesos, cartílagos, encías y piel, favoreciendo el mantenimiento de las estructuras corporales.',
        'Protección Antioxidante y Energía: Contribuye a la protección de las células frente al daño oxidativo provocado por el estrés ambiental y los radicales libres, además de favorecer el metabolismo energético normal y la reducción del cansancio.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto al desayuno o comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 36,
      slug: 'vitamina-c-500mg-60-capsulas',
      nombre: 'Vitamina C 500 mg x 60 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Ácido Ascórbico (Vitamina C 500 mg)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/vitamina-c-500mg-60-capsulas.png',
        '/assets/images/products/vitamina-c-500mg-60-capsulas-pack.jpg'
      ],
      composicion: 'Ácido Ascórbico (Vitamina C 500 mg). Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (60 cápsulas)',
      posologia: 'Consumir 2 cápsulas al día con abundante agua, preferentemente distribuidas junto con las comidas principales, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Aporte continuo y concentrado de Vitamina C para reforzar las defensas inmunitarias, optimizar la absorción de hierro, apoyar la formación de colágeno y reducir el cansancio.',
      descripcionParrafos: [
        'La Vitamina C (Ácido Ascórbico) es un nutriente esencial que actúa como un potente agente antioxidante en el organismo. Esta presentación de 60 cápsulas permite un aporte continuo y concentrado diseñado para reforzar el sistema inmunitario, optimizar la absorción de hierro, estimular la síntesis natural de colágeno y favorecer la protección antioxidante frente al desgaste diario.',
        'Refuerzo del Sistema Inmunitario: La Vitamina C contribuye al funcionamiento normal del sistema inmunitario, apoyando las defensas naturales del organismo frente a cambios de estación y agentes externos.',
        'Optimización de la Absorción de Hierro: Mejora la absorción del hierro de origen vegetal (no hemo) presente en la dieta, apoyando el mantenimiento de niveles saludables de este mineral esencial.',
        'Formación de Colágeno y Salud Articular/Cutánea: Contribuye a la formación normal de colágeno para el funcionamiento adecuado de los cartílagos, huesos, vasos sanguíneos, encías y piel, favoreciendo la firmeza de los tejidos conectivos.',
        'Protección Antioxidante y Reducción de la Fatiga: Contribuye a la protección de las células frente al daño oxidativo y favorece el metabolismo energético normal, ayudando a reducir el cansancio y el agotamiento físico.'
      ],
      contenido: 'Frasco con 60 cápsulas',
      modoUso: 'Consumir 2 cápsulas al día con abundante agua, preferentemente distribuidas junto con las comidas principales, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 37,
      slug: 'vitamina-c-1000mg-30-capsulas',
      nombre: 'Vitamina C 1000 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Ácido Ascórbico (Vitamina C 1000 mg)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/vitamina-c-1000mg-30-capsulas.png',
        '/assets/images/products/vitamina-c-1000mg-30-capsulas-pack.jpg'
      ],
      composicion: 'Ácido Ascórbico (Vitamina C) 1000 mg. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con abundante agua, preferentemente por la mañana junto con el desayuno, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Fórmula intensiva de alta potencia con 1000 mg de Vitamina C por cápsula para un soporte inmune reforzado, máxima acción antioxidante y síntesis de colágeno.',
      descripcionParrafos: [
        'La Vitamina C (Ácido Ascórbico) en alta concentración de 1000 mg aporta una dosis intensiva de este nutriente esencial hidrosoluble. Su formato de alta potencia está diseñado para potenciar la respuesta inmunológica, maximizar la protección antioxidante frente al estrés celular, mejorar la absorción de hierro y respaldar la producción de colágeno en los tejidos corporales.',
        'Soporte Intensivo de la Inmunidad: La Vitamina C contribuye al funcionamiento normal del sistema inmunitario, reforzando las defensas naturales del cuerpo ante exigencias físicas, cambios de estación o factores ambientales.',
        'Potente Acción Antioxidante: Contribuye a la protección de las células frente al daño oxidativo generado por los radicales libres, ayudando a frenar el envejecimiento y desgaste celular prematuro.',
        'Optimización de la Absorción de Hierro: Mejora la absorción del hierro de origen vegetal en el tracto digestivo, apoyando el mantenimiento de niveles sanguíneos adecuados de este mineral.',
        'Síntesis de Colágeno y Salud Articular y Cutánea: Contribuye a la formación normal de colágeno para el funcionamiento adecuado de cartílagos, huesos, vasos sanguíneos, encías y piel, favoreciendo la firmeza de los tejidos conectivos.',
        'Reducción de la Fatiga y Metabolismo: Favorece el metabolismo energético normal, colaborando activamente en la disminución del cansancio y la fatiga diaria.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con abundante agua, preferentemente por la mañana junto con el desayuno, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 38,
      slug: 'vitamina-d3-800ui-30-capsulas',
      nombre: 'Vitamina D3 800 UI x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Colecalciferol (Vitamina D3 800 UI / 20 µg)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/vitamina-d3-800ui-30-capsulas.jpg',
        '/assets/images/products/vitamina-d3-800ui-30-capsulas-pack.jpg'
      ],
      composicion: 'Colecalciferol (Vitamina D3 800 UI - 20 µg), Celulosa Microcristalina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto con una comida que contenga materia grasa para optimizar su absorción, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Forma activa y altamente biodisponible de Vitamina D3 para optimizar la absorción de calcio y fósforo, fortalecer la masa ósea y respaldar la respuesta inmunitaria.',
      descripcionParrafos: [
        'La Vitamina D3 (Colecalciferol) es la forma biológicamente activa y de mayor biodisponibilidad de la vitamina D. Este nutriente liposoluble esencial es fundamental para favorecer la absorción y utilización del calcio y fósforo, mantener la densidad y fortaleza ósea, y respaldar la respuesta inmunológica natural.',
        'Absorción y Fijación del Calcio: La Vitamina D contribuye a la absorción y utilización normal del calcio y del fósforo en el tracto digestivo, así como al mantenimiento de niveles normales de calcio en sangre.',
        'Salud Ósea y Dental: Contribuye al mantenimiento de los huesos y dientes en condiciones normales, ayudando a preservar la estructura y densidad del sistema esquelético a lo largo de la vida.',
        'Soporte del Sistema Inmunitario: Contribuye al funcionamiento normal del sistema inmunitario, apoyando las defensas naturales del organismo frente a factores ambientales.',
        'Función Muscular y Cardiovascular: Contribuye al mantenimiento de la función muscular normal, favoreciendo la fuerza, la coordinación motora y el bienestar del sistema circulatorio.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 cápsula al día con un vaso de agua, preferentemente junto con una comida que contenga materia grasa para optimizar su absorción, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 39,
      slug: 'vitamina-e-400ui-30-capsulas',
      nombre: 'Vitamina E 400 UI x 30 cápsulas blandas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'DL-Alfa Tocoferol (Vitamina E 400 UI / 400 mg)',
      categoria: 'Vitaminas y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/vitamina-e-400ui-30-capsulas.png',
        '/assets/images/products/vitamina-e-400ui-30-capsulas-pack.png'
      ],
      composicion: 'DL-Alfa Tocoferol (Vitamina E 400 mg por porción de 1 cápsula), Aceite de Soya. Cápsula blanda: Gelatina, Glicerina, Agua purificada.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas blandas)',
      posologia: 'Consumir 1 cápsula blanda al día con un vaso de agua, preferentemente junto con una comida principal (para favorecer su absorción al ser liposoluble), o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Nutriente liposoluble en cápsulas blandas softgel de alta biodisponibilidad para una potente protección antioxidante celular, nutrición cutánea y soporte cardiovascular.',
      descripcionParrafos: [
        'La Vitamina E (DL-Alfa Tocoferol) es un nutriente liposoluble con una destacada acción antioxidante en el organismo. Formulada en cápsulas blandas con base lipídica para maximizar su biodisponibilidad, esta vitamina es fundamental para proteger las células frente al estrés oxidativo, favorecer la salud de la piel y dar soporte al sistema cardiovascular e inmunitario.',
        'Protección Antioxidante Celular: La Vitamina E contribuye a la protección de las células frente al daño oxidativo, neutralizando el efecto de los radicales libres y preservando la integridad de las membranas celulares.',
        'Cuidado y Salud Cutánea: Colabora en la nutrición de la epidermis y la protección de los tejidos cutáneos, apoyando la retención de humedad, la elasticidad natural y el mantenimiento de la piel frente al envejecimiento ambiental.',
        'Soporte Cardiovascular: Favorece la protección de las estructuras lipídicas y vasos sanguíneos frente a la oxidación, colaborando con la salud cardiovascular en el marco de una dieta equilibrada.',
        'Refuerzo del Sistema Inmunitario: Contribuye al funcionamiento normal del sistema inmunitario, apoyando la respuesta defensiva celular en adultos.'
      ],
      contenido: 'Frasco con 30 cápsulas blandas (700 mg c/u)',
      modoUso: 'Consumir 1 cápsula blanda al día con un vaso de agua, preferentemente junto con una comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    },
    {
      id: 40,
      slug: 'zinc-15mg-30-capsulas',
      nombre: 'Zinc 15 mg x 30 cápsulas',
      laboratorio: 'PRANALAB LABORATORIOS CHILE',
      principioActivo: 'Sulfato de Zinc (Zinc elemental 15 mg)',
      categoria: 'Minerales y Suplementos',
      formaFarmaceutica: 'Cápsulas',
      imagenes: [
        '/assets/images/products/zinc-15mg-30-capsulas.png',
        '/assets/images/products/zinc-15mg-30-capsulas-pack.jpg'
      ],
      composicion: 'Sulfato de Zinc (equivalente a 15 mg de Zinc elemental), Celulosa Microcristalina. Cápsula: Gelatina.',
      presentacion: 'Frasco con sello de seguridad (30 cápsulas)',
      posologia: 'Consumir 1 a 2 cápsulas al día con abundante agua, preferentemente junto a una comida principal, o según indicación profesional.',
      clasificacion: 'venta-directa',
      nuevo: true,
      destacado: true,
      descripcionCorta: 'Mineral traza esencial con 15 mg de Zinc elemental para reforzar las defensas inmunológicas, protección celular antioxidante, balance hormonal y salud de piel, cabello y uñas.',
      descripcionParrafos: [
        'El Zinc es un mineral traza esencial implicado en más de 300 reacciones enzimáticas en el organismo. Aporta 15 mg de Zinc elemental por cápsula, constituyendo un pilar fundamental para reforzar la respuesta inmunológica, apoyar la salud reproductiva y hormonal, favorecer la síntesis de proteínas y mantener la integridad de la piel, cabello y uñas.',
        'Soporte del Sistema Inmunitario: El Zinc contribuye al funcionamiento normal del sistema inmunitario, apoyando las defensas naturales del organismo frente a factores ambientales.',
        'Protección Antioxidante Celular: Contribuye a la protección de las células frente al daño oxidativo, resguardando las estructuras celulares del envejecimiento prematuro.',
        'Salud Reproductiva y Balance Hormonal: Contribuye a la fertilidad y reproducción normales, además de colaborar en el mantenimiento de niveles normales de testosterona en sangre.',
        'Síntesis de Proteínas y División Celular: Contribuye a la síntesis proteica normal y participa en el proceso de división celular, favoreciendo la renovación y regeneración de los tejidos.',
        'Mantenimiento de Piel, Cabello y Uñas: Contribuye al mantenimiento de la piel, cabello y uñas en condiciones normales, apoyando su estructura, firmeza y vitalidad.',
        'Metabolismo de Macronutrientes: Contribuye al metabolismo normal de los carbohidratos, ácidos grasos y la Vitamina A, optimizando el aprovechamiento de los nutrientes consumidos.'
      ],
      contenido: 'Frasco con 30 cápsulas',
      modoUso: 'Consumir 1 a 2 cápsulas al día con abundante agua, preferentemente junto a una comida principal, o según indicación profesional.',
      vencimiento: '24 meses desde la fecha de elaboración.',
      almacenamiento: 'Conservar en un lugar fresco y seco, protegido de la luz directa. Mantener fuera del alcance de los niños.'
    }
  ];

  getAll(): Product[] {
    return [...this.products];
  }

  getById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
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

  getDestacadosHome(): Product[] {
    const ids = [24, 4, 7, 37];
    return ids.map(id => this.getById(id)).filter((p): p is Product => !!p);
  }
}
