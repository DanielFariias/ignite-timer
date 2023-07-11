import { Status } from '../../components/Status'
import * as S from './styles'

export function History() {
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
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>ad 20 dias</td>
              <td>
                <Status status="done" />
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>ad 20 dias</td>
              <td>
                <Status status="inProgress" />
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>ad 20 dias</td>
              <td>
                <Status status="interrupted" />
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>ad 20 dias</td>
              <td>
                <Status status="done" />
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>ad 20 dias</td>
              <td>
                <Status status="done" />
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>25 minutos</td>
              <td>ad 20 dias</td>
              <td>
                <Status status="done" />
              </td>
            </tr>
          </tbody>
        </table>
      </S.HistoryList>
    </S.Container>
  )
}
