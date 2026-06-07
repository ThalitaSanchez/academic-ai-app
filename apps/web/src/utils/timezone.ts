/**
 * Utilitários para manipulação de fusos horários
 */

export const getTimeInTimezone = (timezone: string, date?: Date): Date => {
  const d = date || new Date()
  const formatter = new Intl.DateTimeFormat('sv-SE', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  const parts = formatter.formatToParts(d)
  const values: Record<string, number> = {}

  parts.forEach(part => {
    if (part.type !== 'literal') {
      values[part.type] = parseInt(part.value, 10)
    }
  })

  return new Date(
    values.year,
    values.month - 1,
    values.day,
    values.hour,
    values.minute,
    values.second
  )
}

export const formatTimeInTimezone = (
  timezone: string,
  date?: Date,
  options?: Intl.DateTimeFormatOptions
): string => {
  const d = date || new Date()
  const defaultOptions: Intl.DateTimeFormatOptions = {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    ...options,
  }

  return new Intl.DateTimeFormat('pt-BR', defaultOptions).format(d)
}

export const getTimezoneOffset = (timezone: string): number => {
  const now = new Date()
  const utcDate = new Date(now.toLocaleString('sv-SE', { timeZone: 'UTC' }))
  const tzDate = new Date(now.toLocaleString('sv-SE', { timeZone: timezone }))
  return (tzDate.getTime() - utcDate.getTime()) / (1000 * 60 * 60)
}

export const convertBetweenTimezones = (
  date: Date,
  fromTimezone: string,
  toTimezone: string
): Date => {
  const fromDate = new Date(date.toLocaleString('sv-SE', { timeZone: fromTimezone }))
  const toDate = new Date(date.toLocaleString('sv-SE', { timeZone: toTimezone }))
  const diff = toDate.getTime() - fromDate.getTime()
  return new Date(date.getTime() + diff)
}

export const getCountriesInTimezone = (timezone: string): string[] => {
  // Mapa básico de timezone para países
  const timezoneMap: Record<string, string[]> = {
    'America/Sao_Paulo': ['Brasil'],
    'America/New_York': ['EUA (Leste)'],
    'America/Los_Angeles': ['EUA (Oeste)'],
    'Europe/London': ['Reino Unido'],
    'Europe/Paris': ['França'],
    'Europe/Berlin': ['Alemanha'],
    'Europe/Lisbon': ['Portugal'],
    'Asia/Tokyo': ['Japão'],
    'Asia/Hong_Kong': ['Hong Kong'],
    'Asia/Singapore': ['Singapura'],
    'Australia/Sydney': ['Austrália'],
    'Pacific/Auckland': ['Nova Zelândia'],
  }

  return timezoneMap[timezone] || []
}

export const isValidTimezone = (timezone: string): boolean => {
  try {
    Intl.DateTimeFormat(undefined, { timeZone: timezone })
    return true
  } catch (error) {
    return false
  }
}

export default {
  getTimeInTimezone,
  formatTimeInTimezone,
  getTimezoneOffset,
  convertBetweenTimezones,
  getCountriesInTimezone,
  isValidTimezone,
}
