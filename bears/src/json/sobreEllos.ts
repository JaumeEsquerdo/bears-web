export interface sobreEllosTypes {
  number: number;
  title: string;
  paragraph: string;
  imgs: string[];
}

const sobreEllosData: sobreEllosTypes[] = [
  {
    number: 1,
    title: "Dónde viven",
    paragraph:
      "Los osos grizzly (Ursus arctos horribilis) son grandes mamíferos principalmente de Norteamérica, donde habitan bosques densos, montañas escarpadas, tundra y zonas remotas de Alaska, Canadá y el noroeste de Estados Unidos. Históricamente se extendían mucho más al sur y al este, pero la expansión humana redujo su presencia a núcleos fragmentados. Aun así, poblaciones significativas persisten en áreas como Yellowstone o el Parque Nacional y Reserva Katmai, donde fotógrafos y naturalistas acuden para observarlos junto a ríos rebosantes de salmones.",
    imgs: [
      "/imgs/bear-dondeViven.jpg",
      "/imgs/bear-dondeViven-2.jpg",
      "/imgs/bear-dondeViven-3.jpg",
      "/imgs/bear-dondeViven-4.jpg",
    ],
  },
  {
    number: 2,
    title: "Alimentación",
    paragraph:
      "Son omnívoros oportunistas con una dieta muy variada: desde frutas, raíces y bayas hasta insectos, peces (como el salmón de Katmai) y pequeños mamíferos. Cerca de los ríos llenos de salmones se pueden congregar muchos individuos en temporada de desove, lo que explica por qué documentales y fotógrafos captan escenas tan espectaculares y cercanas — aunque siempre en territorio salvaje.",
    imgs: [
      "/imgs/bear-alimentacion.jpg",
      "/imgs/bear-alimentacion-2.jpg",
      "/imgs/bear-alimentacion-3.jpg",
      "/imgs/bear-alimentacion-4.jpg",
    ],
  },
  {
    number: 3,
    title: "Actividad según las estaciones",
    paragraph:
      "Son más activos entre primavera y otoño, cuando abandonan sus madrigueras tras la hibernación para alimentarse intensamente y acumular grasa. Durante el invierno permanecen en hibernación profunda, reduciendo casi todas sus funciones vitales para conservar energía. El despertar en primavera coincide con la disponibilidad de brotes verdes, insectos y peces, que forman parte de su dieta estacional. ",
    imgs: [
      "/imgs/bear-actividad-primavera-2.jpg",
      "/imgs/bear-actividad-primavera.jpg",
      "/imgs/bear-otoño.webp",
      "/imgs/bear-otoño-2.webp",
    ],
  },
  {
    number: 4,
    title: "Interacción entre ellos",
    paragraph:
      "Los grizzlies son animales solitarios por naturaleza, con interacciones sociales principalmente en zonas de alimento abundante, como bancos de peces o praderas ricas en frutos. En esos puntos pueden verse varias hembras con crías o machos adultos conviviendo temporalmente, pero fuera de esos contextos evitan el contacto directo. Cada individuo marca su territorio y establecen jerarquías claras cuando se cruzan sus caminos.",
    imgs: [
      "/imgs/bear-interaccion.jpg",
      "/imgs/bear-interaccion-2.jpg",
      "/imgs/bear-interaccion-3.jpg",
      "/imgs/bear-interaccion-4.jpg",
    ],
  },
  {
    number: 5,
    title: "Amenazas",
    paragraph:
      "A pesar de que las poblaciones han repuntado en las últimas décadas, los grizzlies siguen enfrentando amenazas reales: la pérdida y fragmentación de su hábitat por desarrollo humano y carreteras, lo que aumenta los conflictos y limita el intercambio genético entre grupos. Además, proyectos de tala o expansión de pastoreo cerca de hábitats críticos han generado decisiones legales y debates ambientales recientes, reflejando la fragilidad de estos espacios.",
    imgs: [
      "/imgs/bear-amenaza.jpg",
      "/imgs/bear-amenaza-2.jpg",
      "/imgs/bear-amenaza-3.jpg",
      "/imgs/bear-amenaza-4.jpg",
    ],
  },
  {
    number: 6,
    title: "El futuro del oso grizzly",
    paragraph:
      "El futuro de los grizzlies combina esperanzas de recuperación con desafíos de coexistencia. Diversos planes de restauración buscan reintroducir poblaciones en zonas históricas como las Cascadas del Norte, y grupos conservacionistas celebran estas iniciativas como pasos importantes para asegurar conexiones entre poblaciones aisladas. Sin embargo, la necesidad de corredores ecológicos, reducción de conflictos humanos y protección de hábitats sigue siendo esencial para que estos emblemáticos osos prosperen en el siglo XXI.",
    imgs: [
      "/imgs/bear-futuro.jpg",
      "/imgs/bear-futuro-2.jpg",
      "/imgs/bear-futuro-3.jpg",
      "/imgs/bear-futuro-4.jpg",
    ],
  },
];

export default sobreEllosData;
