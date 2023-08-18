import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type PropsOf<
  E extends
    | keyof React.JSX.IntrinsicElements
    | React.JSXElementConstructor<any>,
> = React.JSX.LibraryManagedAttributes<E, React.ComponentPropsWithRef<E>>

export interface IWrapperProps<
  E extends React.ElementType = React.ElementType,
> {
  as?: E
  className?: string
  children: ReactNode
}

export type WrapperProps<E extends React.ElementType> = IWrapperProps<E> &
  Omit<PropsOf<E>, keyof IWrapperProps>

export function Wrapper<E extends React.ElementType = 'div'>({
  as,
  children,
  className,
}: WrapperProps<E>) {
  const Component = as || 'div'

  return (
    <Component className={twMerge('mx-auto w-[96%] max-w-7xl', className)}>
      {children}
    </Component>
  )
}
