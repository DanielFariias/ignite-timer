import { useContext } from 'react'
import { Status } from '../../components/Status'
import * as S from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <S.Container>
      <h1>Meu histórico</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarfa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(cycle?.startDate, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </td>
                <td>
                  {cycle?.finishedDate && <Status status="done" />}
                  {cycle?.interruptedDate && <Status status="interrupted" />}
                  {!cycle?.finishedDate && !cycle?.interruptedDate && (
                    <Status status="inProgress" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.HistoryList>
    </S.Container>
  )
}
