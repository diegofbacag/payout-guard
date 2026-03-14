export const uploadFile = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch('/api/import/', {
    method: 'POST',

    body: formData,
  })
}
