export interface ServicePageSection {
  id: string
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
        id: "que-protege",
        heading: "¿Qué protege el derecho de autor?",
        body: [
          "El derecho de autor protege obras originales: textos, fotografías, ilustraciones, diseños gráficos, videos, cursos online, música, software y prácticamente cualquier creación con un mínimo de originalidad.",
          "A diferencia de una marca (que protege el nombre o el logo con el que identificás tu negocio en el mercado), el derecho de autor protege la obra en sí misma: el contenido creativo que produjiste, más allá de si lo usás o no como parte de tu identidad comercial.",
        ],
      },
      {
        id: "registro",
        heading: "¿Necesito registrarlo para tener derechos?",
        body: [
          "El derecho de autor nace con la creación de la obra, no con el registro. Pero registrar tu obra ante la Dirección Nacional del Derecho de Autor (DNDA) te da algo muy valioso al momento de un conflicto: una fecha cierta y un respaldo documental de que esa obra es tuya.",
          "En la práctica, esto es clave si algún día tenés que demostrar que fuiste vos quien creó ese contenido primero — por ejemplo, ante una copia, un plagio, o un uso no autorizado por parte de un tercero.",
        ],
      },
      {
        id: "casos-frecuentes",
        heading: "Casos frecuentes en negocios digitales",
        body: [
          "Vemos esto todo el tiempo: contenido de redes sociales copiado sin autorización, diseños o fotografías de producto usados por otra marca, cursos o e-books reproducidos sin permiso, freelancers y diseñadores que entregan trabajo sin que quede claro quién es dueño de los derechos, y creadores de contenido que no saben cómo proteger lo que producen.",
          "También trabajamos los contratos de cesión de derechos: si contratás a un diseñador, fotógrafo o desarrollador, necesitás un contrato que aclare que los derechos sobre ese trabajo pasan a tu empresa — sin eso, el autor original puede seguir siendo el titular de esos derechos aunque vos hayas pagado por el trabajo.",
        ],
      },
      {
        id: "como-ayudamos",
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
        id: "que-es",
        heading: "¿Qué es una marca y qué protege?",
        body: [
          "Una marca es el nombre, logo, frase o signo distintivo que usás para identificar tus productos o servicios frente a la competencia. Registrarla te da el derecho exclusivo de usarla — y de impedir que otros la usen — para esos productos o servicios, dentro del territorio donde la registraste.",
        ],
      },
      {
        id: "por-que-no-esperar",
        heading: "Por qué no conviene esperar",
        body: [
          "La lógica de \"primero valido el negocio y después me ocupo de lo legal\" es un error común y costoso. Mientras esperás a tener más ventas para formalizar, cualquier otra persona puede estar registrando ese mismo nombre en este momento — y si lo hace antes que vos, tiene el derecho, aunque vos lo hayas usado primero.",
          "Si eso pasa, las opciones que quedan son costosas y lentas: oponerte durante el trámite (con un plazo acotado), iniciar una acción de nulidad, cambiar de nombre, o negociar con quien llegó primero. Ninguna es tan simple como haber registrado a tiempo.",
        ],
      },
      {
        id: "proceso",
        heading: "Cómo es el proceso de registro en Argentina",
        body: [
          "Empieza con una búsqueda de antecedentes marcarios, para chequear que no exista ya algo igual o similar registrado en la misma clase de productos o servicios. Después se presenta la solicitud ante el INPI, se publica en el Boletín de Marcas (con un período de oposición de 30 días hábiles para terceros), y si no hay objeciones, se concede el registro.",
          "El registro tiene una vigencia de 10 años y es renovable indefinidamente.",
        ],
      },
      {
        id: "vigilancia",
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
        id: "areas",
        heading: "Las cuatro grandes áreas",
        body: [
          "Marcas: el nombre, logo o signo con el que te identificás en el mercado. Se registra ante el INPI y te da el derecho exclusivo de uso.",
          "Derechos de autor: protege tus creaciones originales — textos, diseños, fotos, contenido, software — desde el momento en que las creás.",
          "Patentes y modelos de utilidad: protegen invenciones y mejoras funcionales a productos o procesos.",
          "Secretos comerciales: información confidencial con valor competitivo (fórmulas, procesos, listas de clientes) que se protege manteniéndola reservada, no registrándola.",
        ],
      },
      {
        id: "por-donde-empezar",
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
  sociedades: {
    slug: "sociedades",
    badge: "Derecho Societario",
    title: "Sociedades: Constitución y Asesoramiento Societario",
    metaDescription:
      "Asesoramiento legal para constituir tu sociedad (SAS, SRL, S.A.), armar el pacto de socios y gestionar modificaciones societarias en Argentina.",
    intro:
      "Elegir la estructura societaria correcta desde el día uno evita conflictos entre socios, problemas fiscales y dolores de cabeza cuando el negocio crece. Te acompañamos en la constitución de tu sociedad y en cada paso posterior.",
    sections: [
      {
        id: "tipo-de-sociedad",
        heading: "¿Qué tipo de sociedad conviene para tu negocio?",
        body: [
          "La SAS (Sociedad por Acciones Simplificada) se constituye de forma 100% digital, con un capital inicial bajo y una inscripción mucho más rápida ante la IGJ que otros tipos societarios. Para la mayoría de los emprendimientos y empresas digitales, es la opción que mejor equilibra simpleza y protección patrimonial.",
          "Una SRL o una S.A. tienen más sentido en escenarios puntuales: cuando hay socios extranjeros, cuando el negocio busca una ronda de inversión con requisitos específicos de gobierno corporativo, o cuando el rubro exige un tipo societario determinado.",
        ],
      },
      {
        id: "pacto-de-socios",
        heading: "Pacto de socios: el documento que evita peleas",
        body: [
          "Un acuerdo verbal entre socios — por más buena relación que haya — no alcanza cuando el negocio crece o cuando algo sale mal. El pacto de socios es el documento que deja por escrito lo que nadie quiere discutir en el momento de armar la sociedad, pero que evita conflictos mucho más caros después.",
          "Debería cubrir, como mínimo: roles y responsabilidades de cada socio, porcentaje de participación, qué pasa si un socio quiere salir o vender su parte, cómo se resuelven los desacuerdos, y cláusulas de no competencia.",
        ],
      },
      {
        id: "modificaciones",
        heading: "Modificaciones societarias y trámites ante la IGJ",
        body: [
          "Una sociedad no es estática: cambian las autoridades, entra o sale un socio, se aumenta el capital, se modifica el objeto social. Cada uno de estos cambios requiere un trámite formal ante la Inspección General de Justicia (IGJ) para que la sociedad quede correctamente actualizada.",
          "Nos encargamos de la gestión completa: redacción del acta o instrumento correspondiente, y presentación e inscripción ante la IGJ.",
        ],
      },
    ],
    relatedPages: [
      { label: "Ver Contratos y Marketing Legal →", href: "/servicios/contratos" },
      { label: "Ver Propiedad Intelectual →", href: "/servicios/propiedad-intelectual" },
    ],
    faqs: [
      {
        q: "¿Cuánto tarda en constituirse una SAS en Argentina?",
        a: "La inscripción digital ante la IGJ suele resolverse en 24 a 48 horas hábiles una vez presentada la documentación. Preparar el estatuto y los datos societarios previos puede llevar unos días más, según cuán definida esté la estructura entre los socios.",
      },
      {
        q: "¿Qué diferencia hay entre una SAS y una SRL?",
        a: "La SAS se constituye de forma más rápida y digital, con menos requisitos de capital inicial. La SRL tiene un proceso más tradicional y puede convenir en estructuras con socios extranjeros o requisitos específicos del rubro. Lo vemos juntas según tu caso.",
      },
      {
        q: "¿Necesito un pacto de socios si somos amigos o familia?",
        a: "Sí, incluso más que en otros casos. La confianza personal no reemplaza un documento que defina qué pasa ante un desacuerdo, la salida de un socio o el crecimiento del negocio — justamente para no poner en riesgo la relación.",
      },
      {
        q: "¿Puedo modificar el porcentaje de participación de los socios después de constituida la sociedad?",
        a: "Sí, mediante una modificación societaria formal (cesión de cuotas o acciones, aumento de capital, etc.) que después se inscribe ante la IGJ. Es un trámite habitual y lo gestionamos de punta a punta.",
      },
    ],
  },
  contratos: {
    slug: "contratos",
    badge: "Contratos y Marketing",
    title: "Contratos y Marketing Legal",
    metaDescription:
      "Redacción y revisión de contratos comerciales, de franquicia, NDA y piezas publicitarias. Protegé tu negocio antes de firmar o publicar.",
    intro:
      "Cada contrato que firmás y cada pieza de marketing que publicás puede jugar a tu favor o en tu contra, según qué tan bien esté armada. Revisamos y redactamos los documentos legales que tu negocio necesita para operar sin sorpresas.",
    sections: [
      {
        id: "proveedores",
        heading: "Contratos con proveedores, freelancers y creadores de contenido",
        body: [
          "Trabajar con freelancers, agencias o creadores de contenido sin un contrato claro es una de las causas más frecuentes de conflictos: alcance del trabajo indefinido, plazos de entrega sin consecuencias si no se cumplen, y — el más común — falta de claridad sobre quién es dueño del contenido una vez entregado.",
          "Un buen contrato define el alcance exacto del trabajo, los plazos y penalidades por incumplimiento, y deja expresamente establecido que los derechos sobre lo creado pasan a tu empresa.",
        ],
      },
      {
        id: "franquicia",
        heading: "Contratos de franquicia: qué cubrir antes de escalar tu marca",
        body: [
          "Franquiciar tu negocio es una forma de crecer sin poner vos todo el capital, pero también es prestarle tu marca a otra persona. El contrato de franquicia tiene que dejar claro el uso permitido de tu marca registrada, el territorio exclusivo, el esquema de royalties, y la duración y condiciones de renovación o rescisión.",
        ],
      },
      {
        id: "nda",
        heading: "Secreto comercial y acuerdos de confidencialidad (NDA)",
        body: [
          "No toda la información valiosa de tu negocio se protege registrándola — algunas cosas se protegen manteniéndolas en secreto. Un NDA (acuerdo de confidencialidad) es el documento que te da respaldo legal antes de compartir información sensible con un inversor, un proveedor, un socio potencial o un nuevo empleado.",
        ],
      },
      {
        id: "terminos",
        heading: "Términos y condiciones para tu sitio, app o tienda online",
        body: [
          "Los Términos y Condiciones regulan la relación entre tu plataforma y quien la usa: qué puede y no puede hacer, cómo funcionan las compras o suscripciones, y qué pasa ante un incumplimiento. Sin un documento claro, cualquier conflicto con un usuario queda librado a la interpretación de cada uno.",
        ],
      },
      {
        id: "privacidad",
        heading: "Políticas de privacidad y protección de datos personales",
        body: [
          "Si tu sitio o app recolecta datos de usuarios — desde un formulario de contacto hasta un checkout completo — necesitás una política de privacidad que explique qué datos recolectás, para qué los usás y cómo los protegés, en línea con la Ley de Protección de Datos Personales.",
        ],
      },
      {
        id: "publicidad",
        heading: "Revisión legal de publicidades y promociones",
        body: [
          "La Ley de Lealtad Comercial regula qué podés y qué no podés decir en tu publicidad. Antes de lanzar una campaña, una promoción o un sorteo, revisamos que las piezas no incurran en publicidad engañosa y que las bases y condiciones estén correctamente redactadas — evitando sanciones y reclamos después del lanzamiento, no durante.",
        ],
      },
    ],
    relatedPages: [
      { label: "Ver Sociedades →", href: "/servicios/sociedades" },
      { label: "Ver Propiedad Intelectual →", href: "/servicios/propiedad-intelectual" },
      { label: "Ver Derecho del Consumidor →", href: "/servicios/derecho-del-consumidor" },
    ],
    faqs: [
      {
        q: "¿Necesito un contrato por escrito con cada proveedor o freelancer?",
        a: "Sí, siempre que el trabajo implique crear algo con valor para tu negocio — contenido, desarrollo, diseño. Sin contrato, hay puntos clave que quedan sin resolver y que después generan problemas. Agendá una consulta y vemos juntas qué necesita cubrir el tuyo.",
      },
      {
        q: "¿Qué es un NDA y cuándo debería pedir que lo firmen?",
        a: "Es un acuerdo de confidencialidad, y conviene pedirlo antes de compartir información sensible de tu negocio con alguien externo. El momento exacto y qué debe incluir depende de tu situación — contanos tu caso en una consulta y te decimos cómo armarlo.",
      },
      {
        q: "¿Qué pasa si lanzo una promoción sin bases y condiciones?",
        a: "Quedás expuesta a reclamos y sanciones bajo la normativa de consumidor y lealtad comercial. Antes de lanzar tu próxima campaña, agendá una consulta y revisamos la pieza para que salga sin riesgos.",
      },
      {
        q: "¿Cómo protejo mi marca al franquiciar mi negocio?",
        a: "El contrato de franquicia tiene que limitar claramente el uso de tu marca registrada, pero cada modelo de franquicia tiene sus particularidades. Agendá una consulta y armamos el contrato a medida de cómo pensás escalar tu negocio.",
      },
    ],
  },
  "derecho-del-consumidor": {
    slug: "derecho-del-consumidor",
    badge: "Derecho del Consumidor",
    title: "Derecho del Consumidor para Tiendas Online y Negocios Digitales",
    metaDescription:
      "Cumplí con la Ley de Defensa del Consumidor: botón de arrepentimiento, políticas de devoluciones y reintegros, y defensa ante reclamos.",
    intro:
      "Vender online significa cumplir reglas específicas para proteger a quien te compra. Cumplirlas no es solo evitar sanciones: es que tus clientes confíen en cómo comprás y en cómo respondés cuando algo no sale bien.",
    sections: [
      {
        id: "ley",
        heading: "Ley de Defensa del Consumidor: qué exige y a quién aplica",
        body: [
          "La Ley 24.240 aplica a cualquier negocio que le venda productos o servicios a consumidores finales, sin importar el tamaño de la empresa. Entre los incumplimientos más comunes que vemos en e-commerces argentinos están la falta de información clara sobre precios y condiciones, la ausencia de un canal de reclamos accesible, y políticas de devolución poco claras o directamente inexistentes.",
        ],
      },
      {
        id: "boton-arrepentimiento",
        heading: "Botón de arrepentimiento: obligatorio para e-commerce",
        body: [
          "La Resolución 424/2020 obliga a los sitios de venta online a incluir un botón de arrepentimiento, visible y de fácil acceso, para que el consumidor pueda ejercer su derecho a arrepentirse de la compra dentro del plazo legal. No tenerlo implementado es una de las infracciones más sancionadas a comercios digitales en los últimos años.",
        ],
      },
      {
        id: "devoluciones",
        heading: "Políticas de devoluciones y reintegros",
        body: [
          "Una política de devoluciones clara evita malentendidos y reclamos. Tiene que explicar los plazos legales para devolver un producto, la diferencia entre un cambio y una devolución con reintegro, y el procedimiento concreto para hacerlo — y estar publicada en un lugar visible de tu sitio.",
        ],
      },
      {
        id: "reclamos",
        heading: "Defensa ante reclamos de clientes",
        body: [
          "Cuando un reclamo escala a COPREC o a Defensa del Consumidor, cómo respondas en las primeras etapas define si el conflicto se resuelve rápido o se convierte en un proceso largo y costoso. Te acompañamos en la respuesta y, si hace falta, en la instancia conciliatoria o administrativa.",
        ],
      },
    ],
    relatedPages: [
      { label: "Ver Contratos y Marketing Legal →", href: "/servicios/contratos" },
      { label: "Ver Compliance →", href: "/servicios/compliance" },
    ],
    faqs: [
      {
        q: "¿Qué es el botón de arrepentimiento y mi tienda online lo necesita?",
        a: "Es un botón obligatorio en tiendas online para que el cliente pueda arrepentirse de una compra dentro del plazo legal. Si no lo tenés bien implementado, es una de las infracciones que más se sanciona — agendá una consulta y lo revisamos juntas.",
      },
      {
        q: "¿Cuánto tiempo tiene un cliente para devolver un producto comprado online?",
        a: "Hay un plazo mínimo legal, pero varía según el tipo de producto o servicio y tiene excepciones que conviene conocer. Agendá una consulta y te decimos exactamente qué aplica a tu negocio.",
      },
      {
        q: "¿Qué pasa si no tengo política de devoluciones publicada?",
        a: "Quedás expuesta a reclamos y no tenés un documento claro al que remitirte ante un conflicto. Agendá una consulta y armamos la política que tu tienda necesita.",
      },
      {
        q: "¿Qué hago si me llega un reclamo de Defensa del Consumidor o COPREC?",
        a: "Hay plazos para responder, así que no conviene dejarlo pasar. Agendá una consulta cuanto antes y vemos juntas cómo armar la respuesta.",
      },
    ],
  },
  compliance: {
    slug: "compliance",
    badge: "Compliance",
    title: "Compliance y Programas de Integridad para Empresas",
    metaDescription:
      "Programas de compliance, auditorías legales y programas de integridad (Ley 27.401) para que tu empresa cumpla la normativa desde el día uno.",
    intro:
      "Cumplir la normativa no debería ser algo que se resuelve después de un problema. Armamos programas de compliance simples y a medida, pensados para prevenir riesgos legales antes de que aparezcan.",
    sections: [
      {
        id: "auditoria",
        heading: "Auditoría legal: dónde están los riesgos de tu negocio",
        body: [
          "Antes de armar cualquier programa de compliance, hacemos una auditoría legal que revisa los documentos, contratos y políticas vigentes de tu empresa, para identificar qué está en regla, qué falta y dónde están los riesgos concretos — no genéricos — de tu negocio.",
        ],
      },
      {
        id: "programa-integridad",
        heading: "Programa de integridad (Ley 27.401)",
        body: [
          "La Ley 27.401 de Responsabilidad Penal Empresaria exige un programa de integridad a las empresas que contratan con el Estado nacional en determinados casos, pero tenerlo implementado es una buena práctica para cualquier empresa que quiera prevenir su responsabilidad ante hechos de corrupción cometidos por empleados o terceros.",
          "El programa incluye, entre otros elementos, un código de ética, un canal de denuncias, capacitaciones periódicas y procedimientos de debida diligencia con terceros.",
        ],
      },
      {
        id: "politicas-internas",
        heading: "Políticas internas: el código de ética de tu empresa",
        body: [
          "El código de ética, las políticas de uso de información y el canal de denuncias son la base de cualquier programa de compliance. Los armamos a medida de tu empresa, del tamaño de tu equipo y de los riesgos reales de tu negocio — no una plantilla genérica.",
        ],
      },
      {
        id: "capacitacion",
        heading: "Capacitación de equipos: que el compliance sea parte del día a día",
        body: [
          "Un código de ética solo funciona si el equipo lo conoce y sabe cómo aplicarlo. Capacitamos a tus equipos de forma periódica para que las políticas internas dejen de ser un documento archivado y pasen a ser parte de la cultura de la empresa.",
        ],
      },
      {
        id: "prevencion",
        heading: "Prevención de riesgos legales antes de que aparezcan",
        body: [
          "El enfoque preventivo cuesta muchísimo menos que el reactivo: revisar y corregir antes evita multas, conflictos y daño reputacional que después son mucho más difíciles y caros de resolver.",
        ],
      },
    ],
    relatedPages: [
      { label: "Ver Sociedades →", href: "/servicios/sociedades" },
      { label: "Ver Derecho del Consumidor →", href: "/servicios/derecho-del-consumidor" },
    ],
    faqs: [
      {
        q: "¿Mi empresa está obligada a tener un programa de integridad?",
        a: "Depende de si tu empresa contrata con el Estado y de otros factores puntuales de la Ley 27.401. Agendá una consulta y evaluamos juntas si te aplica y qué conviene implementar de todas formas.",
      },
      {
        q: "¿Qué diferencia hay entre compliance y auditoría legal?",
        a: "La auditoría es el diagnóstico; el programa de compliance es la solución permanente. Cuál necesitás primero depende de en qué etapa está tu empresa — lo vemos en una consulta.",
      },
      {
        q: "¿Cuánto cuesta implementar un programa de compliance para una pyme?",
        a: "Depende del tamaño y la complejidad de tu empresa — armamos programas proporcionales a cada escala. Agendá una consulta y te damos un presupuesto a medida.",
      },
      {
        q: "¿Necesito un canal de denuncias interno?",
        a: "En la mayoría de los casos, sí: es una de las herramientas más efectivas para detectar problemas a tiempo, incluso en equipos chicos. Agendá una consulta y vemos cómo implementarlo en tu empresa.",
      },
    ],
  },
}

export function getServicePage(slug: string): ServicePageContent | null {
  return servicePages[slug] ?? null
}
