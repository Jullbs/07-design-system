import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  borderRadius: '$sm',
  background: '$gray900',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
