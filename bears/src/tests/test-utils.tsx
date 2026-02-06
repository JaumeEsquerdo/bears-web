/* eslint-disable react-refresh/only-export-components */
/*
  Este archivo sirve como "helper" para los tests de React.

  - Proporciona un `render` personalizado que envuelve cualquier componente
    con los providers necesarios (en este caso `SectionProvider`),
    para que hooks como `useSection` funcionen sin explotar.
  - Reexporta todo lo de @testing-library/react para poder usar
    screen, fireEvent, etc., desde este archivo.
  - Esto permite no repetir el provider en cada test.
  - La regla de ESLint `react-refresh/only-export-components` se desactiva
    porque este archivo NO exporta un componente, sino helpers de test.
*/
import { render } from '@testing-library/react'
import { SectionProvider } from '../context/SectionContext.tsx'

// Custom render que envuelve el UI con SectionProvider
const customRender = (ui: React.ReactElement) =>
    render(<SectionProvider>{ui}</SectionProvider>)

// Reexporta todo de Testing Library para no importar desde múltiples lugares
export * from '@testing-library/react'

// Exporta nuestro custom render con el mismo nombre "render"
// para poder usarlo en los tests sin cambiar la API
export { customRender as render }