export type Photo = { src: string; alt: string; width: number; height: number };

const p = (n: string, alt: string, height = 695): Photo => ({
  src: `/images/gallery/${n}.webp`,
  alt,
  width: 900,
  height,
});

/** Portfolio photos, keyed by where they are used on the page. */
export const PHOTOS = {
  farmer: p("01", "Agricultor consultando una tableta al atardecer entre cultivos"),
  team: p("02", "Equipo de trabajo revisando datos frente a un computador en una oficina", 692),
  agent: p("03", "Agente de contact center con diadema sonriendo a cámara"),
  social: p("04", "Manos usando un celular con íconos de redes sociales flotando", 596),
  harvest: p("05", "Mujer recolectando hojas en un cultivo verde", 696),
  code: p("06", "Persona interactuando con una pantalla de código HTML y CSS"),
  outdoor: p("07", "Mujer con laptop conversando al aire libre", 693),
  desk: p("08", "Vista aérea de un escritorio con laptops y reportes de datos", 675),
  datacenter: p("09", "Técnico con laptop en un centro de datos", 697),
  keyboard: p("10", "Manos escribiendo en un teclado dentro de un contact center"),
  park: p("11", "Mujer revisando su laptop en un parque"),
  space: p("12", "Diseño de un espacio interior con sofá rojo y escalera"),
} as const satisfies Record<string, Photo>;
