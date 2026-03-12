'use client'

import { useRef, useState } from 'react'

export function Dropzone({
  icon,
  title,
  description,
  buttonLabel,
  onFileSelect,
}) {
  const inputRef = useRef(null)
  const [fileName, setFileName] = useState(null)

  const handleChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
      onFileSelect?.(file)
    }
  }

  return (
    <div
      className="group relative flex flex-col items-center justify-center border-2 border-dashed border-[#e63746]/30 hover:border-[#e63746] bg-white dark:bg-slate-900 rounded-xl p-10 transition-all cursor-pointer"
      onClick={() => inputRef.current?.click()}
    >
      <div className="w-16 h-16 bg-[#e63746]/10 text-[#e63746] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        {/* <Icon name={icon} size="text-4xl" /> */}
      </div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
        {title}
      </h3>
      {fileName ? (
        <p className="text-sm text-[#e63746] font-medium mt-2">{fileName}</p>
      ) : (
        <p className="text-sm text-slate-500 text-center mt-2 px-4">
          {description}
        </p>
      )}
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
      />
      <button
        className="mt-4 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-lg hover:bg-[#e63746] hover:text-white transition-colors"
        onClick={(e) => {
          e.stopPropagation()
          inputRef.current?.click()
        }}
      >
        {buttonLabel}
      </button>
    </div>
  )
}
