export type Metric = {
  value: string;
  suffix?: string;
  label: string;
  numeric?: number;
};

export const METRICS: Metric[] = [
  { value: "70", suffix: "+", numeric: 70, label: "Agentes operando simultáneamente" },
  { value: "1.500", suffix: "+", numeric: 1500, label: "Usuarios atendidos en simultáneo" },
  { value: "360", suffix: "°", numeric: 360, label: "Ecosistema integrado" },
  { value: "Nacional", label: "Escalabilidad departamental y nacional" },
];

export type SubService = {
  title: string;
  description: string;
};

export type Solution = {
  id: string;
  index: string;
  category: string;
  title: string;
  positioning: string;
  subservices: SubService[];
};

export const SOLUTIONS: Solution[] = [
  {
    id: "digital-marketing",
    index: "01",
    category: "Marketing Digital",
    title: "Marketing digital, publicidad y captación estratégica",
    positioning: "Convertimos la atención digital en oportunidades medibles.",
    subservices: [
      {
        title: "Planificación y pauta multicanal",
        description:
          "Diseño, ejecución y optimización de campañas publicitarias en plataformas digitales (Social Ads, Search, Display) enfocadas en conversión y posicionamiento.",
      },
      {
        title: "Analítica y performance",
        description:
          "Monitoreo, seguimiento y auditoría en tiempo real del retorno de inversión (ROI) y del cumplimiento de metas institucionales.",
      },
      {
        title: "Prospección y convocatoria masiva",
        description:
          "Estrategias orientadas a la captación de prospectos (leads), la generación de conversaciones directas y la vinculación efectiva con poblaciones objetivo.",
      },
    ],
  },
  {
    id: "territorial-strategies",
    index: "02",
    category: "Estrategias Territoriales",
    title: "Estrategias territoriales y apropiación digital",
    positioning: "Transformamos las iniciativas digitales en impacto territorial real.",
    subservices: [
      {
        title: "Campañas de promoción y divulgación",
        description:
          "Diseño e implementación de programas de concientización, socialización y acciones de campo para proyectos de impacto social y regional.",
      },
      {
        title: "Diagnóstico digital y levantamiento de campo",
        description:
          "Levantamiento de datos en territorio para identificar necesidades de conectividad, inclusión y beneficios digitales.",
      },
      {
        title: "Cierre de brecha digital",
        description:
          "Campañas orientadas a la apropiación digital, la adopción de tecnología y la vinculación directa con el usuario final.",
      },
    ],
  },
  {
    id: "contact-center",
    index: "03",
    category: "Contact Center / BPO",
    title: "Contact center y conversión operativa (BPO)",
    positioning: "Operaciones humanas diseñadas para convertir conversaciones en resultados.",
    subservices: [
      {
        title: "Atención y conversión de leads",
        description:
          "Operación masiva con más de 70 agentes operando simultáneamente para gestionar las conversaciones y los registros generados por las campañas digitales.",
      },
      {
        title: "Contact center multicanal",
        description:
          "Infraestructura para la atención, el soporte y la fidelización de más de 1.500 usuarios en simultáneo, garantizando la satisfacción del cliente final.",
      },
      {
        title: "Telemercadeo y confirmación",
        description:
          "Validación de datos, encuestas telefónicas y seguimiento de los procesos de convocatoria.",
      },
    ],
  },
  {
    id: "web-technology",
    index: "04",
    category: "Web y Tecnología",
    title: "Ecosistema web y soporte tecnológico",
    positioning: "Tecnología construida para el rendimiento, la escalabilidad y la experiencia.",
    subservices: [
      {
        title: "Desarrollo de landing pages y sitios web",
        description:
          "Creación de plataformas web optimizadas para campañas publicitarias, estrategias de posicionamiento SEO/SEM y una experiencia de usuario (UX/UI) óptima.",
      },
      {
        title: "Servidores y hosting de alta disponibilidad",
        description:
          "Gestión, administración y soporte de infraestructura en la nube para garantizar un rendimiento continuo ante picos de tráfico web.",
      },
      {
        title: "Soporte y mantenimiento especializado",
        description:
          "Acompañamiento técnico continuo e integración de herramientas tecnológicas de vanguardia.",
      },
    ],
  },
  {
    id: "btl-events",
    index: "05",
    category: "ATL, BTL y Eventos",
    title: "Publicidad ATL y BTL, y producción de eventos",
    positioning: "Llevamos tu marca a los medios, a la calle y a las experiencias que generan impacto.",
    subservices: [
      {
        title: "Publicidad ATL",
        description:
          "Campañas en medios masivos: televisión, radio, prensa, vallas y publicidad exterior para ganar reconocimiento de marca a gran escala.",
      },
      {
        title: "Activaciones BTL y marketing experiencial",
        description:
          "Activaciones de marca, impulso en punto de venta, brigadas y experiencias que conectan directamente con tu público objetivo.",
      },
      {
        title: "Producción de eventos y adecuación de espacios",
        description:
          "Lanzamientos, ferias y eventos corporativos con montaje, logística y escenarios a la medida, sin sobrecostos y con calidad garantizada.",
      },
    ],
  },
];

