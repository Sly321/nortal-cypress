import { InputHTMLAttributes } from "react"
import { Label } from "./Label"

export type InputProps = {
	id: string
	label: string
	value: string
	onChange: InputHTMLAttributes<HTMLInputElement>["onChange"]
}

const style = { width: 400 }
export function Input({  id, label, onChange, value }: InputProps) {
	return <>
		<Label htmlFor={id}>{label}</Label>
		<input id={id} type="text" className="form-input rounded-lg" style={style} value={value} onChange={onChange} />
	</>
}