import { FooterContenido } from './FooterContenido'
import { screen } from '@testing-library/react'
import { test, describe, expect } from 'vitest'
import { render } from '../tests/test-utils'

/*
  Test para el componente FooterContenido:
  
  - Se usa nuestro `custom render` que envuelve el componente con SectionProvider,
    así los hooks de contexto como useSection funcionan correctamente.
  - `screen.getByText(/créditos/i)` verifica que el texto CRÉDITOS
    se renderiza correctamente en el DOM.
  - Este test sirve de ejemplo de cómo testear componentes que dependen de providers.
*/

describe('Componente Footer del contenido', () => {
    test('test del btn de crédtios', () => {
        render(
            <FooterContenido /> // renderiza el componente con contexto
        );

        expect(screen.getByText(/créditos/i)).toBeInTheDocument();
    })
})
