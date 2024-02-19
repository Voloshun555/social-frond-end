
import { InputHTMLAttributes } from 'react'
export interface IFieldProps {
    placeholder: string
    error?: string
    Icon?: string
}

export type TypeInputProps = InputHTMLAttributes<HTMLInputElement> & IFieldProps