# BEARS

BEARS es una aplicación web conceptual que reflexiona sobre los límites éticos entre los humanos y la vida salvaje, tomando como punto de partida los encuentros reales entre personas y osos grizzly documentados en Grizzly Man y Bear-Like. El proyecto no busca explicar ni sentenciar, sino abrir un espacio de cuestionamiento sobre la observación, la intervención y la cercanía humana con la naturaleza.

## Concepto

La experiencia se divide en dos capas complementarias. Por un lado, `Historia`, que presenta un relato filosófico en español que contextualiza el proyecto y plantea preguntas sobre la mirada humana hacia la naturaleza. Por otro, `Sobre Ellos`, que ofrece información estructurada sobre los osos grizzly (hábitat, alimentación, comportamiento, amenazas y futuro), funcionando como un contrapunto informativo y educativo.

BEARS se define explícitamente como un proyecto conceptual y reflexivo, creado para explorar estas tensiones desde múltiples ángulos sin pretender ofrecer una verdad definitiva. El objetivo es invitar al visitante a confrontar sus propias ideas sobre la convivencia —o el conflicto— entre humanos y vida salvaje, manteniendo siempre la pregunta abierta.

## 🧱 Tech stack

React (Vite) · TypeScript · React Router · Framer Motion · TailwindCSS v4

## Flujo de la web

Este es un frontend-only sin backend - toda la lógica está en el cliente. El flujo principal es: precargar → mostrar puertas con imágenes cíclicas → usuario abre puertas → navegar entre secciones con las puertas abiertas.

### Inicialización y estado inicial

<!--
const [isOpen, setIsOpen] = useState(false);
const [currentLeft, setCurrentLeft] = useState(0)
const [currentRight, setCurrentRight] = useState(0)
const imagesLoaded = usePreloadImages(allImages); -->

1. Precarga de imágenes: usePreloadImages carga todas las imágenes de las puertas usePreloadImages.ts
2. Ciclo de imágenes: Cuando isOpen es false, las imágenes cambian cada 4 segundos App.tsx
3. Apertura de puertas: User click → toggleDoors() → setIsOpen(true) App.tsx

### Flujo de navegación

1. Header navigation: Abre puertas y establece sección Header.tsx
2. Contexto global: SectionProvider maneja section: 'historia' | 'sobre' SectionContext.tsx
3. Renderizado condicional: AnimatePresence muestra Historia o SobreEllos según section DoorOverlay.tsx

### Estado 'isOpen'

`isOpen` coordina múltiples animaciones simultáneas:

1. DoorOverlay: Anima puertas abiertas/cerradas DoorOverlay.tsx
2. Header y Footer: Desaparecen cuando las puertas abren Header.tsx
3. Aparece tanto el contenido dinámico (sección 'Historia' o 'Sobre ellos'), como un header de navegación entre páginas.

## Comandos disponibles

- npm install - Comando estándar de npm para instalar dependencias
- npm run dev - Inicia servidor de desarrollo con Vite
- npm run build - Compila TypeScript y construye bundle para producción
- npm run lint - Ejecuta ESLint para revisar código package.json:9
- npm run preview - Previsualiza la build de producción localmente

## Configuraciñón básica e Información de instalación

TailwindCSS v4 con configuración personalizada de fuentes Ubuntu en tailwind.config.js

### Versiones específicas:

- React 18.2.0
- TypeScript 5.9.3
- Vite 7.2.4
- Framer Motion 12.26.2
- TailwindCSS v4

### Requisitos:

- Requisitos

Node.js 18+  
npm 9+

- Instalación

npm install  
npm run dev

## Autor

- Jaume Esquerdo · [LinkedIn](https://www.linkedin.com/in/jaume-esquerdo/) · [GitHub](https://github.com/JaumeEsquerdo)

## Mejoras a futuro

- CMS dinámico: Actualmente sobreEllosData está en JSON estático sobreEllos.ts:8-81 . Se podría implementar un CMS headless para actualizar contenido sin tocar código.
- Accesibilidad: Crear lógica q deje entrar por las puertas y manejarse con las keyboards, actualmente casi que solo se puede hacer mediante clicks.
- Crossfade: Se podría realizar un crossfade del carousel de imgs que pasan cada x segundos en la sección 'Sobre Ellos'. Poniendo un div como principal y (así nunca tener un frame vacío porq siempre habría una img puesta), donde se juegue con dos imgs cambiando su src de cada una. Una img sería la previa y la otra la siguiente, así se podría hacer un face con opacidades.
