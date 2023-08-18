import React, { ComponentProps, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const bntVariants = tv({
  base: 'accessibilityFocus box-border flex min-w-[120px] cursor-pointer items-center justify-center gap-2 px-4 py-0 text-center text-sm font-medium capitalize transition-colors disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary:
        'bg-primary text-white enabled:hover:bg-primary/80 disabled:bg-gray-200',
      secondary:
        'bg-transparent text-primary border-2 border-solid border-primary enabled:hover:bg-primary enabled:hover:text-white disabled:border-gray-200 disabled:text-gray-200',
      tertiary:
        'bg-transparent text-gray-100 enabled:hover:text-white enabled:hover:bg-gray-100/10 disabled:text-gray-600',
    },
    size: {
      sm: 'h-[38px]',
      md: 'h-[46px]',
    },
    radio: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    radio: 'sm',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof bntVariants> & {
    children: ReactNode
    className?: string
    IconComponent?: React.ComponentType<any>
  }

export function Button({
  children,
  className,
  variant,
  size,
  radio,
  IconComponent,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={bntVariants({ className, variant, size, radio })}
    >
      {children}
      {IconComponent && <IconComponent size={16} className="text-inherit" />}
    </button>
  )
}
