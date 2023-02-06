import { ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from './styles'

export interface TooltipProps {
  text: string
  children: ReactNode
}

export function Tooltip({ text, children }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger>{children}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContent>
            {text}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}
