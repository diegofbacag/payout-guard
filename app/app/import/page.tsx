'use client'
import { Dropzone } from '@/app/src/features/import/components/Dropzone'
import { BankIcon, InvoiceIcon } from '@phosphor-icons/react'

export default function ImportPage() {
  return (
    <main className="bg-background p-8 max-w-5xl mx-auto w-full">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Importación de Datos</h1>
        <p className="text-slate-600 text-lg">
          Sube tu reporte de ventas y tu estado de cuenta. Nuestro sistema
          comparará ambos archivos automáticamente para detectar diferencias,
          comisiones o pagos faltantes.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Dropzone
          title="Reporte de PedidosYa"
          description="Arrastra o sube el CSV exportado desde PedidosYa con el detalle de pedidos."
          icon={InvoiceIcon}
        />
        <Dropzone
          title="Estado de Cuenta BCP"
          description="Arrastra aquí o haz click para subir el CSV de tu estado de cuenta del banco."
          icon={BankIcon}
        />
      </section>
    </main>
  )
}
