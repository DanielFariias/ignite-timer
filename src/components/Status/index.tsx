import * as S from './styles'

const STATUS_COLORS = {
  done: {
    color: 'green-500',
    title: 'Concluído',
  },
  interrupted: {
    color: 'red-500',
    title: 'Interrompido',
  },
  inProgress: {
    color: 'yellow-500',
    title: 'Em progresso',
  },
} as const

interface IStatusProps {
  status: keyof typeof STATUS_COLORS
}

export function Status({ status }: IStatusProps) {
  const { color, title } = STATUS_COLORS[status]

  return <S.Container color={color}>{title}</S.Container>
}
