import { Outlet } from 'react-router-dom'
import * as S from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <S.Container>
      <Header />
      <Outlet />
    </S.Container>
  )
}
