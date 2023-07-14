import { useContext } from 'react'
import { HandPalm, Play } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import { CyclesContext } from '../../contexts/CyclesContext'

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
  const { activeCycle, onNewCycle, onInterruptCycle } =
    useContext(CyclesContext)

  const newCycleForm = useForm<TNewCycleFormData>({
    resolver: zodResolver(newCycleSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch } = newCycleForm

  const task = watch('task')
  const isSubmitButtonDisabled = !task

  return (
    <S.Container>
      <form onSubmit={handleSubmit(onNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <S.StopCountdownButton type="button" onClick={onInterruptCycle}>
            <HandPalm size={24} />
            Interromper
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton
            type="submit"
            disabled={isSubmitButtonDisabled}
          >
            <Play size={24} />
            Começar
          </S.StartCountdownButton>
        )}
      </form>
    </S.Container>
  )
}
