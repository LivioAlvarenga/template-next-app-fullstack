import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TextAreaProps = ComponentProps<'textarea'> & {
  className?: string
}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className={twMerge(
        'box-border min-h-[80px] resize-y rounded-sm border-2 border-solid border-gray-900 bg-gray-900 px-4 py-3 font-[inherit] text-sm font-normal text-white outline-none placeholder:text-gray-400 focus:border-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 ',
        className,
      )}
    />
  )
}
