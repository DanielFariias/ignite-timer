import { Play } from '@phosphor-icons/react'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <form>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="taskList"
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
          />

          <span>minutos.</span>
        </S.FormContainer>

        {/* CountDown */}
        <S.Countdown>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.Countdown>

        {/* button */}
        <S.StartCountdownButton type="submit">
          <Play size={24} />
          Começar
        </S.StartCountdownButton>
      </form>
    </S.Container>
  )
}
