import type { ComponentStory, Meta } from '@storybook/react'
import { Button, Toast, ToastProps } from '@julbs-rocket-ui/react'
import { useState } from 'react'

export default {
  title: 'Overlay/Toast',
  component: Toast,
  args: {
    title: 'Toast Title',
    description: 'Looks like toast is working fine',
    duration: 5000,
  },
} as Meta<ToastProps>

export const Primary: ComponentStory<typeof Toast> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <Toast {...args} open={open} openChange={setOpen}>
      <Button onClick={() => setOpen(true)}>Open Toast</Button>
    </Toast>
  )
}
