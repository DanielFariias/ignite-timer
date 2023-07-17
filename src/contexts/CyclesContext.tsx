import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ICycle, cyclesReducer } from '../reducers/cycles/reducer'
import {
  AddNewCycleAction,
  InterruptCurrentCycleAction,
  MarkCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface INewCycleFormData {
  task: string
  minutesAmount: number
}

interface ICyclesContextData {
  cycles: ICycle[]
  activeCycle: ICycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  onCycleFinish: () => void
  onSecondsPassed: (seconds: number) => void
  onNewCycle: (data: INewCycleFormData) => void
  onInterruptCycle: () => void
}

export const CyclesContext = createContext({} as ICyclesContextData)

interface ICyclesContextProviderProps {
  children: ReactNode
}

export function CyclesContextProvider({
  children,
}: ICyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storageStateAsJSON = localStorage.getItem('@pomodoro:cycles-1.0.0')

      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return initialState
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@pomodoro:cycles-1.0.0', stateJSON)
  }, [cyclesState])

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(MarkCurrentCycleAsFinishedAction())
  }

  function createNewCycle(data: INewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: ICycle = {
      id,
      task: data.task,
      // minutesAmount: 0.05,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(AddNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch(InterruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        onCycleFinish: markCurrentCycleAsFinished,
        onSecondsPassed: setSecondsPassed,
        onNewCycle: createNewCycle,
        onInterruptCycle: interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
