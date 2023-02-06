import {
  ToastClose,
  ToastContainer,
  ToastContent,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from './styles'
import { ReactNode } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps {
  title: string
  description: string
  duration: number
  open: boolean
  openChange: (status: boolean) => void
  children?: ReactNode
}

export function Toast({
  title,
  description,
  duration,
  open,
  openChange,
  children,
}: ToastProps) {
  return (
    <ToastContainer>
      {children}
      <ToastContent open={open} onOpenChange={openChange} duration={duration}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>

        <ToastClose>
          <X size="20" />
        </ToastClose>
      </ToastContent>

      <ToastViewport />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
