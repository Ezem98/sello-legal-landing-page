export interface BlogBlock {
  type: "p" | "h3" | "list"
  text?: string
  items?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string // ISO
  dateDisplay: string
  sourceUrl: string
  body: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "registrar-la-marca-o-esperar-a-tener-mas-ventas",
    title: "¿Registrar la marca o esperar a tener más ventas?",
    excerpt:
      'En Argentina rige "primero en registrar, primero en el derecho". Esperar a validar el negocio antes de registrar tu marca puede salir muy caro.',
    date: "2026-07-08",
    dateDisplay: "8 de julio de 2026",
    sourceUrl: "https://sellolegal.substack.com/p/registrar-la-marca-o-esperar-a-tener",
    body: [
      {
        type: "p",
        text: "Imaginate que llevás dos años construyendo tu marca. Le pusiste nombre, diseñaste el logo, generaste comunidad, conseguiste clientes. Tu producto o servicio se empezó a conocer por ese nombre.",
      },
      { type: "p", text: "Y un día aparece alguien que registró esa marca antes que vos." },
      {
        type: "p",
        text: "No es una situación hipotética. Pasa. Y cuando pasa, las opciones que quedan son costosas, lentas y agotadoras: impugnar el registro, cambiar de nombre, o negociar con quien llegó primero.",
      },
      { type: "p", text: "Todo eso se evita con una decisión que podés tomar hoy." },
      { type: "h3", text: "Por qué la mayoría espera (y por qué es un error)" },
      {
        type: "p",
        text: 'La lógica parece razonable: "Primero valido el negocio, después me preocupo por la parte legal."',
      },
      {
        type: "p",
        text: 'El problema es que el sistema de marcas en Argentina — y en la mayoría de los países — funciona bajo el principio "primero en registrar, primero en el derecho". No importa quién usó el nombre antes, ni cuánto tiempo llevan construyendo la marca. Lo que importa es quién registró primero.',
      },
      {
        type: "p",
        text: 'Esto significa que mientras vos esperás a tener más ventas para "formalizar", otra persona puede estar registrando tu nombre en este momento.',
      },
      { type: "h3", text: "Qué protege exactamente el registro de marca" },
      {
        type: "p",
        text: "Una marca registrada te da el derecho exclusivo de usar ese nombre, logo o signo para los productos o servicios que registraste, dentro del territorio donde lo registraste.",
      },
      {
        type: "list",
        items: [
          "Podés impedir que otros usen tu nombre — y tenés respaldo legal para hacerlo.",
          "Podés licenciar tu marca — si querés franquiciar tu negocio o permitir que otros usen tu nombre a cambio de una regalía, necesitás tener la marca registrada primero.",
          "Tu marca se vuelve un activo — puede tasarse, venderse, cederse o usarse como garantía. Es parte del valor de tu empresa.",
          "Protección ante e-commerce y redes sociales — plataformas como Mercado Libre o Meta tienen mecanismos de protección para marcas registradas. Sin registro, reclamar una cuenta o una publicación que usa tu nombre es mucho más difícil.",
        ],
      },
      { type: "h3", text: "¿Qué pasa si alguien se te adelanta?" },
      {
        type: "p",
        text: "Cuando otra persona registra una marca igual o similar a la tuya, tenés opciones — pero todas tienen un costo.",
      },
      {
        type: "p",
        text: "Si la marca está en trámite, podés oponerte durante el proceso de registro (hay un período de oposición de 30 días hábiles desde la publicación en el Boletín de Marcas). Si ya se registró, podés iniciar una acción de nulidad si podés demostrar mala fe o uso previo. Y si la marca ya está vigente y en uso activo por parte de otro, el camino puede ser largo y costoso.",
      },
      { type: "p", text: "Ninguna de esas opciones es tan simple ni tan económica como haber registrado a tiempo." },
      { type: "h3", text: "¿Cuándo es el momento ideal para registrar?" },
      { type: "p", text: "Antes de lo que pensás." },
      {
        type: "p",
        text: 'Idealmente, antes de lanzar públicamente tu marca. Si ya la estás usando, cuanto antes mejor. No esperés a tener cierto nivel de ventas, ni a tener el logo "definitivo", ni a estar segura de que el negocio va a funcionar.',
      },
      {
        type: "p",
        text: "El registro de marca en Argentina tiene una vigencia de 10 años y es renovable. El costo del proceso es accesible si lo comparás con lo que cuesta perder el nombre que construiste.",
      },
      { type: "h3", text: "Una aclaración importante" },
      {
        type: "p",
        text: "Cada caso es distinto. La disponibilidad de una marca depende de si existe algo igual o similar ya registrado en la misma clase de productos o servicios. Por eso, antes de registrar, conviene hacer una búsqueda de antecedentes marcarios para evitar sorpresas.",
      },
      {
        type: "p",
        text: "Eso es exactamente lo que hacemos en Sello Legal: te asesoramos en todo el proceso, desde la búsqueda previa hasta el seguimiento del expediente.",
      },
      { type: "h3", text: "En resumen" },
      { type: "p", text: "No registrar tu marca no es una decisión neutral. Es asumir un riesgo que puede costarte mucho más adelante." },
      { type: "p", text: "Recordá: el mejor momento para registrar fue cuando empezaste. El segundo mejor momento es ahora." },
    ],
  },
  {
    slug: "gucci-coty-loreal-contratos-de-licencia",
    title: "Pagó USD 400 millones para irse antes de tiempo: lo que el caso Gucci-Coty-L'Oréal nos enseña sobre contratos de licencia",
    excerpt:
      "Kering, Gucci, Coty y L'Oréal estuvieron en el spotlight de la industria del lujo este mes. Detrás del glamour hay algo mucho más básico: un contrato de licencia de marca bien pensado.",
    date: "2026-07-24",
    dateDisplay: "24 de julio de 2026",
    sourceUrl: "https://sellolegal.substack.com/p/pago-usd-400-millones-para-irse-antes",
    body: [
      {
        type: "p",
        text: "La semana pasada, Coty anunció que se va antes de tiempo de la licencia que tenía para vender productos de belleza Gucci. A cambio, va a cobrar unos USD 400 millones. En simultáneo, Kering (dueña de Gucci) cerró con L'Oréal una licencia exclusiva por 50 años para que sea esta última quien maneje esa línea de negocio a partir de julio de 2027, un año antes de lo que estaba planeado originalmente.",
      },
      {
        type: "p",
        text: "Muy lindo el chisme corporativo, pero lo que le interesa a una abogada de contratos — o a vos, emprendedor — es el mecanismo que hay atrás. Y ese mecanismo es exactamente lo que debería tener cualquier contrato de licencia de marca, sin importar si estás licenciando una casa de lujo centenaria o tu marca de indumentaria que recién está creciendo.",
      },
      { type: "p", text: "Te contamos qué cláusulas hicieron posible esta negociación, y qué versión de cada una deberías pedir vos." },
      { type: "h3", text: "1. La cláusula de salida anticipada (y su precio)" },
      {
        type: "p",
        text: 'Ningún contrato de licencia debería asumir que dura para siempre tal como se firmó. Acá, la salida de Coty no fue una ruptura ni un incumplimiento: fue una salida negociada, con un valor puesto sobre la mesa desde el vamos. Eso solo es posible si el contrato original preveía un mecanismo de rescisión anticipada con compensación (en criollo: había una cláusula que le ponía un precio a tu salida), y no un "todo o nada" hasta el vencimiento.',
      },
      {
        type: "p",
        text: "Para tu contrato: si vas a licenciar tu marca, negociá desde el principio qué pasa si alguna de las partes quiere salir antes de tiempo. Sin esa cláusula, una salida temprana se resuelve a los gritos (o en tribunales) en lugar de resolverse con una cifra acordada.",
      },
      { type: "h3", text: "2. Duración pensada para el negocio, no una fecha porque sí" },
      {
        type: "p",
        text: "Una licencia de 50 años es una anomalía incluso en el mundo del lujo, donde lo habitual son ciclos de 5 a 10 años renovables. Que L'Oréal haya pedido medio siglo dice algo: cuando el negocio requiere inversión de largo plazo (desarrollo de producto, distribución global, construcción de marca), la duración del contrato tiene que ser coherente con esa inversión.",
      },
      {
        type: "p",
        text: "Para tu contrato: la pregunta no es \"¿cuántos años pongo?\" sino \"¿cuánto tiempo necesita la otra parte para recuperar lo que va a invertir, y cuánto control quiero conservar yo sobre mi marca en el mientras tanto?\"",
      },
      { type: "h3", text: "3. Quién puede tomar la posta (y bajo qué condición)" },
      {
        type: "p",
        text: "Acá está lo más interesante desde lo técnico: el acuerdo entre Kering y L'Oréal para la licencia de Gucci se firmó en octubre de 2025, pero quedó condicionado a que primero terminara el contrato vigente con Coty. Es decir, se dejó todo listo de antemano para que, el día que Coty se fuera, L'Oréal pudiera entrar sin fricciones ni vacíos legales.",
      },
      {
        type: "p",
        text: "Para tu contrato: si tenés (o vas a tener) más de una licencia sobre la misma marca, o preveés un cambio de licenciatario en el futuro, esa sucesión se puede planificar con anticipación. No hace falta que esperes al día que el contrato anterior se cae.",
      },
      { type: "h3", text: "4. Litigios pendientes, resueltos como condición de salida" },
      {
        type: "p",
        text: "Un dato que no suele salir en los titulares: como parte de este acuerdo, Coty, Gucci y Kering resolvieron en conjunto todos los litigios pendientes relacionados con la licencia. Eso significa que había tensión contractual sin resolver, y la salida se usó como oportunidad para cerrar todo el paquete de una vez, en lugar de arrastrar juicios en paralelo a la transición.",
      },
      {
        type: "p",
        text: "Para tu contrato: una cláusula de resolución de disputas clara (y, ojalá, con instancias antes de llegar a juicio) te ahorra justamente esto: negociar una salida mientras seguís litigando por separado.",
      },
      { type: "h3", text: "5. La transición no es solo firmar y listo" },
      {
        type: "p",
        text: "El pago de los USD 400 millones no es un solo cheque: una parte se cobra al firmar, otra en cuotas futuras, y una porción queda condicionada al cumplimiento de ciertos requisitos. Además, Coty se comprometió a vender a Kering el stock de productos necesario para que la transición no deje góndolas vacías.",
      },
      {
        type: "p",
        text: "Para tu contrato: pensá la salida como un proceso, no como un evento. ¿Qué pasa con el stock, los pedidos en curso, los clientes, el material de marketing con tu marca? Es más fácil negociar un contrato el día uno, cuando todos están contentos de entrar a esa relación comercial, que el día que se están yendo, cuando ya hay fricciones. No dejes atada al azar la continuidad de tu marca y tu negocio.",
      },
      {
        type: "p",
        text: "Ojo: esto no es una fórmula para copiar y pegar. Cada marca, cada industria y cada relación comercial tienen su propia lógica, y las cláusulas que le sirven a una licencia de lujo de 50 años no son necesariamente las que te sirven a vos. Pero la lista de preguntas —salida, duración, sucesión, disputas, transición— es la misma para cualquier escala.",
      },
    ],
  },
  {
    slug: "bienvenidas-a-sello-legal",
    title: "Bienvenidas a Sello Legal — el derecho como aliado de tu negocio",
    excerpt:
      "Quiénes somos, por qué existe Sello Legal, y qué te vas a encontrar en este espacio: el derecho explicado en criollo, para que sea una herramienta y no una traba.",
    date: "2026-06-28",
    dateDisplay: "28 de junio de 2026",
    sourceUrl: "https://sellolegal.substack.com/p/bienvenidas-a-sello-legal-el-derecho",
    body: [
      {
        type: "p",
        text: "Si estás emprendiendo o ya tenés tu negocio en marcha, sabés lo que se siente: hay mil cosas que resolver, y el tema legal siempre queda para después.",
      },
      { type: "p", text: "Hasta que deja de poder esperar…" },
      {
        type: "p",
        text: "Ya sea porque alguien registró la marca que vos venías usando antes que vos, porque firmaste un contrato sin leerlo bien y ahora tenés que cumplir obligaciones que no entendiste, porque no sabés qué figura societaria te conviene, o simplemente porque nunca tuviste a nadie que te explicara todo esto en un lenguaje que tenga sentido para vos.",
      },
      { type: "p", text: "Para eso estamos acá, para hacerlo accesible para vos." },
      { type: "h3", text: "Quiénes somos" },
      { type: "p", text: "Somos Melanie y Agustina, dos abogadas que decidieron hacer las cosas diferente." },
      {
        type: "p",
        text: "Melanie es abogada y agente de propiedad industrial. Hija de emprendedores, creció viendo de cerca las frustraciones y la pasión de quienes construyen sus propios proyectos. Inició su carrera en el área de asuntos regulatorios dentro de una multinacional, lo que le dio una perspectiva única: entiende cómo se estructuran las grandes empresas y puede traducir eso a lo que necesitan los proyectos más chicos.",
      },
      {
        type: "p",
        text: "Agustina es abogada con un background corporativo y de compliance. Su especialidad es la prevención de riesgos: llegar antes de que el problema exista. Porque el mejor conflicto legal es el que nunca ocurre.",
      },
      {
        type: "p",
        text: "Ambas nos estamos especializando en propiedad intelectual, industrias creativas y nuevas tecnologías — porque el mundo cambia y el derecho tiene que acompañar ese cambio.",
      },
      {
        type: "p",
        text: '"Queremos ser tus socias estratégicas, no las abogadas a las que llamás cuando ya todo está en llamas."',
      },
      { type: "h3", text: "Por qué existe Sello Legal" },
      {
        type: "p",
        text: "Sello Legal nació de una convicción compartida: el derecho tiene que ser tu aliado para crecer, no una carga.",
      },
      {
        type: "p",
        text: "Durante años vimos cómo los emprendedores y las empresas en crecimiento se acercaban al mundo legal solo cuando ya había un problema. Y entendimos que eso no es culpa de ellos — es culpa de cómo se comunica el derecho. Técnico, distante, intimidante.",
      },
      {
        type: "p",
        text: "Nuestra propuesta es otra: acompañarte desde el principio, con una estrategia legal sólida que crezca con tu negocio. Que el abogado deje de ser el que te frena y pase a ser el que te potencia.",
      },
      {
        type: "p",
        text: "Nos especializamos en propiedad intelectual, contratos, derecho societario, y derecho del consumidor aplicado a empresas — siempre desde la perspectiva del emprendedor y la empresa que quiere crecer bien.",
      },
    ],
  },
  {
    slug: "congreso-latinoamericano-derecho-de-la-moda",
    title: "Tercer año consecutivo en el Congreso latinoamericano de derecho de la moda",
    excerpt:
      "El congreso tuvo un desfile de expertos que nos sorprendieron con la calidad, dedicación y pasión en sus exposiciones sobre derecho de la moda en Latinoamérica.",
    date: "2026-08-23",
    dateDisplay: "23 de agosto de 2026",
    sourceUrl: "https://sellolegal.substack.com/p/tercer-ano-consecutivo-en-el-congreso",
    body: [
      {
        type: "p",
        text: "Qué tarea difícil resumir dos días repletos de conocimiento. En un mundo cada vez más virtual y lejano, estos encuentros presenciales y repletos de colegas apasionados, dispuestos a compartir su saber, hay que celebrarlo.",
      },
      {
        type: "p",
        text: "Es mi tercer año asistiendo al congreso, y una vez más el Instituto brindó un evento enriquecedor que invita a descubrir y a mirar otra vez algo que ya creías conocido.",
      },
      {
        type: "p",
        text: "De las exposiciones, no tengo más que palabras de elogio. Desbordaron conocimiento, pero sobre todo pasión por el área de expertise de cada invitado. Aprendimos sobre tintes creados en base a bacterias extremófilas, visitamos y nos deleitamos con el desierto florido, y nos entristecimos por la realidad del descarte textil y la contaminación que provoca en el desierto de Atacama.",
      },
      {
        type: "p",
        text: "Tuvimos testimonios de primera mano de la situación actual de la industria de la moda, tanto en Buenos Aires como en distintas provincias argentinas (entre ellas Santa Fe y Córdoba), y de distintos países de Latinoamérica: Brasil, Perú, Paraguay, Chile y Uruguay.",
      },
      {
        type: "p",
        text: "También hicimos un recorrido especial por la disciplina del derecho de la moda: su desembarco en 2013 en Argentina, la creación del Instituto de Derecho de la Moda del Colegio de Abogados de la Capital Federal, y las primeras ofertas académicas de la disciplina.",
      },
      {
        type: "p",
        text: 'En resumen, fue una jornada llena de conocimiento, nuevos disparadores para repensar el derecho, networking con colegas apasionados, y una gran oportunidad para "introducirse a los lugares que uno quiere estar".',
      },
      { type: "p", text: "Un saludo fashionista, Melanie Machado — Sello Legal Consultoría." },
    ],
  },
]

