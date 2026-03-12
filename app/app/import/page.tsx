'use client'
import { Dropzone } from '@/app/src/features/import/components/Dropzone'
import { InvoiceIcon, ReceiptIcon } from '@phosphor-icons/react'

export default function ImportPage() {
  return (
    <main className="bg-background p-8 max-w-5xl mx-auto w-full">
      <h1 className="text-2xl font-bold mb-4">Importación de Datos</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Dropzone
          title="Reporte de PedidosYa"
          description="Arrastra aquí tu CSV de pedidos o haz click para subir un archivo."
          buttonLabel="Subir Reporte"
          icon={ReceiptIcon}
        />
        <Dropzone
          title="Estado de Cuenta BCP"
          description="Arrastra aquí tu CSV de pedidos o haz click para subir un archivo."
          buttonLabel="Subir Estado de Cuenta"
          icon={InvoiceIcon}
        />
      </section>
    </main>
  )
}
