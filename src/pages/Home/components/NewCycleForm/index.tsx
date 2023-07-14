import * as S from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="taskList"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="taskList">
        <option value="banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        max={60}
        min={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </S.FormContainer>
  )
}