export const ECOSYSTEM_STEPS = [
  { label: "Estrategia digital", short: "Estrategia" },
  { label: "Publicidad", short: "Publicidad" },
  { label: "Landing page / Web", short: "Web" },
  { label: "Captación de leads", short: "Leads" },
  { label: "Contact Center", short: "Contact Center" },
  { label: "Conversión", short: "Conversión" },
  { label: "Seguimiento", short: "Seguimiento" },
  { label: "Analítica", short: "Analítica" },
  { label: "Impacto territorial", short: "Territorio" },
] as const;

export type EcosystemNode = {
  id: string;
  label: string;
  description: string;
  connections: string[];
};

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: "strategy",
    label: "Estrategia",
    description:
      "Diseño de estrategia digital y territorial: planificación de campañas, definición de audiencias y hoja de ruta para resultados medibles.",
    connections: ["marketing", "territory"],
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Pauta multicanal, campañas de search, social y display diseñadas para la generación de leads y la prospección estratégica.",
    connections: ["technology", "conversion"],
  },
  {
    id: "technology",
    label: "Tecnología",
    description:
      "Landing pages, sitios corporativos e infraestructura en la nube que captan y enrutan la demanda hacia el ecosistema.",
    connections: ["people", "marketing"],
  },
  {
    id: "people",
    label: "Personas",
    description:
      "Operación de contact center multicanal: más de 70 agentes gestionando conversaciones, soporte y fidelización a gran escala.",
    connections: ["conversion", "technology"],
  },
  {
    id: "territory",
    label: "Territorio",
    description:
      "Activación en campo, inclusión digital y programas de apropiación TIC que llevan el ecosistema a las comunidades.",
    connections: ["strategy", "conversion"],
  },
  {
    id: "conversion",
    label: "Conversión",
    description:
      "Medición, seguimiento y reportería que cierran el ciclo, convirtiendo la operación en resultados transparentes y medibles.",
    connections: ["strategy", "people"],
  },
];

export type WhyPillar = {
  index: string;
  title: string;
  description: string;
};

export const WHY_PILLARS: WhyPillar[] = [
  {
    index: "01",
    title: "Ecosistema 360° (sin intermediarios)",
    description:
      "Integramos pauta digital, plataformas web donde captamos a los usuarios y nuestro equipo de Contact Center que los atiende y convierte.",
  },
  {
    index: "02",
    title: "Capacidad de escalabilidad",
    description:
      "Experiencia comprobada en la gestión de campañas corporativas focalizadas y proyectos de cobertura departamental o nacional.",
  },
  {
    index: "03",
    title: "Rigor operativo",
    description:
      "Métricas transparentes, presupuestos optimizados y un equipo multidisciplinario enfocado en la consecución de objetivos.",
  },
];

export type CapabilityGroup = {
  category: string;
  items: string[];
};

