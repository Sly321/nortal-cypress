import { ReactNode } from "react"
import { Stepper } from "spectacle"

export type StepProps = {
    children: ReactNode
}

export function Step({ children }: StepProps) {
    return <Stepper values={[""]}>{() => children}</Stepper>
}
