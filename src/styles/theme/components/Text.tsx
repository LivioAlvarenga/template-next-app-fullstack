import React, { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const text = tv({
  base: 'm-0 leading-base text-inherit',
  variants: {
    size: {
      xxs: 'text-xxs',
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
      '7xl': 'text-7xl',
      '8xl': 'text-8xl',
      '9xl': 'text-9xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

type PropsOf<
  E extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
> = React.JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

export interface IText<E extends React.ElementType = React.ElementType> {
  as?: E
  className?: string
  children: ReactNode
}

export type ITextProps<E extends React.ElementType> = IText<E> &
  VariantProps<typeof text> &
  Omit<PropsOf<E>, keyof IText>

export function Text<E extends React.ElementType = 'p'>({
  as,
  children,
  className,
  size,
  ...props
}: ITextProps<E>) {
  const Component = as || 'p'

  return (
    <Component {...props} className={text({ className, size })}>
      {children}
    </Component>
  )
}
