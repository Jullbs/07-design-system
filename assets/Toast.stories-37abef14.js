var a=Object.defineProperty;var n=(t,o)=>a(t,"name",{value:o,configurable:!0});import{d as s,a as i}from"./index-78668e99.js";import{r as p}from"./index-43ec82a8.js";import{j as r}from"./jsx-runtime-1becbe17.js";import"./index-648f2948.js";import"./es.object.get-own-property-descriptor-037fa860.js";const y={parameters:{storySource:{source:`import type { ComponentStory, Meta } from '@storybook/react'
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
`,locationsMap:{primary:{startLoc:{col:53,line:15},endLoc:{col:1,line:23},startBody:{col:53,line:15},endBody:{col:1,line:23}}}}},title:"Overlay/Toast",component:s,args:{title:"Toast Title",description:"Looks like toast is working fine",duration:5e3}},f=n(t=>{const[o,e]=p.useState(!1);return r(s,{...t,open:o,openChange:e,children:r(i,{onClick:()=>e(!0),children:"Open Toast"})})},"Primary"),k=["Primary"];export{f as Primary,k as __namedExportsOrder,y as default};
//# sourceMappingURL=Toast.stories-37abef14.js.map
