import { Play } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as zod from 'zod'

import * as S from './styles'

const newCycleSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

type TNewCycleFormData = zod.infer<typeof newCycleSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<TNewCycleFormData>({
    resolver: zodResolver(newCycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: TNewCycleFormData) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  return (
    <S.Container>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="taskList"
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
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.Countdown>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.Countdown>

        <S.StartCountdownButton type="submit" disabled={isSubmitButtonDisabled}>
          <Play size={24} />
          Começar
        </S.StartCountdownButton>
      </form>
    </S.Container>
  )
}
