const monthMap: Record<string, string> = {
  'ene.': 'Jan',
  'feb.': 'Feb',
  'mar.': 'Mar',
  'abr.': 'Apr',
  'may.': 'May',
  'jun.': 'Jun',
  'jul.': 'Jul',
  'ago.': 'Aug',
  'sep.': 'Sep',
  'oct.': 'Oct',
  'nov.': 'Nov',
  'dic.': 'Dec',
}

export function parseSpanishDate(raw: string): Date {
  let cleaned = raw
    .replace(/^\S+\s/, '')
    .replace('p. m.', 'PM')
    .replace('a. m.', 'AM')
    .replace(',', '')

  for (const [es, en] of Object.entries(monthMap)) {
    cleaned = cleaned.replace(es, en)
  }

  return new Date(cleaned)
}
