import { FC } from "react"

export const Label: FC<{ htmlFor: string }> = ({ htmlFor, children }) => {
    return <label htmlFor={htmlFor}>
      <span className="text-gray-700 block">{children}</span>
    </label>
}