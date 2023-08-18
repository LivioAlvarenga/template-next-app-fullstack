import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const textInputDivVariants = tv({
  base: 'box-border flex items-center rounded-sm border-2 border-solid border-gray-900 bg-gray-900 transition-colors [&:has(input:disabled)]:cursor-not-allowed [&:has(input:disabled)]:opacity-50 [&:has(input:focus)]:border-primary [&:has(input:focus-visible)]:border-primary',
  variants: {
    size: {
      sm: 'py-2 px-3',
      md: 'py-3 px-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type TextInputProps = ComponentProps<'input'> &
  VariantProps<typeof textInputDivVariants> & {
    className?: string
    prefix?: string
  }

export function TextInput({
  className,
  prefix,
  size,
  ...props
}: TextInputProps) {
  return (
    <div className={textInputDivVariants({ size, className })}>
      {!!prefix && (
        <span
          id="id-prefix"
          className="font-[inherit] text-sm font-normal text-gray-400"
        >
          {prefix}
        </span>
      )}
      <input
        {...props}
        aria-labelledby={prefix ? 'id-prefix' : undefined}
        className="w-full border-0 bg-transparent font-[inherit] text-sm font-normal text-white outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
      />
    </div>
  )
}
