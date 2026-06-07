import { useState, useEffect } from 'react'

interface UseWorldClockReturn {
  time: string
  date: string
  dayOfWeek: string
  isoString: string
}

export const useWorldClock = (timezone: string = 'UTC'): UseWorldClockReturn => {
  const [clockData, setClockData] = useState<UseWorldClockReturn>({
    time: '',
    date: '',
    dayOfWeek: '',
    isoString: '',
  })

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()

      try {
        // Formato de hora
        const timeFormatter = new Intl.DateTimeFormat('pt-BR', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })

        // Formato de data
        const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
          timeZone: timezone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })

        // Dia da semana
        const dayFormatter = new Intl.DateTimeFormat('pt-BR', {
          timeZone: timezone,
          weekday: 'long',
        })

        setClockData({
          time: timeFormatter.format(now),
          date: dateFormatter.format(now),
          dayOfWeek: dayFormatter.format(now),
          isoString: now.toISOString(),
        })
      } catch (error) {
        console.error(`Erro ao atualizar relógio para timezone ${timezone}:`, error)
      }
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return clockData
}

export default useWorldClock
