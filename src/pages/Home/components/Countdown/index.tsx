import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

import { CyclesContext } from '../../../../contexts/CyclesContext'

import * as S from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    onCycleFinish,
    onSecondsPassed,
    amountSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsDifference >= totalSeconds) {
          onCycleFinish()
          onSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          onSecondsPassed(secondsDifference)
        }

        return () => clearInterval(interval)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [activeCycle, activeCycleId, onCycleFinish, onSecondsPassed, totalSeconds])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `Ignite Timer | ${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <S.Countdown>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Separator>:</S.Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.Countdown>
  )
}
