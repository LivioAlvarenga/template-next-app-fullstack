import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type PropsOf<
  E extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
> = React.JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

export interface IBoxProps<E extends React.ElementType = React.ElementType> {
  as?: E
  className?: string
  children: ReactNode
}

export type BoxProps<E extends React.ElementType> = IBoxProps<E> &
  Omit<PropsOf<E>, keyof IBoxProps>

export function Box<E extends React.ElementType = 'div'>({
  as,
  children,
  className,
}: BoxProps<E>) {
  const Component = as || 'div'

  return (
    <Component
      className={twMerge(
        'rounded-md border-[1px] border-solid border-gray-600 bg-gray-800 p-4',
        className,
      )}
    >
      {children}
    </Component>
  )
}
