import React from 'react'
import Banner from '../Banner'
import { Outlet } from 'react-router-dom'

export default function PaginaPadrao() {
  return (
    <main>
        <Banner />
        {/* Reederizar conteudo da rota */}
        <Outlet/>
    </main>
  )
}