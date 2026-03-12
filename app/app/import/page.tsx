import { Dropzone } from '@/app/src/features/upload/components/Dropzone'

export default function Upload() {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto">
      <div className="p-8 max-w-5xl mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Importar Archivos
          </h2>
          <p className="text-slate-500 mt-2">
            Sube tus archivos de PedidosYa (ERP) y Pagos (Estado de cuenta) para
            realizar el cruce automático.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Dropzone
            title={'Archivo de PedidosYa'}
            description={
              'Arrastra aquí tu CSV de pedidos o haz clic para buscar.'
            }
            buttonLabel={'Subir reporte PedidosYa'}
          />
          <div className="group relative flex flex-col items-center justify-center border-2 border-dashed border-primary/30 hover:border-primary bg-white dark:bg-slate-900 rounded-xl p-10 transition-all cursor-pointer">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">
                payments
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Archivo de Pagos
            </h3>
            <p className="text-sm text-slate-500 text-center mt-2 px-4">
              Arrastra aquí tu CSV de pagos o haz clic para buscar.
            </p>
            <input
              className="absolute inset-0 opacity-0 cursor-pointer"
              type="file"
            />
            <button className="mt-4 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-colors">
              Seleccionar Pagos
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
