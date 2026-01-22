
import { useState, type ReactNode } from 'react'
import { SectionContext } from './SectionContext'
import { type Section } from '../types/types'




export const SectionProvider = ({ children }: { children: ReactNode }) => {
    const [section, setSection] = useState<Section>('historia')

    return (
        <SectionContext.Provider value={{ section, setSection }}>
            {children}
        </SectionContext.Provider>
    )
}

