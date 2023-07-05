import { Play } from '@phosphor-icons/react'
import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <form>
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

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