export const CAPABILITIES: CapabilityGroup[] = [
  {
    category: "Estrategia",
    items: ["Estrategia digital", "Planificación de campañas", "Planificación territorial"],
  },
  {
    category: "Marketing",
    items: ["Pauta multicanal", "Generación de leads", "Performance", "Prospección"],
  },
  {
    category: "Tecnología",
    items: [
      "Sitios y landing pages",
      "UX/UI",
      "SEO/SEM",
      "Hosting",
      "Infraestructura en la nube",
      "Soporte técnico",
    ],
  },
  {
    category: "Operaciones",
    items: [
      "Contact center",
      "Telemercadeo",
      "Validación de datos",
      "Conversión",
      "Atención al cliente",
    ],
  },
  {
    category: "Territorio",
    items: [
      "Trabajo de campo",
      "Inclusión digital",
      "Apropiación TIC",
      "Vinculación comunitaria",
    ],
  },
  {
    category: "Eventos",
    items: ["ATL", "BTL", "Producción de eventos", "Adecuación de espacios"],
  },
];

export const CASE_STUDY = {
  eyebrow: "Impacto territorial",
  title: "Inclusión digital y comunicación de amplio alcance en Putumayo.",
  summary:
    'Conectividad y apropiación tecnológica para la inclusión digital en el departamento de Putumayo.',
  highlights: [
    {
      title: "Divulgación y promoción",
      text: "Campañas para que las comunidades conozcan y aprovechen el acceso a internet.",
    },
    {
      title: "Encuestas y trabajo de campo",
      text: "Levantamiento de datos en el territorio, articulando marketing, tecnología y equipos locales.",
    },
    {
      title: "Vinculación comunitaria",
      text: "Acompañamiento directo a las personas para una operación efectiva y cercana.",
    },
  ],
  result:
    "Contribuimos a masificar el acceso a internet y la apropiación tecnológica en el departamento.",
  timeline: [
    {
      label: "Reto",
      description:
        "Masificar el acceso a internet y fortalecer la apropiación de las TIC en el departamento de Putumayo.",
    },
    {
      label: "Estrategia",
      description:
        "Diseño de estrategias de divulgación, promoción y encuestas para llegar a las comunidades del territorio.",
    },
    {
      label: "Ejecución en campo",
      description:
        "Aplicación de encuestas y trabajo de campo, articulando marketing, tecnología y equipos territoriales.",
    },
    {
      label: "Vinculación comunitaria",
      description:
        "Acompañamiento directo a las comunidades para garantizar una operación efectiva y cercana.",
    },
    {
      label: "Impacto",
      description:
        "Contribución a la masificación del acceso a internet y a la apropiación tecnológica en el departamento.",
    },
  ],
};

export const TERRITORY_STORY = {
  title: "De la estrategia digital al territorio real.",
  description:
    "Llevamos tu proyecto desde el escritorio hasta las comunidades, en cualquier municipio, departamento o región.",
  chapters: [
    {
      title: "Escuchamos el territorio",
      text: "Diagnóstico y levantamiento de campo para entender a cada comunidad antes de actuar.",
    },
    {
      title: "Conectamos",
      text: "Canales digitales y tecnología que llegan a las personas, incluso donde antes no llegaban.",
    },
    {
      title: "Activamos en campo",
      text: "Equipos territoriales, promoción y vinculación directa, cara a cara con la gente.",
    },
    {
      title: "Medimos el impacto",
      text: "Datos claros para demostrar resultados reales a tu organización y a tus aliados.",
    },
  ],
  closing: "Cualquier territorio. Un mismo ecosistema.",
  reach: ["Municipios", "Departamentos", "Regiones", "Alcance nacional"],
} as const;

export const SERVICE_OPTIONS = [
  "Marketing Digital",
  "Estrategias Territoriales",
  "Contact Center / BPO",
  "Web y Tecnología",
  "ATL, BTL y Eventos",
  "Solución Integral",
  "Otro",
] as const;