blogPosts.push(
  {
    slug: "tu-obra-ya-entreno-una-ia-sin-que-lo-sepas",
    title: "¿Tu obra ya entrenó una IA sin que lo sepas?",
    excerpt:
      "Publicaste una foto en 2019. Hoy puede estar dentro de una IA, sin que lo sepas, y sin haber cobrado un peso por eso. En Argentina, hoy, no hay ley que lo resuelva.",
    date: "2026-09-03",
    dateDisplay: "3 de septiembre de 2026",
    sourceUrl:
      "https://www.linkedin.com/pulse/tu-obra-ya-entren%C3%B3-una-ia-sin-que-lo-sepas-sello-legal-218tf/",
    body: [
      {
        type: "p",
        text: "Publicaste una foto en 2019. Hoy puede estar dentro de una IA, sin que lo sepas, y sin haber cobrado un peso por eso.",
      },
      { type: "p", text: "Suena paranoico. No lo es. Y es un problema que en Argentina todavía nadie se animó a resolver." },
      {
        type: "p",
        text: 'Vengo siguiendo de cerca cómo distintos países están lidiando con una pregunta que parece técnica pero es puramente de propiedad intelectual: cuando un modelo de IA "aprende" leyendo millones de textos, fotos o canciones protegidas por derecho de autor, ¿está copiando o está simplemente inspirándose, como haría cualquier persona que lee mucho y después escribe distinto?',
      },
      { type: "p", text: "La respuesta cambia según el país, y ahí está lo que más me llama la atención del tema." },
      {
        type: "p",
        text: 'Un tribunal europeo le frenó a una empresa de IA el argumento de que "solo procesa patrones matemáticos": si lo que sale del sistema se parece demasiado a una canción protegida que entró como insumo, para ese juez hay copia, y da lo mismo si estaba disponible gratis en internet — estar publicado no es lo mismo que estar autorizado.',
      },
      {
        type: "p",
        text: "Del otro lado del mundo, la lógica fue distinta: un juez consideró que entrenar con material protegido puede estar permitido si el resultado es lo suficientemente transformador y no le compite al original. Ahora, ese mismo razonamiento no salvó a la empresa de una condena histórica: terminó pagando la indemnización por derechos de autor más alta jamás vista en Estados Unidos, no por entrenar, sino por cómo había juntado el material — apropiándose de libros que nunca compró ni tuvo autorización para usar.",
      },
      {
        type: "p",
        text: 'Dos países, dos criterios completamente distintos para el mismo dilema. Y ojo: ninguno de los dos le da al autor una herramienta simple para saber si su obra específica fue usada. Esa es la parte que menos se discute y más me preocupa como abogada de PI: aunque existiera la ley perfecta, hoy es prácticamente imposible auditar qué hay "adentro" de un modelo entrenado.',
      },
      {
        type: "p",
        text: "Trasladado a Argentina, el panorama es más simple de describir porque directamente no existe: la Ley 11.723 le reconoce al autor el derecho exclusivo sobre su obra, pero fue redactada para un mundo de libros, discos y películas, no para sistemas que procesan millones de obras como insumo estadístico. No hay norma, no hay criterio judicial, no hay nada todavía.",
      },
      {
        type: "p",
        text: "Esto le pega directo a mucha más gente de la que parece: fotógrafos, diseñadores, escritores, agencias de contenido, marcas con catálogos propios. Si publicás tu trabajo online, hoy no tenés forma de saber ni de impedir que alimente un modelo de IA. Y si usás IA para producir contenido para tu marca, tampoco tenés forma de saber con qué se entrenó esa herramienta ni qué riesgo estás heredando vos.",
      },
      {
        type: "p",
        text: "Mi postura: no vamos a resolver esto estirando una ley pensada para el papel y el vinilo hasta que le entre un algoritmo por la fuerza. Argentina necesita una discusión propia sobre esto, y cuanto antes la demos, menos nos va a terminar imponiendo la respuesta algún tribunal extranjero o alguna empresa de tecnología.",
      },
    ],
  },
  {
    slug: "zara-vs-benito-fernandez-tamano-no-gana-juicios-de-marcas",
    title: "Zara vs. Benito Fernández: por qué el tamaño no gana juicios de marcas",
    excerpt:
      "No siempre gana la empresa más grande. En el derecho de marcas argentino, lo que decide es la prioridad registral y el riesgo de confusión — no el poder económico de las partes.",
    date: "2026-07-21",
    dateDisplay: "21 de julio de 2026",
    sourceUrl:
      "https://www.linkedin.com/pulse/zara-vs-benito-fern%C3%A1ndez-por-qu%C3%A9-el-tama%C3%B1o-gana-juicios-sello-legal-9i0ef/",
    body: [
      { type: "p", text: "No siempre gana la empresa más grande. En el derecho de marcas, esa es la regla más que la excepción." },
      {
        type: "p",
        text: 'Lo digo a raíz del conflicto entre Benito Fernández y Zara por la colección "Benito Antonio", desarrollada junto a Bad Bunny, que generó bastante debate —no siempre bien informado— sobre quién tiene más chances de prevalecer.',
      },
      {
        type: "p",
        text: "Conviene aclarar el punto de partida: el sistema marcario argentino no evalúa la envergadura económica de las partes. Se estructura sobre dos ejes concretos: la prioridad registral (quién inscribió el signo primero) y la existencia de riesgo de confusión para el consumidor. Ningún otro factor incide en ese análisis.",
      },
      {
        type: "p",
        text: 'Aplicado al caso: Benito Fernández es titular de la marca BENITO, registrada hace más de 40 años en la industria de indumentaria. Zara, en el marco de su colaboración con Bad Bunny, lanzó una cápsula denominada "Benito Antonio" —en referencia al nombre real del artista— dentro de esa misma clase de productos. Se configura así una coincidencia denominativa relevante, en idéntico rubro, sobre una marca con antecedente registral previo. Es precisamente el tipo de situación que la normativa marcaria fue concebida para resolver.',
      },
      {
        type: "p",
        text: "La dimensión comercial de Zara —su presencia internacional o su volumen de facturación— resulta ajena a ese análisis. Lo que sí es determinante es la anterioridad registral y la probabilidad de que el público asocie ambos signos.",
      },
      {
        type: "p",
        text: "Vale la pena señalar, además, que la jurisprudencia argentina registra numerosos precedentes en los que compañías multinacionales no lograron prevalecer frente a titulares de marcas de menor escala, precisamente porque el criterio decisivo nunca fue el poder económico de las partes.",
      },
      {
        type: "p",
        text: "¿Implica esto que el resultado favorece a Benito Fernández? No necesariamente. La resolución del caso dependerá de la prueba que se produzca y de la valoración judicial del riesgo de confusión en el caso concreto. Pero sostener que una de las partes carece de posibilidades por su tamaño no constituye un argumento jurídico válido.",
      },
      {
        type: "p",
        text: "En materia marcaria, no prevalece quien tiene mayor poder de mercado, sino quien acredita prioridad registral y riesgo real de confusión.",
      },
    ],
  },
  {
    slug: "inpi-nulidad-y-caducidad-de-marcas",
    title: "INPI reescribió cómo se tramitan la nulidad y la caducidad de marcas",
    excerpt:
      "La Resolución RESOL-2026-215-APN-INPI#MEC reemplaza por completo el reglamento vigente desde 2019. Qué cambia para quien tiene una marca registrada y para quien quiere atacar un registro ajeno.",
    date: "2026-07-07",
    dateDisplay: "7 de julio de 2026",
    sourceUrl:
      "https://www.linkedin.com/pulse/inpi-reescribi%C3%B3-c%C3%B3mo-se-tramitan-la-nulidad-y-caducidad-sello-legal-83ngf/",
    body: [
      {
        type: "p",
        text: "El 3 de julio, el INPI dictó la Resolución RESOL-2026-215-APN-INPI#MEC, que sustituye por completo los reglamentos vigentes desde 2019 (Anexos III y IV de la Res. P-183/2018). No los modifica: los reemplaza enteros. Si tenías estrategias armadas sobre el régimen anterior, hay que releerlas.",
      },
      { type: "h3", text: "Los puntos que cambian el juego" },
      {
        type: "p",
        text: "Se amplía quién puede pedir la nulidad o la caducidad. Antes había que acreditar un derecho subjetivo. Ahora alcanza con invocar y fundar un interés legítimo, concreto, actual y atendible, vinculado con el registro que se quiere caer. Se abre la puerta a más legitimados, pero el reglamento cierra el paso a los planteos abstractos o genéricos. Entra más gente, con más exigencia argumental.",
      },
      {
        type: "p",
        text: "Aparece una notificación fehaciente previa, y es el corazón de la reforma. Desarchivar el expediente de una marca ya concedida implica que muchos titulares se enteren tarde, porque dan el trámite por cerrado. Ahora, antes del traslado, quien inicia la acción debe notificar por medio fehaciente al domicilio real del titular (o al de su apoderado, si vive afuera), identificando registro, marca, clase y acción. Tiene 60 días corridos desde el desarchivo para acreditarlo. Excepción: si la nulidad de oficio se inicia dentro de los 6 meses de publicada la concesión, no hace falta, porque el expediente aún no está archivado.",
      },
      {
        type: "p",
        text: "Se ordena el timing dentro de una oposición. El oponente plantea la nulidad o caducidad al mantener la oposición; el solicitante, al contestar ese traslado. Si los hechos surgen después, cualquiera de las partes puede deducirla de forma autónoma hasta el vencimiento de argumentos finales, y la oposición queda en suspenso hasta que eso quede firme.",
      },
      {
        type: "p",
        text: "Se achica el terreno de la nulidad administrativa. La competencia del INPI sigue limitada al inciso a) del art. 24 de la Ley 22.362. Ahora el reglamento aclara: no se tramitarán planteos que mezclen los incisos b) o c). Hay que saber bien por dónde encausar cada reclamo.",
      },
      {
        type: "p",
        text: "La caducidad de oficio pide cuatro condiciones juntas: falta de uso en 5 años, no presentación de la declaración jurada de medio término (art. 26), que no sea marca notoria, y que el titular no tenga una idéntica en clase vinculada sin declarar su uso. Un estándar duro que protege al titular diligente.",
      },
      {
        type: "p",
        text: "Se suma un paquete de celeridad: plazos perentorios e improrrogables, vista acotada al peticionante solo ante hechos nuevos o prueba, y exclusión de los recursos ordinarios del RLPA.",
      },
      {
        type: "p",
        text: "Dato clave: hay cláusula transitoria. En expedientes en trámite, iniciados antes de esta resolución, donde el titular no se presentó a defenderse, igual corresponde notificar el desarchivo antes de seguir.",
      },
      {
        type: "p",
        text: "¿Titular de una marca? Revisá que tu domicilio real y tus declaraciones juradas de uso estén al día. ¿Pensás atacar un registro ajeno? El acceso se amplió, pero también la carga formal: fundamentar bien y notificar en plazo. Un tropiezo ahí frustra todo el planteo.",
      },
      {
        type: "p",
        text: "Me parece una reforma con doble objetivo: más acceso para depurar marcas sin uso, y más garantías para quien ya tiene un derecho adquirido.",
      },
    ],
  },
)

export function getBlogPost(slug: string): BlogPost | null {
  return blogPosts.find((p) => p.slug === slug) ?? null
}
