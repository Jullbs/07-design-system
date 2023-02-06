import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Tooltip, TooltipProps } from '@julbs-rocket-ui/react'

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,

  args: {
    text: 'Insert Tooltip text here',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: (
      <Box>
        <Text>Display Text</Text>
      </Box>
    ),
  },
}
