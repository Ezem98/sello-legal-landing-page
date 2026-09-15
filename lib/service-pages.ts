export interface ServicePageSection {
  heading: string
  body: string[]
}

export interface ServicePageFaq {
  q: string
  a: string
}

export interface ServicePageContent {
  slug: string
  badge: string
  title: string
  metaDescription: string
  intro: string
  sections: ServicePageSection[]
  faqs: ServicePageFaq[]
  relatedPages?: { label: string; href: string }[]
}

export const servicePages: Record<string, ServicePageContent> = {
  "derechos-de-autor": {
    slug: "derechos-de-autor",
    badge: "Propiedad Intelectual",
    title: "Derechos de Autor",
    metaDescription:
      "Asesoría legal en derechos de autor para emprendedores y empresas digitales: qué protege, cómo registrarlo ante la DNDA y cómo defender tu contenido.",
    intro:
      "Tus diseños, fotos, textos, cursos, contenido de redes y hasta tu código son creaciones originales protegidas por derecho de autor desde el momento en que las creás. El problema es que casi nadie sabe qué implica eso en la práctica, ni qué hacer cuando alguien copia su trabajo.",
    sections: [
      {
        heading: "¿Qué protege el derecho de autor?",
        body: [
          "El derecho de autor protege obras originales: textos, fotografías, ilustraciones, diseños gráficos, videos, cursos online, música, software y prácticamente cualquier creación con un mínimo de originalidad.",
          "A diferencia de una marca (que protege el nombre o el logo con el que identificás tu negocio en el mercado), el derecho de autor protege la obra en sí misma: el contenido creativo que produjiste, más allá de si lo usás o no como parte de tu identidad comercial.",
        ],
      },
      {
        heading: "¿Necesito registrarlo para tener derechos?",
        body: [
          "El derecho de autor nace con la creación de la obra, no con el registro. Pero registrar tu obra ante la Dirección Nacional del Derecho de Autor (DNDA) te da algo muy valioso al momento de un conflicto: una fecha cierta y un respaldo documental de que esa obra es tuya.",
          "En la práctica, esto es clave si algún día tenés que demostrar que fuiste vos quien creó ese contenido primero — por ejemplo, ante una copia, un plagio, o un uso no autorizado por parte de un tercero.",
        ],
      },
      {
        heading: "Casos frecuentes en negocios digitales",
        body: [
          "Vemos esto todo el tiempo: contenido de redes sociales copiado sin autorización, diseños o fotografías de producto usados por otra marca, cursos o e-books reproducidos sin permiso, freelancers y diseñadores que entregan trabajo sin que quede claro quién es dueño de los derechos, y creadores de contenido que no saben cómo proteger lo que producen.",
          "También trabajamos los contratos de cesión de derechos: si contratás a un diseñador, fotógrafo o desarrollador, necesitás un contrato que aclare que los derechos sobre ese trabajo pasan a tu empresa — sin eso, el autor original puede seguir siendo el titular de esos derechos aunque vos hayas pagado por el trabajo.",
        ],
      },
      {
        heading: "Cómo te ayudamos",
        body: [
          "Registro de obras ante la DNDA, redacción y revisión de contratos de cesión de derechos con freelancers y proveedores, términos de uso para proteger el contenido que publicás online, y asesoramiento si alguien ya copió o usó tu contenido sin autorización.",
        ],
      },
    ],
    relatedPages: [
      { label: "Ver Propiedad Intelectual →", href: "/servicios/propiedad-intelectual" },
      { label: "Ver Registro de Marcas →", href: "/servicios/registro-de-marcas" },
    ],
    faqs: [
      {
        q: "¿Cuánto dura la protección del derecho de autor?",
        a: "En general, se extiende durante toda la vida del autor más un plazo adicional posterior a su fallecimiento (que varía según el tipo de obra). Para la mayoría de los negocios, en la práctica, la protección dura muchísimo más que la vida útil comercial del contenido.",
      },
      {
        q: "¿Qué hago si alguien copió mi contenido?",
        a: "Primero, documentar la infracción (capturas, fechas, links). Después, evaluamos juntas la mejor vía: desde un reclamo directo o ante la plataforma (Instagram, Meta, Mercado Libre, etc.) hasta acciones legales, según la gravedad y el caso.",
      },
      {
        q: "¿Tengo que registrar cada publicación que hago?",
        a: "No es necesario registrar cada pieza de contenido. Tiene más sentido registrar obras específicas de alto valor (un curso, un e-book, un desarrollo de marca completo) y sostener buenas prácticas de respaldo y fechado del resto de tu contenido.",
      },
      {
        q: "Contraté a un diseñador freelance, ¿los derechos son míos?",
        a: "No necesariamente. Salvo que el contrato lo establezca expresamente, el autor original puede conservar los derechos sobre su obra. Por eso es clave firmar un contrato de cesión de derechos antes de empezar a trabajar con freelancers o proveedores externos.",
      },
    ],
  },
  "registro-de-marcas": {
    slug: "registro-de-marcas",
    badge: "Propiedad Intelectual",
    title: "Registro de Marcas",
    metaDescription:
      "Registro de marcas en Argentina: qué protege, cómo es el proceso ante el INPI, cuánto dura, y por qué conviene registrar antes de esperar a tener más ventas.",
    intro:
      "El nombre y el logo con el que te conocen tus clientes son parte del valor de tu negocio. En Argentina rige el principio \"primero en registrar, primero en el derecho\": no importa hace cuánto usás tu marca, importa quién la registró primero.",
    sections: [
      {
        heading: "¿Qué es una marca y qué protege?",
        body: [
          "Una marca es el nombre, logo, frase o signo distintivo que usás para identificar tus productos o servicios frente a la competencia. Registrarla te da el derecho exclusivo de usarla — y de impedir que otros la usen — para esos productos o servicios, dentro del territorio donde la registraste.",
        ],
      },
      {
        heading: "Por qué no conviene esperar",
        body: [
          "La lógica de \"primero valido el negocio y después me ocupo de lo legal\" es un error común y costoso. Mientras esperás a tener más ventas para formalizar, cualquier otra persona puede estar registrando ese mismo nombre en este momento — y si lo hace antes que vos, tiene el derecho, aunque vos lo hayas usado primero.",
          "Si eso pasa, las opciones que quedan son costosas y lentas: oponerte durante el trámite (con un plazo acotado), iniciar una acción de nulidad, cambiar de nombre, o negociar con quien llegó primero. Ninguna es tan simple como haber registrado a tiempo.",
        ],
      },
      {
        heading: "Cómo es el proceso de registro en Argentina",
        body: [
          "Empieza con una búsqueda de antecedentes marcarios, para chequear que no exista ya algo igual o similar registrado en la misma clase de productos o servicios. Después se presenta la solicitud ante el INPI, se publica en el Boletín de Marcas (con un período de oposición de 30 días hábiles para terceros), y si no hay objeciones, se concede el registro.",
          "El registro tiene una vigencia de 10 años y es renovable indefinidamente.",
        ],
      },
      {
        heading: "Después de registrar: la vigilancia marcaria",
        body: [
          "Registrar es el primer paso, no el único. Después hay obligaciones para mantener la marca vigente: vigilancia marcaria (para detectar marcas similares y oponerte a tiempo), declaración de uso entre el 5° y 6° año, y renovación cada 10 años. Muchas marcas se pierden no por falta de registro, sino por no hacer este seguimiento.",
        ],
      },
    ],
    relatedPages: [
      { label: "Ver Propiedad Intelectual →", href: "/servicios/propiedad-intelectual" },
      { label: "Ver Derechos de Autor →", href: "/servicios/derechos-de-autor" },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda el proceso de registro?",
        a: "Depende de si hay oposiciones u observaciones durante el trámite, pero en un proceso sin objeciones suele tomar varios meses desde la presentación hasta la concesión. Lo importante es que la fecha de presentación queda como tu fecha de prioridad desde el día uno.",
      },
      {
        q: "¿Qué pasa si alguien ya registró mi marca?",
        a: "Si el registro está en trámite, podés oponerte dentro del período de oposición. Si ya está concedido, la vía es una acción de nulidad, que exige demostrar mala fe o uso previo — un camino más largo y con menos garantías que haber registrado a tiempo.",
      },
      {
        q: "¿Puedo registrar mi marca en varias clases o rubros?",
        a: "Sí. El registro se hace por clase de productos o servicios, según la clasificación internacional. Si tu negocio abarca más de un rubro, conviene evaluar en qué clases te conviene registrar para tener una protección completa.",
      },
      {
        q: "¿El registro de marca protege también mi logo?",
        a: "Se puede registrar el nombre (marca denominativa), el logo (marca figurativa), o ambos combinados (marca mixta). Te ayudamos a definir qué te conviene registrar según tu marca y tu estrategia de negocio.",
      },
    ],
  },
  "propiedad-intelectual": {
    slug: "propiedad-intelectual",
    badge: "Áreas de Práctica",
    title: "Propiedad Intelectual",
    metaDescription:
      "Protección integral de propiedad intelectual para emprendedores: marcas, derechos de autor, patentes y secretos comerciales, explicado en criollo.",
    intro:
      "La propiedad intelectual es todo lo intangible que le da valor a tu negocio: tu marca, tus creaciones, tus desarrollos y tu forma particular de hacer las cosas. Protegerla a tiempo evita que otro se quede con lo que construiste.",
    sections: [
      {
        heading: "Las cuatro grandes áreas",
        body: [
          "Marcas: el nombre, logo o signo con el que te identificás en el mercado. Se registra ante el INPI y te da el derecho exclusivo de uso.",
          "Derechos de autor: protege tus creaciones originales — textos, diseños, fotos, contenido, software — desde el momento en que las creás.",
          "Patentes y modelos de utilidad: protegen invenciones y mejoras funcionales a productos o procesos.",
          "Secretos comerciales: información confidencial con valor competitivo (fórmulas, procesos, listas de clientes) que se protege manteniéndola reservada, no registrándola.",
        ],
      },
      {
        heading: "¿Por dónde empezar?",
        body: [
          "La mayoría de los emprendimientos y empresas digitales necesitan, como mínimo, proteger su marca y ordenar los derechos de autor sobre su contenido y desarrollos. Si tu proyecto tiene un desarrollo técnico propio, ahí entran también las patentes o modelos de utilidad.",
          "Si ya sabés exactamente qué necesitás, te dejamos el detalle en las páginas de Registro de Marcas y Derechos de Autor. Si no estás segura por dónde empezar, lo vemos juntas en una consulta.",
        ],
      },
    ],
    relatedPages: [
      { label: "Ver Registro de Marcas →", href: "/servicios/registro-de-marcas" },
      { label: "Ver Derechos de Autor →", href: "/servicios/derechos-de-autor" },
    ],
    faqs: [
      {
        q: "¿Necesito proteger todo desde el día uno?",
        a: "No necesariamente todo al mismo tiempo, pero sí cuanto antes. Priorizamos según tu negocio: en general, el registro de marca es lo primero, porque es lo más expuesto a que alguien se te adelante.",
      },
      {
        q: "¿Qué pasa si mi negocio crece a otros países?",
        a: "La propiedad intelectual es territorial: un registro en Argentina protege dentro de Argentina. Si planeás expandirte, se puede evaluar una estrategia de registro internacional.",
      },
    ],
  },
}

export function getServicePage(slug: string): ServicePageContent | null {
  return servicePages[slug] ?? null
}
