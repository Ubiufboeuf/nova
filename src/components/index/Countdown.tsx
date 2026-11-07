import { useEffect, useState } from 'preact/hooks'
import { Icon } from '../ui/Icon'
import { IconArrow } from '../ui/Icons'

export function Countdown () {
  const [endTime, setEndTime] = useState<Date>()
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  function updateCountdown (endTime: Date) {
    const totalSeconds = Math.floor((endTime.getTime() - Date.now()) / 1000)

    setHours(Math.floor(totalSeconds / 3600))
    setMinutes(Math.floor((totalSeconds % 3600) / 60))
    setSeconds(Math.floor(totalSeconds % 60))
  }

  useEffect(() => {
    const now = new Date()
    const endTime = new Date(now)
    endTime.setHours(24, 0, 0, 0)

    updateCountdown(endTime)
    setEndTime(endTime)
  }, [])

  useEffect(() => {
    if (!endTime) return
    
    const id = setInterval(() => updateCountdown(endTime), 1000)

    return () => {
      clearInterval(id)
    }
  }, [endTime])
  
  return (
    <div class='flex items-center gap-2 px-6'>
      <span class='text-sm text-slate-500'>Terminan en</span>
      <span class='bg-slate-800 rounded-md text-slate-50 font-semibold px-2 text-sm p-0.5'>{String(hours).padStart(2, '0')}</span>
      <span class='bg-slate-800 rounded-md text-slate-50 font-semibold px-2 text-sm p-0.5'>{String(minutes).padStart(2, '0')}</span>
      <span class='bg-slate-800 rounded-md text-slate-50 font-semibold px-2 text-sm p-0.5'>{String(seconds).padStart(2, '0')}</span>
      <a href='/' class='ml-auto hover:underline flex items-center gap-2 text-slate-700 text-sm font-medium'>
        Ver todas
        <Icon class='size-4'>
          <IconArrow />
        </Icon>
      </a>
    </div>
  )
}
