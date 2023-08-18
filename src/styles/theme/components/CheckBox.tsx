'use client'

import * as CheckBoxRadix from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { ComponentProps } from 'react'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxRadix.Root> {}

export function CheckBox(props: CheckBoxProps) {
  return (
    <CheckBoxRadix.Root
      {...props}
      className="group box-border flex h-6 w-6 cursor-pointer items-center justify-center overflow-hidden rounded-xs border-2 border-solid border-gray-900 bg-gray-900 leading-[0px] outline-none focus:border-primary focus-visible:border-primary data-[state=checked]:bg-primary"
    >
      <CheckBoxRadix.Indicator asChild>
        <CheckIcon
          size={16}
          className="text-white group-data-[state=checked]:animate-slideIn group-data-[state=unchecked]:animate-slideOut"
        />
      </CheckBoxRadix.Indicator>
    </CheckBoxRadix.Root>
  )
}
