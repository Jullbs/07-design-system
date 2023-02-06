import * as Toast from '@radix-ui/react-toast'
import { keyframes, styled } from '../../styles'

export const ToastContainer = styled(Toast.Provider, {})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '24.5rem',
  padding: '$8',
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 25px))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(var(--radix-toast-swipe-end-x))',
  },
  to: {
    transform: 'translateX(calc(100% + 25px))',
  },
})

export const ToastContent = styled(Toast.Root, {
  all: 'unset',
  width: '22.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '$3 $5',
  borderRadius: '$sm',
  border: '1px solid $gray600',
  backgroundColor: '$gray800',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-state="move"]': {
    animation: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-state="cancel"]': {
    transform: 'translateX(0)',
    animation: 'transform 200ms ease-out',
  },
  '&[data-state="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$heading',
  fontWeight: 'bold',
  fontSize: '$xl',
  lineHeight: '$base',
  color: 'white',
})

export const ToastDescription = styled(Toast.Description, {
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  marginTop: '$1',
  marginLeft: '21.5rem',
  color: '$gray200',

  '&:hover': {
    cursor: 'pointer',
  },
})
