export interface Timezone {
  name: string
  timezone: string
  offset: string
  region: string
}

const COMMON_TIMEZONES: Timezone[] = [
  // Americas
  { name: 'Los Angeles', timezone: 'America/Los_Angeles', offset: 'UTC-8/-7', region: 'Americas' },
  { name: 'Denver', timezone: 'America/Denver', offset: 'UTC-7/-6', region: 'Americas' },
  { name: 'Chicago', timezone: 'America/Chicago', offset: 'UTC-6/-5', region: 'Americas' },
  { name: 'New York', timezone: 'America/New_York', offset: 'UTC-5/-4', region: 'Americas' },
  { name: 'São Paulo', timezone: 'America/Sao_Paulo', offset: 'UTC-3/-2', region: 'Americas' },
  { name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', offset: 'UTC-3', region: 'Americas' },
  { name: 'Caracas', timezone: 'America/Caracas', offset: 'UTC-4', region: 'Americas' },

  // Europe
  { name: 'London', timezone: 'Europe/London', offset: 'UTC+0/+1', region: 'Europe' },
  { name: 'Dublin', timezone: 'Europe/Dublin', offset: 'UTC+0/+1', region: 'Europe' },
  { name: 'Lisboa', timezone: 'Europe/Lisbon', offset: 'UTC+0/+1', region: 'Europe' },
  { name: 'Paris', timezone: 'Europe/Paris', offset: 'UTC+1/+2', region: 'Europe' },
  { name: 'Berlin', timezone: 'Europe/Berlin', offset: 'UTC+1/+2', region: 'Europe' },
  { name: 'Rome', timezone: 'Europe/Rome', offset: 'UTC+1/+2', region: 'Europe' },
  { name: 'Athens', timezone: 'Europe/Athens', offset: 'UTC+2/+3', region: 'Europe' },
  { name: 'Moscow', timezone: 'Europe/Moscow', offset: 'UTC+3', region: 'Europe' },
  { name: 'Istanbul', timezone: 'Europe/Istanbul', offset: 'UTC+3', region: 'Europe' },

  // Africa & Middle East
  { name: 'Cairo', timezone: 'Africa/Cairo', offset: 'UTC+2', region: 'Africa' },
  { name: 'Dubai', timezone: 'Asia/Dubai', offset: 'UTC+4', region: 'Middle East' },
  { name: 'Tehran', timezone: 'Asia/Tehran', offset: 'UTC+3:30', region: 'Middle East' },
  { name: 'Jerusalem', timezone: 'Asia/Jerusalem', offset: 'UTC+2/+3', region: 'Middle East' },
  { name: 'Johannesburg', timezone: 'Africa/Johannesburg', offset: 'UTC+2', region: 'Africa' },

  // Asia
  { name: 'Bangkok', timezone: 'Asia/Bangkok', offset: 'UTC+7', region: 'Asia' },
  { name: 'Hong Kong', timezone: 'Asia/Hong_Kong', offset: 'UTC+8', region: 'Asia' },
  { name: 'Singapore', timezone: 'Asia/Singapore', offset: 'UTC+8', region: 'Asia' },
  { name: 'Shanghai', timezone: 'Asia/Shanghai', offset: 'UTC+8', region: 'Asia' },
  { name: 'Tóquio', timezone: 'Asia/Tokyo', offset: 'UTC+9', region: 'Asia' },
  { name: 'Seoul', timezone: 'Asia/Seoul', offset: 'UTC+9', region: 'Asia' },
  { name: 'Sydney', timezone: 'Australia/Sydney', offset: 'UTC+10/+11', region: 'Oceania' },
  { name: 'Auckland', timezone: 'Pacific/Auckland', offset: 'UTC+12/+13', region: 'Oceania' },
]

export const useTimezones = () => {
  const getTimezonesByRegion = (region: string): Timezone[] => {
    return COMMON_TIMEZONES.filter(tz => tz.region === region)
  }

  const getAllRegions = (): string[] => {
    return Array.from(new Set(COMMON_TIMEZONES.map(tz => tz.region)))
  }

  const getTimezoneByName = (name: string): Timezone | undefined => {
    return COMMON_TIMEZONES.find(tz => tz.name === name)
  }

  return {
    allTimezones: COMMON_TIMEZONES,
    getTimezonesByRegion,
    getAllRegions,
    getTimezoneByName,
  }
}

export default useTimezones
