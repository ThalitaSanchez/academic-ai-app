import React, { useState, useEffect } from 'react'
import { Clock } from 'lucide-react'

interface TimeZoneConfig {
  name: string
  timezone: string
  label: string
  color: string
}

const TimezoneClock: React.FC<TimeZoneConfig> = ({ name, timezone, label, color }) => {
  const [time, setTime] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('pt-BR', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
        setTime(formatter.format(new Date()))
        setLoading(false)
      } catch (error) {
        console.error(`Erro ao formatar hora para ${timezone}:`, error)
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  if (loading) {
    return (
      <div className={`${color} p-6 rounded-lg shadow-lg animate-pulse`}>
        <div className="h-8 bg-slate-300 rounded w-3/4 mb-2"></div>
      </div>
    )
  }

  return (
    <div className={`${color} p-6 rounded-lg shadow-lg border-2 border-opacity-30 hover:shadow-xl transition-shadow`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{name}</h3>
        <Clock className="w-5 h-5 text-slate-600 dark:text-slate-400" />
      </div>
      <div className="text-4xl font-mono font-bold text-slate-900 dark:text-white tracking-wider">
        {time}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{label}</p>
    </div>
  )
}

export const MultiTimezoneClock: React.FC = () => {
  const timezones: TimeZoneConfig[] = [
    {
      name: '🌎 São Paulo',
      timezone: 'America/Sao_Paulo',
      label: 'Horário de Brasília (BRT)',
      color: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      name: '🌍 Lisboa',
      timezone: 'Europe/Lisbon',
      label: 'Horário de Portugal (WET)',
      color: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      name: '🌏 Tóquio',
      timezone: 'Asia/Tokyo',
      label: 'Horário do Japão (JST)',
      color: 'bg-gradient-to-br from-red-400 to-red-600',
    },
    {
      name: '🗽 Nova York',
      timezone: 'America/New_York',
      label: 'Horário de Nova York (EST)',
      color: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
    },
    {
      name: '🕌 Dubai',
      timezone: 'Asia/Dubai',
      label: 'Horário dos EAU (GST)',
      color: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      name: '🇦🇺 Sydney',
      timezone: 'Australia/Sydney',
      label: 'Horário de Sydney (AEDT)',
      color: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
  ]

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Horários Mundiais</h2>
          <p className="text-slate-600 dark:text-slate-400">Acompanhe a hora atual em diferentes fusos horários</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {timezones.map((tz) => (
            <TimezoneClock key={tz.timezone} {...tz} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MultiTimezoneClock
