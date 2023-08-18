import React, { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const heading = tv({
  base: 'm-0 leading-shorter text-inherit',
  variants: {
    size: {
      sm: 'text-xl',
      md: 'text-2xl',
      lg: 'text-4xl',
      '2xl': 'text-5xl',
      '3xl': 'text-6xl',
      '4xl': 'text-7xl',
      '5xl': 'text-8xl',
      '6xl': 'text-9xl',
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

export interface IHeading<E extends React.ElementType = React.ElementType> {
  as?: E
  className?: string
  children: ReactNode
}

export type IHeadingProps<E extends React.ElementType> = IHeading<E> &
  VariantProps<typeof heading> &
  Omit<PropsOf<E>, keyof IHeading>

export function Heading<E extends React.ElementType = 'h2'>({
  as,
  children,
  className,
  size,
  ...props
}: IHeadingProps<E>) {
  const Component = as || 'h2'

  return (
    <Component {...props} className={heading({ className, size })}>
      {children}
    </Component>
  )
}
