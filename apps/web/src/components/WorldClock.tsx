import React, { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'

interface WorldClockProps {
  size?: 'small' | 'medium' | 'large'
  showSeconds?: boolean
  is24Hour?: boolean
}

const WorldClock: React.FC<WorldClockProps> = ({ 
  size = 'medium', 
  showSeconds = true,
  is24Hour = true 
}) => {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl',
  }

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const formatter = new Intl.DateTimeFormat('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: showSeconds ? '2-digit' : undefined,
        hour12: !is24Hour,
      })
      const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      setTime(formatter.format(now))
      setDate(dateFormatter.format(now))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [showSeconds, is24Hour])

  return (
    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-900 rounded-lg">
      <Globe className="w-8 h-8 text-primary-600 dark:text-primary-400 flex-shrink-0" />
      <div>
        <div className={`${sizeClasses[size]} font-mono font-bold text-slate-900 dark:text-white`}>
          {time}
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400 capitalize">
          {date}
        </div>
      </div>
    </div>
  )
}

export default WorldClock
