import { InputHTMLAttributes } from "react"

export type inputProps = InputHTMLAttributes<HTMLInputElement> & {
    placeholder: string
}
