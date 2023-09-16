'use client'
import React, { ReactNode } from 'react'
import '@/styles/globals.css'

interface Props {
    children: ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default MainLayout
